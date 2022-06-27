import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One punch'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('debe retornar un arreglo de imagenes y el isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs('One punch'))
    await waitFor(
      // espera a que el arreglo de imagenes sea diferente de vacio
      () => expect(result.current.images.length).toBeGreaterThan(0)
      // se puede enviar un objeto como segundo parametro donde podemos hacer un setTimeOut que nos espera un tiempo determinado
    )
    // luego de que el arreglo de imagenes contenga datos, continua el proceso por eso se usa async/await

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})