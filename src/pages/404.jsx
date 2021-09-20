import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            NOT FOUND BUDDY
            <Link to='/'>
                <h1>go to home page</h1>
            </Link>
        </div>
    )
}

export default NotFound;
