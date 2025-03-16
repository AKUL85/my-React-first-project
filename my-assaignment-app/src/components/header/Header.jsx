import React from 'react';
import photo from '../../assets/logo.png'
import photo1 from '../../assets/bg-shadow.png'
import photo2 from '../../assets/banner-main.png'
const Header = ({ addMoney, number }) => {
    return (
        <header>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between mt-2'>
                    <img src={photo} alt="" />
                    <div className='flex justify-evenly gap-5 items-start p-4'>
                        <h1 className='text-xl font-bold text-gray-700'>Home</h1>
                        <h1 className='text-xl font-bold text-gray-700'>Fixure</h1>
                        <h1 className='text-xl font-bold text-gray-700'>Teams</h1>
                        <h1 className='text-xl font-bold text-gray-700'>Schedual</h1>
                        <button className='border border-gray-200 py-1 px-3 bg-purple-200 rounded-xl'>
                            <div className='flex gap-1'>
                                <p className='text-xl font-bold text-gray-700'>{number}</p>
                                <h1 className='text-xl font-bold text-gray-700'>coins</h1>
                                <img className='h-5 w-5 my-auto' src="https://img.icons8.com/?size=100&id=pHEbDnllVT05&format=png&color=000000" alt="" />
                            </div>
                        </button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${photo1})` }} className='w-full h-full space-y-3 my-8 rounded-3xl overflow-hidden' >
                    <img className='mx-auto mt-4' src={photo2} alt="" />
                    <h1 className='text-center text-3xl font-bold text-gray-600'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h1 className='text-xl font-black text-center text-gray-600'>Beyond Boundaries Beyond Limits</h1>
                    <div className='flex justify-center'>
                        <button onClick={() => addMoney(20000000)} className='bg-yellow-300 font-semibold py-2 px-3 rounded-xl mb-4 ring-2'>Claim Free Credit</button>
                    </div>

                </div>
            </div>
          
        </header>
    );
};

export default Header;