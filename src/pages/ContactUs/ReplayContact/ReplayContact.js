import React from 'react';
import Trending from '../../Shered/Trending/Trending';
import Button from '../../Shered/Button/Button'
import './ReplayContact.css'

const ReplayContact = () => {
    const handleReplayContactus = (event)=>{
        event.preventDefault()
        const name =event.target.name.value
        const email =event.target.email.value
        const number =event.target.number.value
        const message =event.target.message.value
        console.log(name,email,number,message);
    }
    return (
        <div className='replayContactUs '>
            <div className='container py-5'>
            <Trending title={'Leave a Reply'}/>

            <form action="" className='mt-5 ' onSubmit={handleReplayContactus}>
                <div className='input-form-name-email'>
                    <input type="text" placeholder='Name' name='name' className='replayContactUs-from'/>
                    <input type="email" placeholder='Email' name='email' className='ms-5 replayContactUs-from'/>
                </div>
                <input type="number" name="number" id="" placeholder='Number' className='w-100 my-4 replayContactUs-from'/>
                <textarea name="message" id="" className='w-100 replayContactUs-from' rows="10" placeholder='Enter Your Message' ></textarea>
                <input type="submit" value="Send Message" className='mt-5 input-replay-submit' />
            </form>
        </div>
        </div>
    );
};

export default ReplayContact;