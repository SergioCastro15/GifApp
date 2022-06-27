import { string } from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)
  
  return (
    <>
      <h3 data-testid="category">{category}</h3>
      { isLoading && <h2>Cargando ....</h2>}
      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: string.isRequired,
}
