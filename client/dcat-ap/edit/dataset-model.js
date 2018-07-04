import {
    stringNotEmptyValidator
} from "app-service/validators";

const validators = {
    "title": stringNotEmptyValidator,
    "description": stringNotEmptyValidator
};

export function createDataset() {
    return {
        "error": 0,
        //
        "iri": "",
        "title": [
            {"lang": "", "value": ""}
        ],
        "description": [
            {"lang": "", "value": ""}
        ],
        "contact-point-type": "",
        "contact-point-name": "",
        "contact-point-email": "",
        "keyword": [],
        "theme": "", // TODO Should this be an array?
        "publisher-iri": "",
        "publisher-name": [],
        "publisher-type": "",
        "err-type": "",
        "type": "",
        "language": "",
        "frequency": "",
        "release-date": "",
        "update": "",
        "spatial-coverage": [],
        "temporal-coverage-start": "",
        "temporal-coverage-end": "",
        "identifier": "",
        "other-identifier": [],
        "documentation": [],
        "access-rights": "",
        "provenance": [],
        "catalog": "",
        "sample": [],
        "landing-page": [],
        "related-resource": [],
        "conforms-to": [],
        "source": [],
        "has-version": [],
        "is-version": [],
        "version": "",
        "version-notes": []
    };
}

export function updateDataset(dataset, property, value) {
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
