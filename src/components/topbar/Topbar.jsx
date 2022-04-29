import React from "react";
import "./topbar.css";
import { Search, NotificationsNone } from "@material-ui/icons";


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Bgm</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Search />
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                    </div>
                    <p className="profileName">August Brown</p>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}