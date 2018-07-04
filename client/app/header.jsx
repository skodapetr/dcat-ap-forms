import React from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-redux"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppBar position="static" elevation={0} color="default">
                <Toolbar>
                    <Typography variant="title">
                        Registrace datové sady do NKOD
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

}

Header.propTypes = {};
