import React from "react";
import PropTypes from "prop-types";
import _MultiLanguageTextField from "app-ui/multi-language-text-field";
import {
    wrapSimpleModel,
} from "app-ui/component-wrappers";

const MultiLanguageTextField = wrapSimpleModel(_MultiLanguageTextField);

export default function DatasetMandatory({value, onChange}) {
    return (
        <React.Fragment>
            <br/>
            <MultiLanguageTextField
                label={"Dataset titles"}
                itemLabel={"Title"}
                placeholder={"Title"}
                property="title"
                model={value} onChange={onChange}/>
            <br/>
            <MultiLanguageTextField
                label={"Dataset descriptions"}
                itemLabel={"Description"}
                placeholder={"Description"}
                property="description"
                model={value} onChange={onChange}
                multiline={true}/>
        </React.Fragment>
    );
}

DatasetMandatory.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
