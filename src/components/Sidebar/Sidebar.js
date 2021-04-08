import { Button } from '@material-ui/core';
import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button
                className="sidebar__compose"
                startIcon={<AddIcon fontSize="large" />}>Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
        </div>
    )
}

export default Sidebar
