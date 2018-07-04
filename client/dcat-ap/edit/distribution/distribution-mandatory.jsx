import React from "react";
import PropTypes from "prop-types";
import _TextField from "@material-ui/core/TextField/index";
import {
    wrapEvent,
    wrapSimpleModel,
    wrapMaterialUiError
} from "app-ui/component-wrappers";

const TextField = wrapSimpleModel(wrapMaterialUiError(wrapEvent(_TextField)));

export default function DistributionMandatory({value, onChange}) {
    return (
        <React.Fragment>
            <br/>
            <TextField
                label={"Access URL"}
                placeholder={""}
                property="access-url"
                model={value} onChange={onChange}
                fullWidth required/>
        </React.Fragment>
    );
}

DistributionMandatory.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired
};
