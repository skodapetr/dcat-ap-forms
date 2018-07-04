import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"

export default class MultiLanguageTextField extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {"items": []};
        this.addLine = this.addLine.bind(this);
        this.deleteLine = this.deleteLine.bind(this);
        this.onLangChange = this.onLangChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.reportChange = this.reportChange.bind(this);
    }

    addLine(index) {
        let newValue;
        if (index === undefined) {
            newValue = [
                ...this.props.value,
                {"lang": "", "value": ""}
            ];
        } else {
            newValue = [
                ...this.props.value.slice(0, index + 1),
                {"lang": "", "value": ""},
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

    onLangChange(index, event) {
        const changedItem = {
            "lang": event.target.value,
            "value": this.props.value[index]["value"]
        };
        let newValue = [
            ...this.props.value.slice(0, index),
            changedItem,
            ...this.props.value.slice(index + 1)
        ];
        this.reportChange(newValue);
    }

    onValueChange(index, event) {
        const changedItem = {
            "lang": this.props.value[index]["lang"],
            "value": event.target.value
        };
        let newValue = [
            ...this.props.value.slice(0, index),
            changedItem,
            ...this.props.value.slice(index + 1)
        ];
        this.reportChange(newValue);
    }

    reportChange(value) {
        this.props.onChange(value);
    }


    render() {
        let error = null;
        if (this.props.error !== undefined) {
            error = (
                <Typography color="error" variant="caption">
                    {this.props.error}
                </Typography>
            );
        }

        const valueElements = this.props.value.map((value, index) => (
            <LanguageTextFieldLine
                key={index}
                value={value}
                placeholder={this.props.placeholder}
                onAdd={() => this.addLine(index)}
                onDelete={() => this.deleteLine(index)}
                onLangChange={(event) => this.onLangChange(index, event)}
                onValueChange={(event) => this.onValueChange(index, event)}
                multiline={this.props.multiline}
                error={error !== null}
                label={this.props.itemLabel}
            />
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
                {error}
            </div>
        )
    }


}

MultiLanguageTextField.propTypes = {
    "label": PropTypes.string.isRequired,
    "itemLabel": PropTypes.string.isRequired,
    "onChange": PropTypes.func.isRequired,
    "value": PropTypes.array.isRequired,
    "placeholder": PropTypes.string,
    "style": PropTypes.object,
    "multiline": PropTypes.bool,
    "error": PropTypes.string
};


function LanguageTextFieldLine(props) {
    return (
        <Grid container spacing={16}>
            <Grid item xs={5} sm={2} md={2} lg={1}>
                <IconButton onClick={props.onAdd}>
                    <Icon>add_circle_outline</Icon>
                </IconButton>
                <IconButton onClick={props.onDelete}>
                    <Icon>clear</Icon>
                </IconButton>
            </Grid>
            <Grid item xs={7} sm={3} md={2} lg={2}>
                <TextField label={"Language"}
                           placeholder={"Language"}
                           value={props.value["lang"]}
                           onChange={props.onLangChange}
                           fullWidth/>
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9}>
                <TextField placeholder={props.placeholder}
                           value={props.value["value"]}
                           onChange={props.onValueChange}
                           multiline={props.multiline}
                           error={props.error}
                           label={props.label}
                           required fullWidth/>
            </Grid>
        </Grid>
    )
}
