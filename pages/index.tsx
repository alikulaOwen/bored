
import { Inter } from '@next/font/google'
import Main from '../components/Main'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  
    <div className='w-screen h-screen'>
      <NavBar/>
      <Main/>
    </div>
  )
}
