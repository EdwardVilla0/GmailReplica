import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import { useForm } from 'react-hook-form'
import './SendMail.css'

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm()
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>
            <form>
                <input name="to" placeholder="To:" type="text" />
                <input name="subject" placeholder="Subject" type="text" />
                <input
                    name="message"
                    placeholder="Messages"
                    type="text"
                    className="sendMail__message" />
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
