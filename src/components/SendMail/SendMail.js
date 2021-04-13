import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import './SendMail.js'

function SendMail() {
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <div className="sendMail__options">
                    <Button>send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
