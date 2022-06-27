import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"

// crear un mock completo de ese path que se reemplazaria en el custom hook
jest.mock("../../hooks/useFetchGifs")


describe('Pruebas en <GifGrid />', () => {

  // retorna nuevos valores a la referencia del custom hook 
  useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true,
  })

  const category = 'One punch'

  test('debe mostrar el loading inicialmente', () => {
    render(<GifGrid category={category} />)
    // si cambio el isLoading por false , el test se rompe
    expect(screen.getByText('Cargando ....'))
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('debe mostrar items cuando se cargan imagenes desde el custom hook', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: 'ABCD',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render(<GifGrid category={category} />)

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})