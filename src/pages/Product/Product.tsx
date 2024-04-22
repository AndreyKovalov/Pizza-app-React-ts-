import { Await, useLoaderData } from 'react-router-dom'
import { IProduct } from '../../interfaces/product.interfaces'
import { Suspense } from 'react'
import MyLoader from '../../components/MyLoader/MyLoader'

export function Product() {
  const data = useLoaderData() as { data: IProduct }

  return (
    <Suspense fallback={<MyLoader amountOfElem={1} />}>
      <Await resolve={data.data}>
        {({ data }: { data: IProduct }) => <>Product-{data.name}</>}
      </Await>
    </Suspense>
  )
  //   const data = useLoaderData() as Product
  //   return <div>Product-{data.id}</div>
}
