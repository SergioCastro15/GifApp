import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe(('<GifItem />'), () => {
  const title = 'title test';
  const url = 'https://one-punch.com/';

  test('debe hacer match con el snpashot', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el URL y ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  });

  test('debe mostrar el titulo del component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})