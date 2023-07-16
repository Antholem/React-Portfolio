import React from 'react';

const Card = (props) => {
    return (
        <div className='w-full px-12 h-80 bg-card py-10 rounded-lg shadow-shadowOne flex items-center group hover:-translate-y-2 transition-all duration-500'>
            <div className='flex justify-center'>
                <div className='flex h-full flex-col gap-10 '>
                    <div className='w-10 h-8 flex flex-col justify-between'>
                        <span className='text-5xl text-designColor'>
                            {props.icon}
                        </span>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-xl md:text-2xl font-titleFont font-bold text-gray-300'>
                            {props.title}
                        </h2>
                        <p className='base'>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;