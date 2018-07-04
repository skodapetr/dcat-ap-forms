import React from "react";
import {hot} from "react-hot-loader";
import Dataset from "./dataset/dataset";
import Distribution from "./distribution/distribution"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import {createDataset, updateDataset} from "./dataset-model"
import {createDistribution, updateDistribution} from "./distribution-model"

class _DatasetEdit extends React.Component {

    constructor(props) {
        super(props);

        this.onStepperChange = this.onStepperChange.bind(this);

        this.onDatasetChange = this.onDatasetChange.bind(this);
        this.onDatasetTabChange = this.onDatasetTabChange.bind(this);

        this.onDistributionChange = this.onDistributionChange.bind(this);
        this.onDistributionTabChange = this.onDistributionTabChange.bind(this);
        this.onDistributionSelect = this.onDistributionSelect.bind(this);
        this.onDistributionDelete = this.onDistributionDelete.bind(this);
        this.onDistributionAdd = this.onDistributionAdd.bind(this);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            "dataset": this.emptyDataset(),
            "distributions": [
                this.emptyDistribution()
            ],
            "ui": {
                "stepper": 0,
                "dataset-tab": 0,
                "distribution-tab": 0,
                "distribution-index": 0,
                "distribution-invalid": 0
            }
        }
    }

    emptyDataset() {
        return createDataset();
    }

    emptyDistribution() {
        return createDistribution()
    }

    onStepperChange(value) {
        this.setState({
            "ui": {
                ...this.state.ui,
                "stepper": value
            }
        });
    }

    onDatasetChange(property, value) {
        this.setState({
            "dataset": updateDataset(this.state.dataset, property, value)
        });
    }

    onDatasetTabChange(event, value) {
        this.setState({
            "ui": {
                ...this.state.ui,
                "dataset-tab": value
            }
        });
    }

    onDistributionChange(property, value) {
        const index = this.state.ui["distribution-index"];
        const dist = this.state.distributions[index];
        const updatedDist = updateDistribution(dist, property, value);

        const distributions = [
            ...this.state.distributions.slice(0, index),
            updatedDist,
            ...this.state.distributions.slice(index + 1)
        ];

        let distributionInvalid = this.state.ui["distribution-invalid"];
        if (dist["error"] > 0 && updatedDist["error"] === 0) {
            distributionInvalid -= 1;
        } else if (dist["error"] === 0 && updatedDist["error"] > 0) {
            distributionInvalid += 1;
        }

        this.setState({
            "distributions": distributions,
            "ui" : {
                ...this.state.ui,
                "distribution-invalid": distributionInvalid
            }
        });
    }

    onDistributionTabChange(event, value) {
        this.setState({
            "ui": {
                ...this.state.ui,
                "distribution-tab": value
            }
        });
    }

    onDistributionSelect(index) {
        this.setState({
            "ui": {
                ...this.state.ui,
                "distribution-index": index
            }
        });
    }

    onDistributionDelete() {
        const index = this.state.ui["distribution-index"];
        const distributions = [
            ...this.state.distributions.slice(0, index),
            ...this.state.distributions.slice(index + 1)
        ];
        let newIndex = index;
        if (newIndex >= distributions.length - 1) {
            newIndex = distributions.length - 1;
        }
        this.setState({
            "ui": {
                ...this.state.ui,
                "distribution-tab": 0,
                "distribution-index": newIndex
            },
            "distributions": distributions
        });
    }

    onDistributionAdd() {
        this.setState({
            "distributions": [
                ...this.state.distributions,
                this.emptyDistribution()
            ],
            "ui": {
                ...this.state.ui,
                "distribution-tab": 0,
                "distribution-index": this.state.distributions.length
            }
        });
    }

    render() {
        let editComponent = null;
        if (this.state.ui.stepper === 0) {
            editComponent = (
                <Dataset
                    value={this.state.dataset}
                    onChange={this.onDatasetChange}
                    tab={this.state.ui["dataset-tab"]}
                    onTabChange={this.onDatasetTabChange}/>
            );
        } else if (this.state.ui.stepper === 1) {
            const distributionIndex = this.state.ui["distribution-index"];
            editComponent = (
                <Distribution
                    index={distributionIndex}
                    onChange={this.onDistributionChange}
                    tab={this.state.ui["distribution-tab"]}
                    onTabChange={this.onDistributionTabChange}
                    onDistributionAdd={this.onDistributionAdd}
                    onDistributionDelete={this.onDistributionDelete}
                    onDistributionSelect={this.onDistributionSelect}
                    distributions={this.state.distributions}/>
            );
        }

        const distributionError = this.state.ui["distribution-invalid"] > 0;

        return (
            <React.Fragment>
                <Stepper nonLinear alternativeLabel activeStep={this.state.ui.stepper}>
                    <Step>
                        <StepButton onClick={() => this.onStepperChange(0)}>
                            <StepLabel error={this.state.dataset.error > 0}>
                                {"Dataset"}
                            </StepLabel>
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.onStepperChange(1)}>
                            <StepLabel error={distributionError}>
                                {"Distributions"}
                            </StepLabel>
                        </StepButton>
                    </Step>
                    <Step>
                        <StepButton onClick={() => this.onStepperChange(2)}>
                            {"Download"}
                        </StepButton>
                    </Step>
                </Stepper>
                <div style={{"margin":"1rem"}}>
                {editComponent}
                </div>
            </React.Fragment>
        )
    }


}

const DcatApEdit = hot(module)(_DatasetEdit);
export default DcatApEdit;