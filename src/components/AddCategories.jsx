import { useState } from "react"
import { func } from "prop-types"

export const AddCategories = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('dragon ball')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if( inputValue.trim().length <= 1) return;
    setInputValue('')
    onAddCategory(inputValue)
  }
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategories.propTypes = {
  onAddCategory: func.isRequired,
}