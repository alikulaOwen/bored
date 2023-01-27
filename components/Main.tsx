import React from 'react'

const Main = () => {
  return (
      <div className='w-screen p-6 h-[calc(100vh-64px)] bg-slate-200 '>
          <div className='grid w-full h-full grid-cols-1 gap-1'>
              <div className='bg-red-200 rounded-xl'>
                <div className="w-2/3 h-full rounded-xl bg-slate-800">
                    {/* Card-title */}

                    {/* card-subtitle */}
                </div>
                <div className="img">
                    
                </div>

                
              </div>
              <div className='grid grid-cols-3 gap-1'>
                  <div className='bg-red-400 rounded-xl'></div>
                  <div className='bg-red-400 rounded-xl'></div>
                  <div className='bg-red-400 rounded-xl'></div>
              </div>
          </div>
    </div>
  )
}

export default Main
