import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';

function Product({ id, title, price, description, category, image, rating }) {
    const [productRating] = useState(Math.floor(rating.rate));
    const [hasPrime] = useState(Math.floor(rating.rate) > 3);
    // console.log(hasPrime);

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image
                src={image}
                height={200}
                width={200}
                alt={title}
                objectFit='contain'
            />

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {Array(productRating).fill().map((_, i) => (
                    <StarIcon className='h-5 w-5 text-yellow-500' />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency
                    quantity={price}
                    currency='GBP'
                />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500'>Free Next-Day Delievery</p>
                </div>
            )}

            <button className='mt-auto button'>Add to Basket</button>

        </div>
    )
}

export default Product