import {
    notEmptyValidator
} from "app-service/validators";

const validators = {
    "access-url": notEmptyValidator
};

export function createDistribution() {
    return {
        "error": 0,
        //
        "access-url": "",
        "description": [],
        "format": "",
        "license": "",
        "byte-size": "",
        "checksum": [],
        "documentation": [],
        "download-url": [],
        "language": "",
        "linked-schemas": [],
        "media-type": [],
        "release-date": "",
        "rights": "",
        "status": "",
        "title": [],
        "update": ""
    };
}

export function updateDistribution(dataset, property, value) {
    if (validators[property] === undefined) {
        return {
            ...dataset,
            [property]: value
        };
    }
    const errorProperty = "error-" + property;

    const prevError = dataset[errorProperty];
    const error = validators[property](value);
    let errorChange = 0;
    if (prevError !== undefined && error === undefined) {
        // Old error was fixed.
        errorChange = -1;
    } else if (prevError === undefined && error !== undefined) {
        // A new error.
        errorChange = 1;
    }

    return {
        ...dataset,
        "error": dataset["error"] + errorChange,
        [property]: value,
        [errorProperty]: error
    };
}
