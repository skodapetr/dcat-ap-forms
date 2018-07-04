import React from "react";
import PropTypes from "prop-types";

/**
 * Convert event to value for onChange callback.
 */
export function wrapEvent(Component) {

    function EventWrap(props) {
        const onChange = (event) => props.onChange(event.target.value);
        const newProps = {
            ...props,
            "onChange": onChange
        };
        return (
            <Component {...newProps}/>
        )
    }

    EventWrap.propTypes = {
        "onChange": PropTypes.func.isRequired
    };

    return EventWrap;
}

/**
 * Enable component to use simple model, require additional properties
 * property and model.
 */
export function wrapSimpleModel(Component) {

    function ModelWrap(props) {
        const property = props.property;
        const model = props.model;

        const errorProperty = "error-" + property;

        const newProps = {
            ...props,
            "id": property,
            "error": model[errorProperty],
            "value": model[property],
            "onChange": (value) => props.onChange(property, value),
        };

        return (
            <Component {...newProps}/>
        )
    }

    ModelWrap.propTypes = {
        "property": PropTypes.string.isRequired,
        "model": PropTypes.object.isRequired,
        "onChange": PropTypes.func.isRequired,
    };

    return ModelWrap;
}

/**
 * Update error property so it could be handled by Material UI components.
 */
export function wrapMaterialUiError(Component) {

    function MaterialUiError(props) {
        const ok =
            props["error"] === undefined ||
            props["error"] === "";

        const newProps = {
            ...props,
            "error": !ok,
            "helperText": props["error"],
        };

        return (
            <Component {...newProps}/>
        )
    }

    MaterialUiError.propTypes = {
        "error": PropTypes.any
    };

    return MaterialUiError;
}
