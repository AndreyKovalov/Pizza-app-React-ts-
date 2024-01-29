import { useLoaderData } from 'react-router-dom'
import { Product } from '../../interfaces/product.interfaces'

export function Product() {
  const data = useLoaderData() as Product
  return <div>Product-{data.id}</div>
}
