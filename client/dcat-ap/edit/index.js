import {register} from "app/register.js";
import DcatApEdit from "./dcat-ap-edit";
import reducer from "./dcat-ap-edit"

register({
    "reducer": reducer.reducer,
    "name": reducer.name,
    "url": "/",
    "component": DcatApEdit
});