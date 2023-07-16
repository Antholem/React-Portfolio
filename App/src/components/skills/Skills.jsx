import React from 'react';
import Title from '../layouts/Title';
import Lists from './Lists';
import ScrollTop from '../../animations/OnScrollTop';

const Skills = () => {

    return (
        <section id='skills' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title='Comprehensive Technical Skill Set' body='Skills' />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6'>
                {Lists.map((item, index) => (
                    <ScrollTop key={index}>
                        <div className='w-full px-10 h-40 rounded-lg bg-card shadow-shadowOne flex items-center group hover:-translate-y-2 transition-all duration-500'>
                            <div className='flex justify-center w-full'>
                                <div className='flex h-full flex-col gap-4'>
                                    <div className='flex flex-row justify-center'>
                                        <span className={`text-6xl ${item.color}`}>
                                            {item.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className='text-sm text-white tracking-wide font-titleFont text-center'>
                                            {item.name}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollTop>
                ))}
            </div>
        </section>
    );
};

export default Skills;
