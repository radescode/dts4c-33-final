import React, { Component } from "react";
import loadingGIF from "./loading.gif";
export class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loadingGIF} alt="loading" />
      </div>
    );
  }
}

export default Loading;