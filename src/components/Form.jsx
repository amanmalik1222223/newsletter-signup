import React, { useState } from 'react';
import illustrationSignUpDesktop from '../assets/illustration-sign-up-desktop.svg';
import icon from '../assets/icon-success.svg';
import illustrationSignUpMobile from '../assets/illustration-sign-up-mobile.svg'

import { useNavigate  } from 'react-router-dom';

function Form() {
    const [email, setEmail]=useState('');
    const history = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setIsValid(true);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const onSubmit=()=>{
        if(email===''){
            document.getElementById('entermessage').classList.remove('hidden');
            document.getElementById('errormessage').classList.add('hidden')
            setIsValid(false);
            
            return;
        }
        else if(!document.getElementById('entermessage').classList.contains('hidden')){
            document.getElementById('entermessage').classList.add('hidden')
            
        }
        if(!isValidEmail(email)){
            document.getElementById('errormessage').classList.remove('hidden');
            setIsValid(false);
            return;
        }
        else if(!document.getElementById('errormessage').classList.contains('hidden')){
            document.getElementById('errormessage').classList.add('hidden')
           
        }

        setEmail('')
        history('/confirmation',{ state: { email } })
        
    }
    return (
        <div className='flex justify-center items-center align-middle w-full h-screen '>
            <div className='bg-white h-auto md:w-4/6 w-full border-none md:rounded-3xl shadow-lg flex md:flex-row flex-col justify-between'>
                <div className='w-full h-auto mb-[30px] md:px-4 py-4 flex justify-center  md:hidden'>
                    <img className='w-full' src={illustrationSignUpMobile} alt="Illustration" />
                </div>


                <div className=' flex flex-col md:w-3/5 md:py-[60px] md:px-10 h-auto items-center text-center'>
                    <div className='mb-[30px]'>
                        <h1 className='text-charcoal-grey w-full text-5xl md:text-6xl font-bold font-roboto'>Stay updated!</h1>
                    </div>
                    <div className='md:text-lg text-md mb-[25px] md:w-5/6 px-5 md:pl-6  md:mb-[35px]'>
                        <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    </div>

                    <div className='md:text-md text-sm w-full md:w-5/6 px-6 md:pl-6 text-left flex flex-col gap-3 mb-[25px] md:mb-[30px]'>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={icon} className='w-6 h-6' alt="Icon" />
                            <span>Product discovery and building what matters</span>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={icon} className='w-6 h-6' alt="Icon" />
                            <span>Measuring to ensure updates are a success</span>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <img src={icon} className='w-6 h-6' alt="Icon" />
                            <span>And much more!</span>
                        </div>
                    </div>

                    <div className='text-sm md:text-md w-full  md:w-5/6 px-6 text-left flex flex-col md:gap-3 gap-1 mb-[20px] md:mb-[30px]'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Email Address</p>
                            <p id='errormessage' className='md:text-sm text-xs font-bold text-red-700 hidden'>Valid email required</p>
                            <p id='entermessage' className='md:text-sm text-xs font-bold text-red-700 hidden'>Email required</p>
                        </div>
                        <div className='w-full'>
                            <input
                                type="email"
                                id='input'
                                value={email}
                                onChange={handleEmail}
                                className="text-gray-400  w-full items-center justify-left flex border-gray-400 focus:border-gray-400 border-2 px-4 py-2 rounded-xl outline-none transition-all duration-300 ease-in-out transform-gpu focus:shadow-lg  focus:w-[430px] focus:h-[50px] md:focus:w-[450px] md:focus:h-[60px] md:focus:-translate-x-6 hover:shadow-lg hover:scale-105 md:hover:-translate-x-6 hover:w-[430px] hover:h-[50px] md:hover:w-[450px] md:hover:h-[60px]"
                                placeholder="email@company.com"
                            />
                        </div>
                    </div>

                    <div className='md:w-5/6 w-full px-6 text-lg mb-[50px] md:mb-[30px]'>
                        <button 
                        onClick={onSubmit}
                        className='hover:bg-tomato  hover:shadow-hover-tomato flex items-center justify-center text-center px-10 py-3 w-full h-[45px] rounded-xl text-white bg-charcoal-grey'>

                            Subscribe to monthly newsletter

                            </button>
                    </div>

                </div>

                <div className='w-auto px-4 py-4 md:flex hidden'>
                    <img src={illustrationSignUpDesktop} alt="Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Form;
