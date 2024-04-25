
import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'

import ProductPageLayout from '@/app/components/Pages/ProductPageLayout'

import {createContext} from 'react';

export default function Home() {
  return (
    <>
      <main >
        <Navbar />


        <ProductPageLayout />
    
        <Footer />
      </main>
    </>
  )
}