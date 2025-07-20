import React from 'react'

import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/components/gallery'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import Info from '@/components/info'
import NoValidApi from '@/components/ui/no-valid-api'

interface productPageProps {
    params: Promise<{
        productId: string
    }>
}

const ProductPage: React.FC<productPageProps> = async ({ params }) => {
    const {productId} = await params

    const product = await getProduct(productId)

    if (!product) return <NoValidApi />

    const suggestedProducts = await getProducts({ categoryId: product?.category?.id })

    // if (suggestedProducts.length === 0) return <NoValidApi />

    return (
        <div className='bg-white '>
            <Container>
                <div className='px-4 py-10 sm:px-6 lg:px-8'>
                    <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                        {/* {!product && <NoValidApi /> } */}
                        <Gallery images={product.images} />
                        <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                            <Info data={product} />
                        </div>
                    </div>
                    <div>
                        <hr className='my-10' />
                        <ProductList title='Related Items' items={suggestedProducts} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage
