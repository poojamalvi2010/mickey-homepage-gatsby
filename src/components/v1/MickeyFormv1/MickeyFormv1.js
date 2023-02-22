import React, { useState, useEffect, useCallback } from "react"
import axiosInstance from "../../../auth/axiosApi"
import {
  Input,
  Icon,
  Form,
  Header,
  Button,
  Segment,
  Dimmer,
  Loader,
  Modal,
  FormTextArea,
} from "semantic-ui-react"
import { toast } from "react-toastify"
// import MickeySearch from "../Search/Search"
// import SemanticDatepicker from "react-semantic-ui-datepickers"
import { djangoResponseToInputValues } from "../../../utils/utils"
import "./MickeyForm.css"
// import { useSelector, useDispatch } from 'react-redux'
// import { addForm } from '../../features/user/userSlice'
import getForm from "../../../forms/BaseForm"
import MickeyFormField from "./MickeyFormFieldv1"
import _ from "underscore"

function MickeyForm(props) {
  // Vars
  let formName = props.formName
  let successMessage = props.successMessage
  let failureMessage = props.failureMessage
  let url = props.url

  // Field Values
  const [values, setValues] = useState(null)
  const [groups, setGroups] = useState(null)
  const [loading, setLoading] = useState(false)
  const [dependencies, setDependencies] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [addModelModalOpen, setAddModelModalOpen] = useState(false)
  const [showInnerSuccessMessage, setShowInnerSuccessMessage] = useState(false)
  const [reload, setReload] = useState(false)
  const [addModelModel, setAddModelModel] = useState(false)
  const [addModelForm, setAddModelForm] = useState(false)
  const [addModelUrl, setAddModelUrl] = useState(false)
  const [form, setForm] = useState(null)

  function clearValues() {

    let newDict = {}
    for (let val in values) {
      newDict[val] = undefined
    }
    setValues(newDict)
  }

  function getFormInitialValues(form) {
    let values = {}
    form.groups.forEach((group) => {
      for (const [key, field] of Object.entries(group)) {
        if (field.type == 'checkbox') {
          values[key] = false
        } else {
          values[key] = null
        }
      }
    })

    return values
  }

  function getForeignKeyDependencies(key) {
    let fields = []
    if (!dependencies) {
      return []
    }
    dependencies.forEach((dep, index) => {
      let type = dep.type
      if (!dep.deps) {
        return
      }
      dep.deps.forEach(d => {
        if (type === "foreign_key_default" && key === d.fk) {
          fields.push(dep)
        }
      })
    })
    return fields
  }

  async function getForeignKeyValues(upFields, key, id) {
    let fields = getForeignKeyDependencies(key)
    let updatedFields = Object.assign({}, upFields)

    for (let field of fields) {
      let fieldToChange = field.field
      let transaction;
      let getValue;

      for (let dep of field.deps) {
        if (key != dep.fk) {
          continue;
        }
        transaction = await axiosInstance.get(`${dep.url}${id}/`)
        if (!transaction) {
          continue;
        }

        let passesIfStatements = false;

        let fieldToGet = dep.field
        getValue = transaction.data[fieldToGet]

        if (dep.if) {
          dep.if.forEach(i => {
            if (key != dep.fk) {
              return
            }
            let val = updatedFields[i.field]
            if (i.values.includes(val)) {
              passesIfStatements = true
            }
          })
        } else {
          passesIfStatements = true
        }
        if (passesIfStatements && key == dep.fk) {
          updatedFields = {
            ...updatedFields,
            [fieldToChange]: getValue
          }
        }
      }
    }

    return updatedFields
  }

  useEffect(() => {
    async function theForm() {
      let form = getForm(formName);
      if (form) {
        setForm(Object.assign({}, form))
      }
      if (!form) {
        return
      }
      setGroups(form.groups)
      setDependencies(form.dependencies)
      if (props.instanceId) {
        clearValues()
        let resInstance = await axiosInstance.get(
          props.url + props.instanceId + "/"
        )
        let vals = djangoResponseToInputValues(form.groups, resInstance.data)
        setValues(vals)
      } else {
        setValues(getFormInitialValues(form))
      }
      if (props.extraFields) {
        props.extraFields.forEach((field) => {
          let v = {}
          Object.assign(v, values)
          v[field.name] = field.value
          setValues(v)
        })
      }
      setLoaded(true)
      if (props.setReload) {
        props.setReload(false)
      }
    }

    theForm()
    return () => {
      clearValues()
    }
  }, [formName, props.instanceId, props.url, props.extraFields])

  function getDefaultDependencies(key) {
    let fields = []
    if (!dependencies) {
      return []
    }
    dependencies.forEach((dep, index) => {
      let type = dep.type
      if (type === "default" && dep?.dep?.fields?.includes(key)) {
        fields.push(dep)
      }
    })
    return fields
  }

  const handleInputChange = async (event, data, overwriteValue = null) => {
    if (!loaded) {
      return
    }
    let value;
    let key = data.name;
    if (!key) {
      return
    }
    if (overwriteValue) {
      value = overwriteValue
    } else {
      if (data.type === "checkbox") {
        value = data.checked
      } else {
        value = "result" in data && data.result ? data.result.id : data.value
      }
    }
    let field =
      "result" in data && data.result && data.result.name
        ? data.result.name
        : data.name


    let updatedFields = {
      ...values,
      [data.name]: value
    }

    setValues(updatedFields)

    updatedFields = await getForeignKeyValues(updatedFields, key, value);

    let fields = getDefaultDependencies(key)
    let allParams = true;

    fields.map(field => {
      let fieldToChange = field.field
      let params = []
      field.dep.inputs.some((f) => {
        let v = updatedFields[f]
        if (v) {
          params.push(parseFloat(updatedFields[f]))
        } else {
          allParams = false
        }
      })
      if (allParams) {
        let getValue = field.dep.function(...params)
        updatedFields = { ...updatedFields, [fieldToChange]: getValue }
      }
    })
    setValues(updatedFields)

    if (props.instanceId) {
      if (data.type === "checkbox") {
        data["value"] = data["checked"]
      }
      await axiosInstance.post(`/auto-update/`, {
        model: props.model,
        field: field,
        value: value,
        instance_id: props.instanceId,
      })
      if (props.setReload) {
        props.setReload(true)
      }
    }
  }

  function validation() {
    return true
  }

  async function onSubmit() {
    setLoading(true)
    if (!validation()) {
      props.handleForm("unvalidated")
      return
    }

    let vals = props.values ? { ...props.values, ...values } : values
    let res = await axiosInstance.post(url, vals)
    if (res?.data?.error) {
      toast.error(res.data.error)
      if (props.handleForm) {
        props.handleForm("failure", res.data)
      }
    } else if (
      (res && res.data && res.data.success) ||
      (res && res.status && res.status && res.status < 205)
    ) {
      if (successMessage) toast.success(successMessage)
      if (props.innerSuccessMessage) {
        setShowInnerSuccessMessage(true)
      }
      if (props.handleForm) {
        props.handleForm("success", res.data)
      }
    } else {
      if (res?.data?.error) {
        toast.error(res.data.error)
      } else if (failureMessage) {
        toast.error(failureMessage)
      }
      if (props.handleForm) {
        props.handleForm("failure", res.data)
      }
    }
    setLoading(false)
  }

  function handleAddModalForm(status, data) {
    if (status === "success") {
      setAddModelModalOpen(false)
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit} autoComplete="new-password">
        {!loaded && (
          <Segment className={"empty-segment"}>
            <Dimmer inverted active >
              <Loader>Loading</Loader>
            </Dimmer>
          </Segment>
        )}
        {showInnerSuccessMessage && props.innerSuccessMessage && (
          <Segment placeholder className={"mickey-table-placeholder"}>
            <Header icon>
              <Icon color={'green'} name={'check'} />
              {props.innerSuccessMessage}
              {props.innerButtonMessage &&
                <Button
                  as={'a'}
                  primary
                  className={'mickey-btn'}
                  href={props.innerButtonHref}
                >
                  {props.innerButtonMessage}
                </Button>
              }
            </Header>
          </Segment>
        )}
        {loaded && !showInnerSuccessMessage &&
          groups &&
          groups.map((group, key) => {
            return (
              <Form.Group {...group} key={key}>
                {group.fields &&
                  Object.keys(group.fields).map((key) => {
                    let field = group.fields[key]
                    return (
                      <MickeyFormField
                        field={field}
                        keyValue={key}
                        model={props.model}
                        values={values}
                        setValues={setValues}
                        dependencies={dependencies}
                        setAddModelModel={setAddModelModel}
                        setAddModelForm={setAddModelForm}
                        setAddModelUrl={setAddModelUrl}
                        setAddModelModalOpen={setAddModelModalOpen}
                        handleInputChange={handleInputChange}
                      />
                    )
                  })}
              </Form.Group>
            )
          })}
        {loaded && props.extraFields && !showInnerSuccessMessage && (
          <Form.Group>
            {props.extraFields.map((field) => {
              return <field.field.type
                {...field.field.props}
                value={values[field.name]}
                onChange={(e, d) => {
                  handleInputChange(e, d)
                }}
              />
            })}
          </Form.Group>
        )}
        {!props.instanceId && !showInnerSuccessMessage && (
          <Button
            className={"submit-btn"}
            loading={loading}
            size={props.buttonSize}
            color={"primary"}
            floated={props.buttonFloatedRight ? 'right' : ''}
            type={"submit"}
          >
            {props.buttonLabel ? props.buttonLabel : 'Add'}
          </Button>
        )}
        {props.buttonFloatedRight && <div style={{ 'height': '50px' }}></div>}
      </Form>
      <Modal
        onClose={() => setAddModelModalOpen(false)}
        onOpen={() => setAddModelModalOpen(true)}
        open={addModelModalOpen}
      >
        <Modal.Header>Add</Modal.Header>
        <Modal.Content>
          <MickeyForm
            formName={addModelForm}
            model={addModelModel}
            reload={reload}
            setReload={setReload}
            successMessage={"Added!"}
            failureMessage={"Error adding, please try again."}
            url={addModelUrl}
            handleForm={handleAddModalForm}
          />
        </Modal.Content>
      </Modal>
    </>
  )
}

export default MickeyForm
