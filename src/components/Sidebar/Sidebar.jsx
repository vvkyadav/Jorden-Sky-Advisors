import React from 'react'
import "./Sidebar.css"
import {
    LineStyle, AccountBalanceWallet, FolderOpen, Message, Settings, ExitToApp
} from "@material-ui/icons"


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" />
                        </li>
                        <li className="sidebarListItem">
                            <AccountBalanceWallet className="sidebarIcon" />
                        </li>
                        <li className="sidebarListItem">
                            <FolderOpen className="sidebarIcon" />
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon" />
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon" />
                        </li>
                        <li className="sidebarListItem">
                            <ExitToApp className="sidebarIconLast" />
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
