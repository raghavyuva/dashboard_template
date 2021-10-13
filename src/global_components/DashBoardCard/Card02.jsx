import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Card02({ parameters }) {
    const [user, setuser] = useState([]);


    useEffect(() => {
        setuser(Object.values(parameters)[0])
        // console.log(Object.values(parameters)[0])
        console.log(parameters[0])
        return () => {
 
        } 
    }, [])

    return (
        <div class="flex flex-col m-2 bg-secondary">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-secondary sm:rounded-lg">
                        <table class="min-w-full ">
                            <thead class="bg-secondary">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                   
                                    <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-primary-background text-primary-text  ">
                                {
                                    user?.map((ele) => (
                                        <CardForUser
                                            name={ele.first_name}
                                            email={ele.email}
                                            role={ele.role}
                                            verified={ele.email_verified}
                                            id={ele._id}
                                            avatar={ele.avatar}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card02
function CardForUser({ name, email, role, verified, id, avatar }) {
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={avatar} alt="" />
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-primary-text">
                            {name}
                        </div>
                        <div class="text-sm text-gray-500">
                            {email}
                        </div>
                    </div>
                </div> 
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{role}</div>
                <div class="text-sm text-gray-500">{id}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {verified}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link to={{
                    pathname: `/edit/user/${id} `,
                    state: id
                }} >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </Link>
            </td>
        </tr>
    )
}