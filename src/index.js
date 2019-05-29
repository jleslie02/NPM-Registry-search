import React from "react";
import { render } from "react-dom";
import App from "./App";

require("./stylesheets/index.css");
require("./stylesheets/lato.css");
require("./stylesheets/font-awesome.css");

const renderApp = () => <App />;

render(renderApp(), document.getElementById("root"));
