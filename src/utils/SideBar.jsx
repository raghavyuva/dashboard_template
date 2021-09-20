import React from 'react'
import {
    Link,
} from "react-router-dom";
function SideBar({ name, active, setactive, link }) {
    return (
        <div>
            <Link to={`${'/' + link}`} onClick={() => setactive(name)}>
                <li className={`${active === name ? 'bg-secondary' : "bg-primary-background"} my-2 rounded-md capitalize`}>
                    <a href='#'>{name}</a>
                </li>
            </Link>
        </div>
    )
}

export default SideBar
