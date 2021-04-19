import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import './SendMail.css'
import { db } from '../../firebase';
import firebase from 'firebase'

function SendMail() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm('');
    const onSubmit = () => {
        console.log(email);
        db.collection('emails').add({
            email: email,
            subject: subject,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

    };
    const dispatch = useDispatch();
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="To"
                    name="to"
                    onChange={(e) => setEmail(e.target.value)}
                    {...register("email", { required: true })}
                />
                {errors.email && <p className="sendMail__error">To is required</p>}
                <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}

                />
                <input
                    name="message"
                    placeholder="Messages"
                    type="text"
                    className="sendMail__message"
                    onChange={(e) => setMessage(e.target.value)} />
                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit">send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
