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

const frequencyCodeList = ["", "annual"];
const rightCodeList = ["", "Open data"];

export default function DatasetOptional({value, onChange}) {
    return (
        <React.Fragment>
            <br/>
            <TextField
                label={"Type"}
                placeholder={""}
                property="type"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Language"}
                placeholder={""}
                property="language"
                model={value} onChange={onChange}/>
            <br/>
            <SelectField
                label={"Update frequency"}
                property="frequency"
                model={value} onChange={onChange}
                menuItems={frequencyCodeList}/>
            <br/>
            <DatePicker
                label={"Release date"}
                property="release-date"
                model={value} onChange={onChange}/>
            <br/>
            <DatePicker
                label={"Update"}
                property="update"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Spatial coverage"}
                placeholder={""}
                property="spatial-coverage"
                model={value} onChange={onChange}/>
            <br/>
            <DatePicker
                label={"Temporal coverage start"}
                property="temporal-coverage-start"
                model={value} onChange={onChange}/>
            <br/>
            <DatePicker
                label={"Temporal coverage end"}
                property="temporal-coverage-end"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Identifier"}
                placeholder={""}
                property="identifier"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Other Identifier"}
                placeholder={""}
                property="other-identifier"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Documentation"}
                placeholder={""}
                property="documentation"
                model={value} onChange={onChange}
                multiline={true}/>
            <br/>
            <SelectField
                label={"Access rights"}
                property="access-rights"
                model={value} onChange={onChange}
                menuItems={rightCodeList}/>
            <br/>
            <MultiLanguageTextField
                label={"Provenance"}
                itemLabel={"Provenance"}
                placeholder={""}
                property="provenance"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Catalog"}
                placeholder={""}
                property="catalog"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Sample distribution"}
                placeholder={""}
                property="sample"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Landing page"}
                placeholder={""}
                property="landing-page"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Related resource"}
                placeholder={""}
                property="related-resource"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Conforms to"}
                placeholder={""}
                property="conforms-to"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Source dataset"}
                placeholder={""}
                property="source"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Has version"}
                placeholder={""}
                property="has-version"
                model={value} onChange={onChange}/>
            <br/>
            <MultiTextField
                label={"Is version of"}
                placeholder={""}
                property="is-version"
                model={value} onChange={onChange}/>
            <br/>
            <TextField
                label={"Version"}
                placeholder={""}
                property="version"
                model={value} onChange={onChange}/>
            <br/>
            <MultiLanguageTextField
                label={"Version notes"}
                itemLabel={"Version note"}
                placeholder={""}
                property="version-notes"
                model={value} onChange={onChange}/>
        </React.Fragment>
    );
}

DatasetOptional.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
