export interface TProductInterface extends Omit<TProductInterfaceStatic, 'category' | 'images'>{
  category: string;
  images: string;
}

export interface TProductInterfaceStatic{
  id: number;
  title: string;
  price: number;
  description: string;
  shortDesc: string;
  category: TCategory;
  images: string[];
}

type TCategory = {id: string; name: string; image: string}

function mapDataToRequiredTypes (data: TProductInterfaceStatic[]) {
  return data.map((datum) => ({
    ...datum,
    category: datum.category.name,
    images: datum.images[0]
  })
  )
}

function mapDataForCategory (data:TCategory[]) {
   return data.map(datum => datum.name)
}
export function getData () {
   return fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').then(response => response.json()).then(mapDataToRequiredTypes)
}

export function getCategories () {
  return fetch('https://api.escuelajs.co/api/v1/categories').then(res => res.json()).then(mapDataForCategory)
}