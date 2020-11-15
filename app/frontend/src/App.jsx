import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Title from "./Components/Title";
import CompName from "./Components/CompName";
import Description from "./Components/Description";
import Submit from "./Components/Submit";

export default function App() {
  return (
    <div>
      <Title content="Create your business card" />
      <form onSubmit={}>
        <div className="contain">
          <div>
            <textarea
              className="compName"
              placeholder="Company Name"
              rows="3"
              maxLength="50"
            ></textarea>
          </div>

          <div>
            <div className="label">
              <label className="plat">Youtube</label>
              <input
                className="input"
                placeholder="https://"
                maxlenght="2000"
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Instagram</label>
              <input
                className="input"
                placeholder="https://"
                maxlenght="2000"
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Twitter</label>
              <input
                className="input"
                placeholder="https://"
                maxlenght="2000"
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Facebook</label>
              <input
                className="input"
                placeholder="https://"
                maxlenght="2000"
              ></input>
            </div>
          </div>
          <div>
            <textarea
              className="description"
              placeholder="Description"
              maxLength="300"
            ></textarea>
          </div>
          <Submit />
        </div>
      </form>
    </div>
  );
}
