export type Beer = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
}

export const getBeers = async (): Promise<Beer[]> => {
  console.time('get beers')
  const res = await fetch('https://api.punkapi.com/v2/beers')
  const beers = await res.json()
  console.timeEnd('get beers')
  return beers
}
