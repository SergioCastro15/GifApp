import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => {
  test('debe reconocer el titulo', () => {
    render(<GifExpertApp />)
    const title = screen.getByTestId('title')
    expect(title.innerHTML).toBe('GifExpertApp')
    screen.debug()
  })

  test('debe reconocer que haya mas de un elemento en el array', () => {
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: 'some value' }})
    fireEvent.submit(form)

    const categories = screen.getAllByTestId('category')
    expect(categories.length).toBeGreaterThan(1)
  })
})