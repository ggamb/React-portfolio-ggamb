import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';
import { Typography } from '@mui/material';

function Contact() {
    const serviceID = 'service_dqwrsly';
    const templateID = 'template_2kmd407';
    const userID = 'user_zp4X6Lct2JtUs0hJgaU48';

    const [errorMessage, setErrorMessage] = useState('');

    const [messageSent, setMessageSent] = useState(false);

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            serviceID,
            templateID,
            toSend,
            userID
        )
            .then((response) => {
                
                setToSend({
                    from_name: "",
                    message: "",
                    reply_to: ""
                })

                alert("Email sent successfully!");
                setMessageSent(true);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>

            <h1 data-testid="h1tag" className='tab-text'>Contact me</h1>
            <br></br>
            <Typography variant='h4' style={{ textAlign: 'left' }}>
                Use this form below or email me directly at:<br></br>
                <a href='mailto: glenngambardella372@gmail.com'>glenngambardella372@gmail.com</a>
            </Typography>

            <section className='center-info'>
                <form id="contact-form" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="from_name">Name: </label>
                        <br></br>
                        <input
                            type='text'
                            name='from_name'
                            placeholder='Your name'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message: </label>
                        <textarea
                            type='text'
                            rows={5}
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="reply_to">Your email: </label>
                        <input
                            type='text'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>

                {messageSent && (
                        <div>
                           <span className='check-img' role='check-img'>✅</span><p className='success-text'>Message sent successfully! I will reach out to you shortly!</p>
                        </div>
                    )}
            </section>
        </>
    );
}

export default Contact;
