import React from "react";
import Inputs from "./Inputs";
import "../App.css";
import local_phone_black from "../assets/local_phone_black.svg";
import lock_black from "../assets/lock_black.svg";

function InputsContainer() {
  return (
    <>
      <div className="input">
        <h1>Inputs</h1>

        <div className="input-all">
          <p>&lt;Input /&gt;</p>
          <div className="input-label">
            <h4>Label</h4>
            <Inputs theme="input-1"> Placeholder</Inputs>
          </div>
        </div>

        <div className="input-all">
          <p>&lt;Input error /&gt;</p>
          <div className="input-label-error">
            <h4>Label</h4>
            <Inputs theme="input-error"> Placeholder</Inputs>
          </div>
        </div>

        <div className="input-all">
          <p>&lt;Input disabled /&gt;</p>
          <div className="input-label">
            <h4>Label</h4>
            <Inputs theme="input-disabled"> Placeholder</Inputs>
          </div>
        </div>

        <div className="input-div">
          <div className="input-text">
            <p>&lt;Input help="Some interesting text" /&gt;</p>
            <div className="input-label">
              <h4>Label</h4>
              <Inputs theme="input-helper"> Placeholder</Inputs>
              <h5>Some interesting text</h5>
            </div>
          </div>

          <div className="input-all-error">
            <p>&lt;Input help="Some interesting text" error /&gt;</p>
            <div className="input-label-helperError">
              <h4>Label</h4>
              <Inputs theme="input-helperError"> Placeholder</Inputs>
              <h5>Some interesting text</h5>
            </div>
          </div>
        </div>

        <div className="input-div">
          <div className="start-icon">
            <p>&lt;Input startIcon /&gt;</p>
            <div className="input-label">
              <h4>Label</h4>
              <div className="startIcon">
                <img src={local_phone_black} alt="phone" id="phone" />
                <Inputs theme="input-startIcon">Placeholder</Inputs>
              </div>
            </div>
          </div>

          <div className="input-all-right">
            <p>&lt;Input endIcon /&gt;</p>
            <div className="input-label">
              <h4>Label</h4>
              <div className="endIcon">
                <Inputs theme="input-startIcon">Placeholder</Inputs>
                <img src={lock_black} alt="lock" id="lock" />
              </div>
            </div>
          </div>
        </div>

        <div className="input-all">
          <p>&lt;Input value="text" /&gt;</p>
          <div className="input-label">
            <h4>Label</h4>
            <div className="value-text">
              <Inputs theme="input-value"> Text</Inputs>
            </div>
          </div>
        </div>

        <div className="input-div">
          <div className="input-size">
            <p>&lt;Input size="sm" /&gt;</p>
            <div className="input-label">
              <h4>Label</h4>
              <Inputs theme="input-size-sm"> Placeholder</Inputs>
            </div>
          </div>

          <div className="input-all-right">
            <p>&lt;Input size="lg" /&gt;</p>
            <div className="input-label">
              <h4>Label</h4>
              <Inputs theme="input-size-md"> Placeholder</Inputs>
            </div>
          </div>
        </div>

        <div className="input-all">
          <p>&lt;Input fullWidth /&gt;</p>
          <div className="input-label">
            <h4>Label</h4>
            <div className="full-width">
              <Inputs theme="input-value"> Text</Inputs>
            </div>
          </div>
        </div>

        <div className="input-all">
          <p>&lt;Input multiline row="4" /&gt;</p>
          <div className="input-label">
            <h4>Label</h4>
            <div className="multi-line">
              <Inputs theme="input-multiline"> Placeholder</Inputs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputsContainer;
