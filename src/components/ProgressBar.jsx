import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

export default class Banner extends Component {
  render() {
    return (
      <section className="w-full m-w-1/2">
        <div className=" w-full">
          <div className="relative p-5 md:py-5 xl:px-5 overflow-hidden">
            <div className="relative lg:w-1/2 md:w-full sm:w-full m-auto text-center bg-input-purple">
                          <ProgressBar
                percent={this.props.setProgress}
                filledBackground="linear-gradient(to right, #9e1f63, #662d91)"
                height={15}
                


              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
