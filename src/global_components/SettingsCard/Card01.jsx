import React from 'react'

function Card01({ parameters }) {
    const { Allusers, user } = parameters;
    return (
        <div className='flex flex-col m-2 bg-primary-background text-primary-text'>
            <div class="">
                <form action="#" method="POST">
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                        <div class=" bg-secondary  sm:p-6">
                            <div>
                                <label class="block text-sm font-medium ">
                                    Photo
                                </label>
                                <div class="mt-1 flex items-center">
                                    <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-primary-background">
                                        <div class="avatar ">
                                            <div class="rounded-full w-10 h-10 m-1">
                                                {
                                                    user?.avatar &&
                                                    <img src={user?.avatar} alt='' />
                                                }
                                            </div>
                                        </div>
                                    </span>
                                    <button type="button" class="ml-5 bg-primary-background py-2 px-3  rounded-md shadow-sm text-sm leading-4 font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Change
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label for="about" class="block text-sm font-medium mt-5">
                                    Email
                                </label>
                                <div class="mt-1">
                                    <input id="about" name="about" rows="3"
                                        class="shadow-sm mt-2 bg-primary-background  block w-full sm:text-sm p-2  rounded-md"
                                        placeholder="   Brief description for your profile. ">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-3  text-right sm:px-6 bg-secondary">
                            <button type="submit" class="inline-flex justify-center bg-primary text-secondary py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Card01
