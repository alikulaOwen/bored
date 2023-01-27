import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const nav_items =[{
    'name': 'Top Stories',
    'href': '',
},{
        'name': 'Dev Articles',
        'href': '',
    },
    {
        'name': 'Tech News',
        'href': '',
    },
    {
        'name': 'Films & Music',
        'href': '',
    },
]

const NavBar = () => {
  return (
    <nav className='flex justify-between w-full h-16 bg-gray-500 '>
        <div className='p-2 m-0'>
              <p className='text-3xl font-medium text-red-600'>Bo
                  <span className='text-gray-100 font-semi-bold'>red.</span></p>
        </div>
        <div className='flex items-center w-4/6 justify-evenly' >
            <ul className='flex w-2/3 justify-evenly'>
                {
                    nav_items.map((index, key)=>{
                        return <li key={key} className='font-medium text-gray-200'>
                            {index.name}
                        </li>
                        
                    })
                }
            </ul>

            {/* profile img */}
            <div className='w-12 h-12 bg-red-200 rounded-full '>
                <Image src={''} alt={''}/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar