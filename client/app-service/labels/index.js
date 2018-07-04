import {register} from "app/register.js";
import reducer from "./labels-reducer";

export {selectLabel} from "./labels-api";
export {labelsSelector} from "./labels-reducer";
export {fetchLabel} from "./labels-action";

register({
    "reducer": reducer.reducer,
    "name": reducer.name,
    "url": undefined,
    "component": undefined
});