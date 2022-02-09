import React, { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';
import { Icon, Typography } from '@mui/material';
import DangerousIcon from '@mui/icons-material/Dangerous';

function Contact() {
    const serviceID = 'service_dqwrsly';
    const templateID = 'template_2kmd407';
    const userID = 'user_zp4X6Lct2JtUs0hJgaU48';

    const [messageSent, setMessageSent] = useState(false);

    //Controls error messages and icons for name, email, textarea
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageText, setErrorMessageText] = useState('');
    const [failedEmail, setFailedEmail] = useState('');

    //For emailjs
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        setErrorMessageEmail('');
        setErrorMessageName('');
        setErrorMessageText('');

        const nameText = e.target[0].value;
        const emailText = e.target[1].value;
        const messageText = e.target[2].value;

        if (nameText && emailText && messageText) {
            send(
                serviceID,
                templateID,
                toSend,
                userID
            )
                .then((response) => {
                    //Sends email via emailjs
                    setToSend({
                        from_name: "",
                        message: "",
                        reply_to: ""
                    })

                    //Sets messageSent to true to display text
                    setFailedEmail(false);
                    setMessageSent(true);
                })
                .catch((err) => {
                    setFailedEmail('Something went wrong. Did you enter all your info?')
                });
        } else {
            setFailedEmail('Something went wrong. Did you enter all your info?')
        }
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setFailedEmail(false);

        //Handles email blur
        if (e.target.name === 'reply_to' || e.target.length < 1) {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessageEmail('Your email is invalid.');
            } else {
                setErrorMessageEmail('');
            }
        }

        //Handles name blur
        if (e.target.name === 'from_name') {
            if (e.target.value.length < 1) {
                setErrorMessageName('Your name is invalid. Please let me know who to contact :)');
            } else {
                setErrorMessageName('');
            }
        }

        //Handles message blur
        if (e.target.name === 'message') {
            if (e.target.value.length < 1) {
                setErrorMessageText('Send me something, anything!');
            } else {
                setErrorMessageText('');
            }


        }
    }

    return (
        <>

            <h1 data-testid="h1tag" className='tab-text'>Contact me</h1>
            <br></br>
            <Typography variant='h5' style={{ textAlign: 'left', paddingBottom: '10px' }}>
                Use the form below or email me directly at:
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
                            onBlur={handleBlur}
                            className='input-style'
                        />
                        {errorMessageName && (
                            <span>
                                <Icon>
                                    <DangerousIcon sx={{ color: 'var(--error)' }} />
                                </Icon>
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="reply_to">Email: </label><br />
                        <input
                            type='email'
                            name='reply_to'
                            placeholder='Your email'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            className='input-style'
                            onBlur={handleBlur}
                        />
                        {errorMessageEmail && (
                            <span>
                                <Icon>
                                    <DangerousIcon sx={{ color: 'var(--error)' }} />
                                </Icon>
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor="message">Message: </label><br />
                        <textarea
                            type='text'
                            name='message'
                            placeholder='Your message'
                            value={toSend.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='message-box'
                        />
                        {errorMessageText && (
                            <span>
                                <Icon>
                                    <DangerousIcon sx={{ color: 'var(--error)' }} />
                                </Icon>
                            </span>
                        )}
                    </div>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>

                {errorMessageEmail && (
                    <div>
                        <p className="error-text">{errorMessageEmail}</p>
                    </div>
                )}

                {errorMessageName && (
                    <div>
                        <p className="error-text">{errorMessageName}</p>
                    </div>
                )}

                {errorMessageText && (
                    <div>
                        <p className="error-text">{errorMessageText}</p>
                    </div>
                )}

                {failedEmail && (
                    <div>
                        <p className="error-text">{failedEmail}</p>
                    </div>
                )}

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
