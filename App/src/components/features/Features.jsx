import React from 'react';
import Title from '../layouts/Title';
import Container from './Container';
import serviceList from './ServiceList';
import ScrollTop from '../../animations/OnScrollTop';

const Features = () => {

    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title='Services I Offer and Specialize In' body='Features' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                {serviceList.map((item, index) => (
                    <ScrollTop key={index}>
                        <Container title={item.title} desc={item.desc} icon={item.icon}/>
                    </ScrollTop>
                ))}
            </div>
        </section>
    );
};

export default Features;
