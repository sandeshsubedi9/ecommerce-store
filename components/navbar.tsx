import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions'
import { StoreName } from './store-name'

export const revalidate = 0

const Navbar = async () => {
    const categories = await getCategories()
    return (
        <div className='border-b'>
            <Container>
                <div className='px-4 relative sm:px-6 lg:px-8 flex h-16 items-center'>
                    <div className='flex flex-col sm:flex-row gap-1 '>
                        <Link href="/" className='ml-4 flex lg:m-0 gap-x-2'>
                            <StoreName />
                        </Link>
                        <MainNav data={categories} />
                    </div>
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}

export default Navbar
