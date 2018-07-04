import React from "react";
import {Header} from "./header";
import {hot} from "react-hot-loader";
import {getRegistered} from "./register";
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    "palette": {
        "background": {
            "default": "#FFFFFF"
        }
    }
});

function _DefaultLayout(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            {React.cloneElement(props.children, props)}
            {getStaticComponents()}
        </MuiThemeProvider>
    )
}

function getStaticComponents() {
    const output = [];
    getRegistered().forEach((entry) => {
        if (entry["component-static"] === undefined) {
            return null;
        }
        const Component = entry["component-static"];
        output.push(
            <Component key={entry["name"]}/>
        );
    });
    return output;
}

const DefaultLayout = hot(module)(_DefaultLayout);

export default DefaultLayout;