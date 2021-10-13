import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import {
    Link,

} from "react-router-dom";
function SideBar({ name, active, setactive, link, Icon }) {
    return (
        <div className=' m-2 w-full '>
            <Link to={`${'/' + link}`} >
                <li className={`${active === name ? 'bg-primary-background' : "bg-secondary"} my-2 rounded-md capitalize  `}>
                    <a href='#'
                        className=''
                    >
                        <Icon size={25}
                            className='mx-2'
                        />
                        {name}
                    </a>
                </li>
            </Link>
        </div>
    )
}

export default SideBar
