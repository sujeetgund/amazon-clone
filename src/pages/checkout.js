import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import CheckoutProduct from './components/CheckoutProduct'
import Header from './components/Header'

import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react'

import Head from 'next/head';


function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal)
    const { data, status } = useSession();
    return (
        <div className='bg-gray-100'>
            <Head>
                <title>Shopping Basket - Amazon Clone</title>
            </Head>
            <Header />

            <main className='max-w-screen-2xl lg:flex mx-auto'>
                {/* left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image
                        src='https://links.papareact.com/ikj'
                        width={1012}
                        height={250}
                        objectFit='contain'
                    />

                    <div className='flex flex-col space-y-10 bg-white'>
                        <h1 className='text-3xl border-b p-4'>
                            {items.length == 0 ? 'Your basket is empty' : 'Shopping Basket'}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasPrime={item.hasPrime}
                            />
                        ))}
                    </div>
                </div>


                {/* right */}
                <div className='flex flex-col shadow-md p-10 bg-white'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length}): {" "}
                                <span className='font-bold'>
                                    <Currency quantity={total} currency='GBP' />
                                </span>
                            </h2>

                            <button disabled={!data} className={`button mt-2 ${!data && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                {!data ? 'Login to checkout' : 'Proceed to Checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout