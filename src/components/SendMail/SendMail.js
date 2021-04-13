import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
import './SendMail.css'

function SendMail() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        console.log(formData);

    };
    const dispatch = useDispatch();
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit()}>
                <input type="email" placeholder="To" name="to" {...register("email", { required: true })} />
                {errors.email && <p className="sendMail__error">To is required</p>}
                <input name="subject" placeholder="Subject" type="text" />
                <input
                    name="message"
                    placeholder="Messages"
                    type="text"
                    className="sendMail__message"

                />
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
