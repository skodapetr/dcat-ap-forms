import React from "react";
import PropTypes from "prop-types";
import _SelectField from "app-ui/select-field";
import _TextField from "@material-ui/core/TextField";
import _MultiLanguageTextField from "../../../app-ui/multi-language-text-field";
import {
    wrapEvent,
    wrapSimpleModel,
    wrapMaterialUiError
} from "app-ui/component-wrappers";

const TextField = wrapSimpleModel(wrapMaterialUiError(wrapEvent(_TextField)));
const MultiLanguageTextField = wrapSimpleModel(_MultiLanguageTextField);
const SelectField = wrapSimpleModel(_SelectField);

const contactPointTypeCodeList = ["", "Individual", "Organization", "Group", "Location"];
const themesCodeList = ["", "Agriculture, fisheries, forestry and food"];
const publisherTypeCodeList = ["", "TODO"];

export default function DatasetRecommended({value, onChange}) {
    return (
        <React.Fragment>
            <div style={{"marginTop": "2rem"}}>
                <b>Contact point</b>
                <br/>
                <SelectField
                    label={"Contact point type"}
                    property="contact-point-type"
                    model={value} onChange={onChange}
                    menuItems={contactPointTypeCodeList}/>
                <br/>
                <TextField
                    label={"Contact Name"}
                    placeholder={""}
                    property="contact-point-name"
                    model={value} onChange={onChange}/>
                <br/>
                <TextField
                    label={"Contact Email"}
                    placeholder={""}
                    property="contact-point-email"
                    model={value} onChange={onChange}/>
            </div>
            <div style={{"marginTop": "2rem"}}>
                <b>Keywords and Themes</b>
                <br/>
                <MultiLanguageTextField
                    label={"Keywords"}
                    itemLabel={"Keyword"}
                    placeholder={""}
                    property="keyword"
                    model={value} onChange={onChange}/>
                <br/>
                <SelectField
                    label={"Dataset EU theme"}
                    placeholder={""}
                    property="theme"
                    model={value} onChange={onChange}
                    menuItems={themesCodeList}/>
                <br/>
            </div>
            <div style={{"marginTop": "2rem"}}>
                <b>Publisher</b>
                <br/>
                <TextField
                    label={"Publisher IRI"}
                    placeholder={""}
                    property="publisher-iri"
                    model={value} onChange={onChange}/>
                <br/>
                <MultiLanguageTextField
                    label={"Publisher names"}
                    itemLabel={"Publisher name"}
                    placeholder={""}
                    property="publisher-name"
                    model={value} onChange={onChange}/>
                <br/>
                <SelectField
                    label={"Publisher type"}
                    property="publisher-type"
                    model={value} onChange={onChange}
                    menuItems={publisherTypeCodeList}/>
            </div>
        </React.Fragment>
    );
}

DatasetRecommended.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
