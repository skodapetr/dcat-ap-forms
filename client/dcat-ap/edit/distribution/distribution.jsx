import React from "react";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import DistributionMandatory from "./distribution-mandatory"
import DistributionRecommended from "./distribution-recommended";
import DistributionOptional from "./distribution-optional"
import DistributionDelete from "./distribution-delete";
import Selector from "./selector";

export default function Distribution(props) {
    if (props.index === -1) {
        return (
            <React.Fragment>
                <Selector
                    index={props.index}
                    items={props.distributions}
                    onChange={props.onDistributionSelect}
                    onAdd={props.onDistributionAdd}
                />
                <div>There is no distribution.</div>
            </React.Fragment>
        )
    }
    const distributionEdit = selectDistributionTab(props);
    return (
        <React.Fragment>
            <Selector
                index={props.index}
                items={props.distributions}
                onChange={props.onDistributionSelect}
                onAdd={props.onDistributionAdd}
            />
            <Tabs value={props.tab} onChange={props.onTabChange}>
                <Tab label="Mandatory"/>
                <Tab label="Recommended"/>
                <Tab label="Optional"/>
                <Tab label="Delete" style={{"color": "red"}}/>
            </Tabs>
            <div>
                {distributionEdit}
            </div>
        </React.Fragment>
    )

}


Distribution.propTypes = {
    "index": PropTypes.number.isRequired,
    "onChange": PropTypes.func.isRequired,
    "tab": PropTypes.number.isRequired,
    "onTabChange": PropTypes.func.isRequired,
    "onDistributionAdd": PropTypes.func.isRequired,
    "onDistributionDelete": PropTypes.func.isRequired,
    "onDistributionSelect": PropTypes.func.isRequired,
    "distributions": PropTypes.array.isRequired
};

function selectDistributionTab(props) {
    const distribution = props.distributions[props.index];
    switch (props.tab) {
        case 0:
            return (
                <DistributionMandatory
                    value={distribution}
                    onChange={props.onChange}/>
            );
        case 1:
            return (
                <DistributionRecommended
                    value={distribution}
                    onChange={props.onChange}/>
            );
        case 2:
            return (
                <DistributionOptional
                    value={distribution}
                    onChange={props.onChange}/>
            );
        case 3:
            return (
                <DistributionDelete
                    onDelete={props.onDistributionDelete}/>
            );
        default:
            console.error("Invalid tab index:", props.tab);
            return null;
    }
}
