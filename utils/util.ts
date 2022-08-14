import path from 'path'
import fs from 'fs/promises'


export interface TProductInterface {
  id: string;
  name: string;
  category: string;
  price: number;
  imgSrc: string;
  stock: number;
  shortDesc: string;
  description: string;
}


export async function getData () {
    const filePath = path.join(process.cwd(), 'products.json')
    const fileData = await fs.readFile(filePath)
    const result: {
        'data': TProductInterface[]
    } = JSON.parse(fileData.toString())
    return result.data;
}