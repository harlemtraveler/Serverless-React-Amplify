import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        App
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
