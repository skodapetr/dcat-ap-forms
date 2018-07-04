import React from "react";
import PropTypes from "prop-types";
import _MultiLanguageTextField from "app-ui/multi-language-text-field";
import _MultiTextField from "app-ui/multi-text-field";
import _SelectField from "app-ui/select-field";
import _TextField from "@material-ui/core/TextField";
import _DatePicker from "app-ui/date-picker";
import {
    wrapEvent,
    wrapSimpleModel,
    wrapMaterialUiError
} from "app-ui/component-wrappers";

const TextField = wrapSimpleModel(wrapMaterialUiError(wrapEvent(_TextField)));
const MultiLanguageTextField = wrapSimpleModel(_MultiLanguageTextField);
const MultiTextField = wrapSimpleModel(_MultiTextField);
const SelectField = wrapSimpleModel(_SelectField);
const DatePicker = wrapSimpleModel(_DatePicker);

const rightCodeList = ["", "Open data"];
const statusCodeList = ["", "Completed"];

export default function DistributionOptional({value, onChange}) {
    return (
        <React.Fragment>
            <TextField
                label={"Byte size"}
                placeholder={""}
                property="byte-size"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Checksum"}
                placeholder={""}
                property="checksum"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Documentation"}
                placeholder={""}
                property="documentation"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Download URL"}
                placeholder={""}
                property="download-url"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Language"}
                placeholder={""}
                property="language"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Linked schemas"}
                placeholder={""}
                property="linked-schemas"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Media type"}
                placeholder={""}
                property="media-type"
                model={value} onChange={onChange}/>
            <br/>
            <DatePicker
                label={"Release date"}
                property="release-date"
                model={value} onChange={onChange}/>
            <br/>
            <SelectField
                label={"Access rights"}
                placeholder={""}
                property="rights"
                model={value} onChange={onChange}
                menuItems={rightCodeList}/>
            <br/>
            <SelectField
                label={"Status"}
                property="status"
                model={value} onChange={onChange}
                menuItems={statusCodeList}/>
            <br/>
            <MultiLanguageTextField
                label={"Distribution titles"}
                itemLabel={"Distribution title"}
                property="title"
                model={value} onChange={onChange}/>
            <br/>
            <DatePicker
                label={"Update"}
                property="update"
                model={value} onChange={onChange}/>
        </React.Fragment>
    );
}

DistributionOptional.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
