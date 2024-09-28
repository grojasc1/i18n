import React from "react";
import ReactDOM from "react-dom";
import JobsList from "./components/jobslist";
import { IntlProvider } from "react-intl";
import localEsMessages from "./locales/es";
import localEnMessages from "./locales/en";

const userLocale = navigator.language;
const messages = userLocale.startsWith("es") ? localEsMessages : localEnMessages;

ReactDOM.render(
  <IntlProvider locale={userLocale} messages={messages}>
    <JobsList locale={userLocale} />
  </IntlProvider>,
  document.getElementById("root")
);
