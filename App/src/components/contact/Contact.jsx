import React from 'react'
import Title from '../layouts/Title';
import ContactInformation from './ContactInformation';
import SubmitForm from './SubmitForm';
import ScrollTop from '../../animations/OnScrollTop';

const Contact = () => {
    return (
        <section id='contacts' className='w-full py-20'>
            <div className='flex justify-center items-center text-center'>
                <Title title='I look forward to hearing from you!' body='Contact Me' />
            </div>
            <ScrollTop>
            <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-0'>
                    <ContactInformation />
                    <SubmitForm />
                </div>
            </div>
            </ScrollTop>
        </section>
    )
}

export default Contact;