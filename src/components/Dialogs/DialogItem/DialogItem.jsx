import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogItem/' + props.id;
  return (
    <div className={s.dialog}>
      <img src="./ava.png" alt=""/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;