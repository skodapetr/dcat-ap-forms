export function emptyValidator(value) {
    if (value !== "") {
        return "validator_empty";
    }
}

export function notEmptyValidator(value) {
    if (value === "") {
        return "validator_empty";
    }
}

export function or(left, right) {
    return (value) => {
        if (left(value) === undefined) {
            return undefined;
        }
        return right(value);
    }
}

export function and(left, right) {
    return (value) => {
        const leftResult = left(value);
        if (leftResult !== undefined) {
            return leftResult;
        }
        return right(value);
    }
}

export function stringNotEmptyValidator(values) {
    if (values.length === 0) {
        return "validator_empty";
    }
    for (let index in values) {
        if (values[index]["value"] !== "") {
            return undefined;
        }
    }
    return "validator_empty";
}