import React from 'react'

const GameSearch = (props) => {

  return (
    <input className = 'GameSearch'
     placeholder = 'Sekiro Shadows die twice'
     value ={props.searchValue}
     onChange = { (event) => {
        props.setSearchValue(event.target.value)
     } }
     />
  )
}

export default GameSearch