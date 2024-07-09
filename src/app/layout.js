import { Inter } from 'next/font/google'
import './globals.css'
import Wrapper from './wrapper'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import { UserProvider } from './context/userContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { SearchProvider } from './context/userContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='bg-white'>
      <body className={inter.className}>
        <SearchProvider>
          <ToastContainer />
          <div className='mx-[204px]'>
            <Wrapper>
              <Navbar />
              {children}
            </Wrapper>
          </div>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  )
}
