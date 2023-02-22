import { isNull } from "underscore";
import axiosInstance from "../auth/axiosApi";
import { SupplierForm } from "./SupplierForm";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
let forms = {
  SupplierForm: SupplierForm,
};

function get_label_from_field_name(key, field) {
  if ("label" in field) {
    return field["label"];
  }
  key = key.replace("_", " ");
  return toTitleCase(key);
}

function values(format) {
  let values = {};
  format.forEach((group) => {
    for (const [key, field] of Object.entries(group["fields"])) {
      if (field["type"] == "checkbox") {
        values[key] = false;
      } else {
        values[key] = null;
      }
    }
  });

  return values;
}

function groups(format) {
  format.forEach((group) => {
    for (const [key, field] of Object.entries(group["fields"])) {
      field["label"] = get_label_from_field_name(key, field);
    }
  });
  return format;
}


export default function getForm(formName, model) {
  let form;
  if (formName in forms) {
    form = forms[formName];
  }

  return {
    success: true,
    groups: groups(form["format"]),
    values: values(form["format"]),
    dependencies: form["dependencies"],
  };
}
