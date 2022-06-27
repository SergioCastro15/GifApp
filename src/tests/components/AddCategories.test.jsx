import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategories } from "../../components/AddCategories"

describe('Pruebas en <AddCategory />', () => {
  it('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategories onAddCategory={ () => {}} />)
    // acceder al campo del input
    const input = screen.getByRole('textbox')
    // ejecutar onChange haciendo uso de la propiedad input y seteandole el valor de saitama
    fireEvent.input(input, { target: { value: 'Saitama' }})
    // espera que el input tenga un value de saitama
    expect(input.value).toBe('Saitama')
  })

  it('Debe borrar el valor del input cuando se le de submit y reconoce cuantas veces se llama onAddCategory', () => {
    const inputValue = 'Saitama'
    const onAddCategory = jest.fn()

    render(<AddCategories onAddCategory={onAddCategory} />)
    const input = screen.getByRole('textbox')
    // se agrego un aria-label al form para que RTL encontrara la etiqueta form con la propiedad getByRole
    const form = screen.getByRole('form')
    // se llena el input con la palabra saitama
    fireEvent.input(input, { target: { value: inputValue }})
    // se ejecuta el setInputValue y reinicia el input
    fireEvent.submit(form)

    // confirmamos que el input este vacio
    expect(input.value).toBe('')

    // confirmamos que la referencia de la funcion onAddCategory haya sido llamada en el metodo
    expect(onAddCategory).toHaveBeenCalled()
    // confirmarmos que se llama N cantidad de veces la funcion
    expect(onAddCategory).toHaveBeenCalledTimes(1)
    // evalua que la funcion reciba el valor del inputValue
    expect(onAddCategory).toHaveBeenCalledWith(inputValue)
  })

  it('no debe llamar el onAddCategories si el input esta vacio', () => {
    const onAddCategory = jest.fn()
    render(<AddCategories onAddCategory={onAddCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: '' }})
    fireEvent.submit(form)

    expect(onAddCategory).toHaveBeenCalledTimes(0)
    expect(onAddCategory).not.toHaveBeenCalled()
  })
})