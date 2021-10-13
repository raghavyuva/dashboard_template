import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";

function EditCard({ parameters }) {
    const { User, Fields, OnSubmit, user } = parameters;
    return (
        <div className="col-span-full xl:col-span-6 bg-secondary text-primary-text shadow-lg rounded-sm   m-2">
            <header className="px-5 py-4 border-b border-primary  flex justify-between">
                <h2 className="font-semibold ">
                    You are Editing
                    <span className=""> {User?.first_name + User?.last_name}</span>
                </h2>
                <h2>
                    <button >
                        <RiDeleteBin6Fill size={30} />
                    </button>
                </h2>
            </header>
            <div className="flex md:flex-row flex-col justify-center align-middle items-center lg:items-start ">
                <div className="place-items-center  m-2">
                    <img src={User?.avatar} alt="" className="h-60 m-2 w-60" />
                </div>
                <div class="rounded-md shadow-sm  md:grid-cols-3 flex justify-between ">
                    <div className="px-2 py-2">
                        {
                            user?.role === 'super_admin' ?
                                Fields?.map((ele) => {

                                    return (
                                        <input
                                            id={ele.value}
                                            name={ele.value}
                                            type={ele.value}
                                            class="appearance-none rounded-none m-2 relative block w-full px-3 py-2 border placeholder-primary-background  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            value={ele.value}
                                            placeholder={ele.value}
                                            onChange={(e) => (ele.onchange)(e.target.value)}
                                        />
                                    )
                                })
                                :
                                Fields?.slice().map((ele) => {
                                    return (
                                        <input
                                            id={ele.value}
                                            name={ele.value}
                                            type={ele.value}
                                            class="appearance-none rounded-none m-2 relative block w-full px-3 py-2 border placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            value={ele.value}
                                            placeholder={ele.value}
                                            onChange={(e) => (ele.onchange)(e.target.value)}
                                        />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
            <div class="px-4 py-3  text-right sm:px-6">
                <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => OnSubmit()}
                >
                    Save changes
                </button>
            </div>
        </div>
    );
}

export default EditCard
