import { useLoaderData} from 'react-router-dom'
import { Products } from '../../interfaces/product.interface';



export function Product()  {

    const data = useLoaderData() as Products
  return (
    <>
        Product - {data.name}
    </>
  )
}
