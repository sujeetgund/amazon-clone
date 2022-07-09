import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../slices/basketSlice';


function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime }) {

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime
        }
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={150} width={150} objectFit='contain' />

            {/* middle section */}
            <div className='col-span-3 mx-5'>
                <p className='font-semibold'>{title}</p>

                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 w-5 text-yellow-500' />
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>

                <Currency quantity={price} currency='GBP' />

                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500'>Free Next-Day Delievery</p>
                    </div>
                )}
            </div>

            {/* right section */}
            <div className='flex flex-col justify-self-end space-y-2 my-auto mr-5'>
                <button onClick={addItemToBasket} className="button">Add More to Basket</button>
                <button onClick={removeItemFromBasket} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct