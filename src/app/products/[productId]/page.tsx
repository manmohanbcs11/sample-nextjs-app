import { Metadata } from "next"
import Link from "next/link";

type ProductProps = {
  productId: string
}

export const generateMetadata = async ({ params }: { params: ProductProps }): Promise<Metadata> => {
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params.productId) {
        resolve('This is product ' + params.productId);
      } else {
        reject('Product not found');
      }
    }, 1000)
  });

  return {
    title: `Product ${title}`,
    description: `Description of product ${params.productId}`,
  }
}

export default function Product1({ params }: { params: ProductProps }) {
  return (
    <div>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/products'>Back</Link>
      <h2>This is product {params.productId}</h2>
      <h2>Check out the reviews below:</h2>
      <Link href={`/products/${params.productId}/reviews/1`}>Review 1</Link>
      <br />
      <Link href={`/products/${params.productId}/reviews/2`}>Review 2</Link>
      <br />
      <Link href={`/products/${params.productId}/reviews/3`}>Review 3</Link>
    </div>
  )
}
