import React, { Component, Fragment } from "react";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} />
        <div>내용 : {this.state.inputText}</div>
      </Fragment>
    );
  }
}

export default App;
