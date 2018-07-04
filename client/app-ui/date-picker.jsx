import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export default function DatePicker(props) {
    const onChange = (event) => {
        const value = event.target.value;
        props.onChange(value ? value : "");
    };
    const style = {"marginTop": "1rem", ...props.style};
    const updatedProps = {
        ...props,
        "style": style,
        "type": "date",
        "onChange": onChange,
        "InputLabelProps": {"shrink": true}
    };
    return (
        <TextField {...updatedProps}/>
    )
}

DatePicker.propTypes = {
    "label": PropTypes.string.isRequired,
    "onChange": PropTypes.func.isRequired,
    "value": PropTypes.string.isRequired,
};