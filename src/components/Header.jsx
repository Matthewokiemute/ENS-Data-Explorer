import React from 'react'

const Header = () => {
  return (
    <div className='container mx-auto w-full py-6 px-10'>
      <nav className="flex justify-between w-100 mb-7">
        <div className="text-[30px] text-yellow-500 font-bold">ENS Explorer</div>
        <button className="rounded-full bg-yellow-500 px-6 py-4 font-medium text-black hover:bg-gray-800 hover:text-white hover:ease-in-out duration-300">
          Explore Transactions
        </button>
      </nav>
    </div>
  )
}

export default Header