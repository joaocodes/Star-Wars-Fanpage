//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
