import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { FaFilter, FaSearch, } from "react-icons/fa";

function SearchModal({ modal, setmodal }) {
    return (
        <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"
        >
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className='p-5'>
                        <div class="form-control">
                            <div class="flex space-x-2">
                                <input type="text" name="company-website" id="company-website" class="border-b-2 flex-1 focus:ring-0 focus-within:ring-0 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="search anything" />
                                <button class="">
                                    <FaSearch size={20} />
                                </button>
                                <button class="  border-0 ">
                                    <FaFilter
                                        size={20}
                                    />
                                </button>
                            </div>
                            <span
                                className=' opacity-60 my-2 ml-5'
                            >Recent Searches</span>
                        </div>
                        <span className='items-center flex-row flex opacity-60 py-2'>
                            <BsArrowUpRight
                                className='mr-2'
                            />   how to go for online interviews
                        </span>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            onClick={() => setmodal(!modal)}
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal
