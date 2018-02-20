import * as React from "react";
import * as ReactDOM from "react-dom";

import { Generator } from "./components/generator";

ReactDOM.render(
    <Generator compiler="TypeScript" framework="React" />,
    document.getElementById("container")
);
