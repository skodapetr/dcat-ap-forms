import React from "react";
import PropTypes from "prop-types";
import _MultiLanguageTextField from "app-ui/multi-language-text-field";
import _SelectField from "app-ui/select-field";
import _TextField from "@material-ui/core/TextField/index";
import {
    wrapEvent,
    wrapSimpleModel,
    wrapMaterialUiError
} from "app-ui/component-wrappers";

const TextField = wrapSimpleModel(wrapMaterialUiError(wrapEvent(_TextField)));
const MultiLanguageTextField = wrapSimpleModel(_MultiLanguageTextField);
const SelectField = wrapSimpleModel(_SelectField);

const formatCodeList = ["", "ARC"];

export default function Recommended({value, onChange}) {
    return (
        <React.Fragment>
            <MultiLanguageTextField
                label={"Descriptions"}
                itemLabel={"Description"}
                placeholder={""}
                property="description"
                model={value} onChange={onChange}/>
            <SelectField
                label={"Format"}
                placeholder={""}
                property="format"
                model={value} onChange={onChange}
                menuItems={formatCodeList}/>
            <TextField
                label={"License"}
                placeholder={""}
                property="license"
                model={value} onChange={onChange}/>
        </React.Fragment>
    );
}

Recommended.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
