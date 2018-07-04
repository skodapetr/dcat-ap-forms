import React from "react";
import PropTypes from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function SelectField(props) {
    const style = {"width": "100%", ...props.style};
    const onChange = (event) => props.onChange(event.target.value);
    return (
        <FormControl style={style}>
            <InputLabel>{props.label}</InputLabel>
            <Select onChange={onChange} value={props.value}>
                {props.menuItems.map((value) => (
                    <MenuItem value={value} key={value}>
                        {value}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

SelectField.propTypes = {
    "label": PropTypes.string.isRequired,
    "onChange": PropTypes.func.isRequired,
    "value": PropTypes.string.isRequired,
    "menuItems": PropTypes.array.isRequired,
    "style": PropTypes.object
};