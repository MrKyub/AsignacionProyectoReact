import React from 'react'
import { LiaWindowClose } from "react-icons/lia";
import { GoCheckbox } from "react-icons/go";

const GameItem = (props) => {
  return (
    <li className = {`GameItem ${props.completed && "GameItem-active"}`}>

        <span className = {`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >
          <GoCheckbox />
          </span>

        <p className = {`Item-p ${props.completed && "Item-p--complete"}`}>{props.text}</p>

        <span 
        className = 'Icon Icon-delete'
        onClick={props.onDelete}
        >
          <LiaWindowClose />
          </span>

    </li>
  )
}

export default GameItem