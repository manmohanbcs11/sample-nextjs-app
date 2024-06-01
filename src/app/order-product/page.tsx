'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log('Placing the order...');
    router.push('/products');
    // router.replace('/products');
    // router.back();
    // router.forward();
  };

  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
