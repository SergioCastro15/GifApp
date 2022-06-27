
export const getGifs = async (category) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=htesn31LTcOBWnu69T6v9ZCFlULxrgmj&q=${category}&limit=20`)
  const { data } = await response.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
};