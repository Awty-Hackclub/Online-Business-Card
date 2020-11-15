import React, { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Title from "./Components/Title";
import CompName from "./Components/CompName";
import Description from "./Components/Description";
import Submit from "./Components/Submit";
import {useForm} from 'react-hook-form'
import {Create} from './Components/utils/AxiosUtils'

export default function App() {
  const {register, handleSubmit, errors } = useForm()

  const onSubmit = data  => {

    console.log(data);
    Create(data);
  }

  return (
    <div>
      <Title content="Create your business card" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contain">
          <div>
            <textarea
              className="compName"
              placeholder="Company Name"
              name="title"
              rows="3"
              maxLength="50"
              ref={register}
            ></textarea>
          </div>

          <div>
            <div className="label">
              <label className="plat">Youtube</label>
              <input
                className="input"
                name="youtube"
                placeholder="https://"
                maxlenght="2000"
              ref={register}
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Instagram</label>
              <input
                className="input"
                name="instagram"
                placeholder="https://"
                maxlenght="2000"
              ref={register}
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Twitter</label>
              <input
                className="input"
                name="twitter"
                placeholder="https://"
                maxlenght="2000"
                ref={register}
              ></input>
            </div>
          </div>

          <div>
            <div className="label">
              <label className="plat">Facebook</label>
              <input
                className="input"
                placeholder="https://"
                name="facebook"
                maxlenght="2000"
              ref={register}
              ></input>
            </div>
          </div>
          <div>
            <textarea
              className="description"
              placeholder="Description"
              name="description"
              maxLength="300"
              ref={register}
            ></textarea>
          </div>
          <Submit />
        </div>
      </form>
    </div>
  );
}
