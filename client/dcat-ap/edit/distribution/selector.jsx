import React from "react";
import {PropTypes} from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

export default function Selector(props) {
    return (
        <div style={{"textAlign": "center"}}>
            <Button disabled={props.index < 1}
                    onClick={() => props.onChange(props.index - 1)}>
                <Icon>navigate_before</Icon>
            </Button>
            {props.items.map((value, index) => (
                <SelectorItem
                    key={index}
                    active={index === props.index}
                    error={value.error > 0}
                    onClick={() => props.onChange(index)}/>
            ))}
            <IconButton style={{"color": "green"}} onClick={props.onAdd}>
                <Icon>add_circle</Icon>
            </IconButton>
            <Button disabled={props.index + 1 >= props.items.length}
                    onClick={() => props.onChange(props.index + 1)}>
                <Icon>navigate_next</Icon>
            </Button>
        </div>
    )
}

Selector.propTypes = {
    "index": PropTypes.number.isRequired,
    "items": PropTypes.array.isRequired,
    "onChange": PropTypes.func.isRequired,
    "onAdd": PropTypes.func.isRequired
};

function SelectorItem(props) {
    if (props.active) {
        return (
            <IconButton>
                <Icon color="primary">lens</Icon>
            </IconButton>
        )
    }
    if (props.error) {
        return (
            <IconButton onClick={props.onClick}>
                <Icon color="error">error_outline</Icon>
            </IconButton>
        )
    }
    return (
        <IconButton onClick={props.onClick}>
            <Icon>lens</Icon>
        </IconButton>
    )
}

SelectorItem.propTypes = {
    "active": PropTypes.bool.isRequired,
    "error": PropTypes.bool.isRequired,
    "onClick": PropTypes.func.isRequired
};