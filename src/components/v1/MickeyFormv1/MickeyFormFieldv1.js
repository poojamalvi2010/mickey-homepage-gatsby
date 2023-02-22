import React, { useState, useEffect } from "react";
import axiosInstance from "../../../auth/axiosApi";
import {
  Input,
  Dropdown,
  Form,
  Checkbox,
  Button,
} from "semantic-ui-react";
import _ from 'underscore'
// import MickeySearch from "../Search/Search";
// import SemanticDatepicker from "react-semantic-ui-datepickers";
import "./MickeyForm.css";

function MickeyFormField(props) {
  const [field, setField] = useState(props.field);
  const [dependencies, setDependencies] = useState(props.dependencies);
  const [key, setKey] = useState(props.keyValue);
  const [options, setOptions] = useState(null)

  function checkDependencies(key, type) {
    if (!dependencies) {
      return true
    }
    for (var dep of dependencies) {
      if (!props.values) {
        return true
      }
      if (key === dep.field && dep.type === type) {
        let deps = dep.deps
        for (var d in deps) {
          let val = props.values[deps[d].field]
          if (!deps[d].values.includes(val)) {
            return false
          }
        }
      }
    }
    return true
  }

  function addModel(field) {
    props.setAddModelModel(field.model)
    props.setAddModelForm(field.model_form)
    props.setAddModelUrl(field.url)
    props.setAddModelModalOpen(true)
  }


  useEffect(() => {
    async function getChoices() {
      if (field.type === 'dropdown' || field.type == 'multiple dropdown') {
        let res = await axiosInstance.get(`/choices/?model=${props.model}&field=${key}`);
        setOptions(res?.data?.choices)
      }
    }
    getChoices()
  }, [])


  return (
    <>
    {key && checkDependencies(key, "hidden") && props.values && (
      <Form.Field key={key}>
        {field && (
          <label>
            {field.label
              ? field.label
              : key.charAt(0).toUpperCase() + key.slice(1)}
            {field.allow_add ? (
              <Button
                size={"mini"}
                type={"button"}
                basic
                circular
                icon={"plus"}
                onClick={() => {
                  addModel(field);
                }}
                className={"grey-basic-hover"}
                color={"grey"}
                style={{ "margin-bottom": "5px" }}
                floated={"right"}
              />
            ) : (
              ""
            )}
          </label>
        )}
        {field.type === "dropdown" && (
          <Dropdown
            placeholder={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            fluid
            search
            disabled={!checkDependencies(key, "disabled")}
            autoComplete="new-password"
            selection
            label={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            name={key}
            key={key}
            value={props.values[key]}
            options={options}
            onChange={(e, d) => {
              props.handleInputChange(e, d)
            }}
          />
        )}
        {field.type === "multiple dropdown" && (
          <Dropdown
            placeholder={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            fluid
            search
            multiple
            disabled={!checkDependencies(key, "disabled")}
            autoComplete="new-password"
            selection
            label={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            name={key}
            key={key}
            value={props.values[key]}
            options={options}
            onResultSelect={(e, d) => {
              props.handleInputChange(e, d)
            }}
          />
        )}
        {field.type === "checkbox" && (
          <Checkbox
            name={key}
            value={props.values[key]}
            disabled={!checkDependencies(key, "disabled")}
            checked={props.values[key]}
            onChange={(e, d) => {
              props.handleInputChange(e, d)
            }}
          />
        )}
        {/* {field.type === "search" && (
          <MickeySearch
            url={field.url}
            name={key}
            value={props.values[key]}
            disabled={!checkDependencies(key, "disabled")}
            autoComplete="new-password"
            filter={field.filter}
            placeholder={
              "Search " + field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            titleFields={field.title_fields ? field.title_fields : ["id"]}
            descriptionFields={field.description_fields}
            onChange={(e, d) => {
              props.handleInputChange(e, d)
            }}
          />
        )} */}
        {field.type === "text" && (
          <Input
            placeholder={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            name={key}
            type={"text"}
            autoComplete="new-password"
            disabled={!checkDependencies(key, "disabled")}
            value={props.values[key]}
            onChange={(e, d) => {
              props.handleInputChange(e, d)
            }}
          />
        )}
        {field.type === "number" && (
          <Input
            placeholder={
              field.label
                ? field.label
                : key.charAt(0).toUpperCase() + key.slice(1)
            }
            name={key}
            type={"number"}
            autoComplete="new-password"
            step={field.step ? field.step : "1"}
            disabled={!checkDependencies(key, "disabled")}
            value={props.values[key]}
            onChange={(e, d) => {
              props.handleInputChange(e, d);
            }}
          />
        )}
        {/* {field.type === "date" && (
          <div className="customDatePickerWidth">
            <SemanticDatepicker
              onChange={(e, d) => {
                props.handleInputChange(e, d)
              }}
              clearable={true}
              autoComplete="nope"
              disabled={!checkDependencies(key, "disabled")}
              name={key}
              value={props.values[key]}
              format={"MMM D, YYYY"}
            />
          </div>
        )} */}
      </Form.Field>
    )}
    </>
  );
}

export default MickeyFormField;
