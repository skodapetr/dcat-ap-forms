import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton"

export default class MultiTextField extends React.PureComponent {

    constructor(props) {
        super(props);
        this.addLine = this.addLine.bind(this);
        this.deleteLine = this.deleteLine.bind(this);
        this.onChange = this.onChange.bind(this);
        this.reportChange = this.reportChange.bind(this);
    }

    addLine(index) {
        let newValue;
        if (index === undefined) {
            newValue = [
                ...this.props.value,
                ""
            ];
        } else {
            newValue = [
                ...this.props.value.slice(0, index + 1),
                "",
                ...this.props.value.slice(index + 1)
            ];
        }
        this.reportChange(newValue);
    }

    deleteLine(index) {
        const newValue = [
            ...this.props.value.slice(0, index),
            ...this.props.value.slice(index + 1)
        ];
        this.reportChange(newValue);
    }

    onChange(index, event) {
        const newValue = [
            ...this.props.value.slice(0, index),
            event.target.value,
            ...this.props.value.slice(index + 1)
        ];
        this.reportChange(newValue);
    }

    reportChange(value) {
        this.props.onChange(value);
    }

    render() {
        const valueElements = this.props.value.map((value, index) => (
            <TextFieldLine
                key={index}
                value={value}
                placeholder={this.props.placeholder}
                onAdd={() => this.addLine(index)}
                onDelete={() => this.deleteLine(index)}
                onChange={(event) => this.onChange(index, event)}/>
        ));

        const style = {
            "marginTop": "2rem",
            ...this.props.style
        };

        return (
            <div style={style}>
                {this.props.label}
                <br/>
                {valueElements}
                <IconButton onClick={() => this.addLine()}>
                    <Icon>add_circle_outline</Icon>
                </IconButton>
            </div>
        )
    }


}

MultiTextField.propTypes = {
    "label": PropTypes.string.isRequired,
    "onChange": PropTypes.func.isRequired,
    "value": PropTypes.array.isRequired,
    "placeholder": PropTypes.string,
    "style": PropTypes.object
};

function TextFieldLine(props) {
    return (
        <Grid container>
            <Grid item xs={1}>
                <IconButton onClick={props.onAdd}>
                    <Icon>add_circle_outline</Icon>
                </IconButton>
                <IconButton onClick={props.onDelete}>
                    <Icon>clear</Icon>
                </IconButton>
            </Grid>
            <Grid item xs={11}>
                <TextField placeholder={props.placeholder}
                           value={props.value}
                           onChange={props.onChange}
                           fullWidth/>
            </Grid>
        </Grid>
    )
}
