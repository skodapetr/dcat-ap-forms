import React from "react";
import {PropTypes} from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import DatasetMandatory from "./dataset-mandatory"
import DatasetRecommended from "./dataset-recommended";
import DatasetOptional from "./dataset-optional"

export default function Dataset(props) {
    return (
        <React.Fragment>
            <Tabs value={props.tab} onChange={props.onTabChange}>
                <Tab label={"Mandatory"}/>
                <Tab label={"Recommended"}/>
                <Tab label={"Optional"}/>
            </Tabs>
            <div>
                {props.tab === 0 &&
                <DatasetMandatory
                    value={props.value}
                    onChange={props.onChange}/>}
                {props.tab === 1 &&
                <DatasetRecommended
                    value={props.value}
                    onChange={props.onChange}/>}
                {props.tab === 2 &&
                <DatasetOptional
                    value={props.value}
                    onChange={props.onChange}/>}
            </div>
        </React.Fragment>
    )
}


Dataset.propTypes = {
    "value": PropTypes.object.isRequired,
    "onChange": PropTypes.func.isRequired,
    "tab": PropTypes.number.isRequired,
    "onTabChange": PropTypes.func.isRequired
};
