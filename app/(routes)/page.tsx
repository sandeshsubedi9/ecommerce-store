import getBillboards from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import AllBillboards from '@/components/all-billboards'
import ProductList from '@/components/product-list'
import Container from '@/components/ui/container'
import NoValidApi from '@/components/ui/no-valid-api'
import React from 'react'

export const revalidate = 0

const HomePage = async () => {

  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboards()

  if (products.length === 0) {
    return <NoValidApi />
  }

  if (billboard.length === 0) {
    return <NoValidApi />
  }

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <AllBillboards data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 '>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
