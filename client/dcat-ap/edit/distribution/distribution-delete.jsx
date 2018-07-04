import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export default function DistributionDelete({onDelete}) {
    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={onDelete}>
                Delete distribution
            </Button>
        </React.Fragment>
    );
}

DistributionDelete.propTypes = {
    "onDelete": PropTypes.func.isRequired
};
