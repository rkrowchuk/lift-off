import React from "react";
import Login from "./user-management/Login";
import Register from "./user-management/Register";
import { Page, PageContent } from 'grommet';
import "../styles/Landing.scss";

export default function Landing() {
  return (
    <div>
      <Page kind="narrow">
        <PageContent>
          <h1>Landing Page</h1>
          <Login />
          <Register />
        </PageContent>
      </Page>
    </div>
  );
}
