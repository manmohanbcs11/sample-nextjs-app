'use client';
import Link from "next/link";
import ReviewNotFound from "./not-found";

interface ReviewsProps {
  reviewId: string;
  productId: string;
}

function getRandomInt(num: number) {
  return Math.floor(Math.random() * num)
}

export default function ProductReview({ params }: { params: ReviewsProps }) {
  const random = getRandomInt(2);
  console.log('random number: ', random);
  if (random == 1) {
    throw new Error('Error while loading review.');
  }

  if (parseInt(params.reviewId) <= 1000) {
    return (
      <div>
        <Link href='/'>Home</Link>
        <br />
        <h2>Product {params.productId} Review {params.reviewId}</h2>
      </div>
    )
  } else {
    return (
      <ReviewNotFound />
    )
  }
}
