import React, { useState, useEffect } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';

const RightContact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [messageAnimate, setMessageAnimate] = useState(false);
    const [opacity, setOpacity] = useState(false);

    useEffect(() => {
        // Add event listener to close the modal when clicking outside
        document.addEventListener('click', handleClickOutside);

        return () => {
            // Remove event listener when component unmounts
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (messageSent) {
            if (!e.target.closest('.modal-content')) {
                setName('');
                setEmail('');
                setPhoneNumber('');
                setSubject('');
                setMessage('');
                setOpacity(false);
                setMessageAnimate(false);
                setTimeout(() => {
                    setMessageSent(false);
                }, 200);
            }
        }
    };

    const handleSend = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setNameError('Name is required');
        } else if (/\d/.test(name)) {
            setNameError('Please enter letters only');
        } else if (/\S/.test(name) && !/[^a-zA-Z\s]/.test(name)) {
            setNameError('');
        } else {
            setNameError('Invalid format');
        }

        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Phone Number is required');
        } else if (!/^\d+$/.test(phoneNumber.replace(/\s/g, ''))) {
            setPhoneNumberError('Please enter numbers only');
        } else {
            setPhoneNumberError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
        } else if (!/^.*@.*\..+$/i.test(email)) {
            setEmailError('Invalid email format');
        } else {
            const words = email.trim().split(/\s+/);
            if (words.length > 1) {
                setEmailError('Email should contain only one word');
            } else {
                setEmailError('');
            }
        }

        if (subject.trim() === '') {
            setSubjectError('Subject is required');
        } else {
            setSubjectError('');
        }

        if (message.trim() === '') {
            setMessageError('Message is required');
        } else if (message.length <= 10) {
            setMessageError('Message should have more than 10 characters');
        } else {
            setMessageError('');
        }

        if (
            name.trim() !== '' && nameError == '' &&
            phoneNumber.trim() !== '' && phoneNumberError == '' &&
            email.trim() !== '' && emailError == '' &&
            subject.trim() !== '' && subjectError == '' &&
            message.trim() !== '' && messageError == ''
        ) {
            console.log('SENTTT');
            setMessageSent(true);
            setMessageAnimate(true);
            setTimeout(() => {
                setOpacity(true);
            }, 100);
        }
    };

    return (
        <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-2 lgl:gap-3 py-2 lgl:py-5">
                <div className="w-full flex flex-col lgl:flex-row gap-2 lgl:gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Name
                            {
                                nameError &&
                                <span className="text-red-500">
                                    {" "}*
                                </span>
                            }
                        </p>
                        <div className="flex flex-col">
                            <div>
                                <input
                                    type="text"
                                    className={`contactInput ${nameError ? 'outline-designColor' : ''}`}
                                    required
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (e.target.value.trim() === '') {
                                            setNameError('Name is required');
                                        } else if (/\d/.test(e.target.value)) {
                                            setNameError('Please enter letters only');
                                        } else if (/\S/.test(e.target.value) && !/[^a-zA-Z\s]/.test(e.target.value)) {
                                            setNameError('');
                                        } else {
                                            setNameError('Invalid format');
                                        }
                                    }}
                                />
                            </div>
                            <div className='h-6'>
                                {
                                    nameError &&
                                    <span className="text-xs text-red-500">
                                        {nameError}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                        <p className="text-sm text-gray-400 uppercase tracking-wide">
                            Phone Number
                            {
                                phoneNumberError &&
                                <span className="text-red-500">
                                    {" "}*
                                </span>
                            }
                        </p>
                        <div className="flex flex-col">
                            <div>
                                <input
                                    type="text"
                                    className={`contactInput ${phoneNumberError ? 'outline-designColor' : ''}`}
                                    required
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value);
                                        if (e.target.value.trim() === '') {
                                            setPhoneNumberError('Phone Number is required');
                                        } else if (!/^\d+$/.test(e.target.value.replace(/\s/g, ''))) {
                                            setPhoneNumberError('Please enter numbers only');
                                        } else {
                                            setPhoneNumberError('');
                                        }
                                    }}
                                />
                            </div>
                            <div className='h-6'>
                                {
                                    phoneNumberError &&
                                    <span className="text-xs text-red-500">
                                        {phoneNumberError}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Email
                        {
                            emailError &&
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        }
                    </p>
                    <div className="flex flex-col">
                        <div>
                            <input
                                type="email"
                                className={`contactInput ${emailError ? 'outline-designColor' : ''}`}
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (e.target.value.trim() === '') {
                                        setEmailError('Email is required');
                                    } else if (!/^.*@.*\..+$/i.test(e.target.value)) {
                                        setEmailError('Invalid email format');
                                    } else {
                                        const words = e.target.value.trim().split(/\s+/);
                                        if (words.length > 1) {
                                            setEmailError('Email should contain only one word');
                                        } else {
                                            setEmailError('');
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className='h-6'>
                            {
                                emailError &&
                                <span className="text-xs text-red-500">
                                        {emailError}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Subject
                        {
                            subjectError &&
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        }
                    </p>
                    <div className="flex flex-col">
                        <div>
                            <input
                                type="text"
                                className={`contactInput ${subjectError ? 'outline-designColor' : ''}`}
                                required
                                value={subject}
                                onChange={(e) => {
                                    setSubject(e.target.value)
                                    if (e.target.value.trim() === '') {
                                        setSubjectError('Subject is required');
                                    } else {
                                        setSubjectError('');
                                    }
                                }}
                            />
                        </div>
                        <div className='h-6'>
                            {
                                subjectError &&
                                <span className="text-xs text-red-500">
                                    {subjectError}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Message
                        {
                            messageError &&
                            <span className="text-red-500">
                                {" "}*
                            </span>
                        }
                    </p>
                    <div className="flex flex-col">
                        <div>
                            <textarea
                                className={`contactTextArea ${messageError ? 'outline-designColor' : ''}`}
                                cols="30"
                                rows="8"
                                required
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                    if (message.trim() === '') {
                                        setMessageError('Message is required');
                                    } else if (e.target.value.length <= 10) {
                                        setMessageError('Message should have more than 10 characters');
                                    } else {
                                        setMessageError('');
                                    }

                                }}
                            ></textarea>
                        </div>
                        <div className='h-6'>
                            {
                                messageError &&
                                <span className="text-xs text-red-500">
                                   {messageError}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <button
                        onClick={handleSend}
                        className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent justify-center flex items-center"
                    >
                        <MdSend className="text-white mr-2" />
                        <span>Send Message</span>
                    </button>
                </div>
                {messageSent && (
                    <motion.div
                        onClick={handleClickOutside}
                        className="fixed inset-0 flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: opacity ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className={`absolute inset-0 bg-black`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: opacity ? 0.4 : 0 }}
                            transition={{ duration: 0.3 }}
                        ></motion.div>
                        <motion.div
                            className={`fixed inset-0 flex items-center justify-center z-50`}
                            initial={{ scale: 0 }}
                            animate={{ scale: messageAnimate ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-bodyColor w-full max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[30%] mx-auto px-6 py-4 rounded-lg shadow-lg">
                                <div className="py-4">
                                    <HiOutlineCheckCircle className="text-green-500 text-6xl mx-auto" />
                                    <h2 className="text-lg font-bold text-center">Message Sent!</h2>
                                    <p className="text-sm text-center">
                                        I appreciate your sincere interest in my services, {name && name.charAt(0).toUpperCase() + name.slice(1)}!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </form>
        </div>
    );
};

export default RightContact;