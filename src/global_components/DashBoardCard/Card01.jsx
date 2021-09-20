import React from 'react'

function Card02() {
    return (
        <div className='mr-3'>
            <div class="w-full md:flex-row flex-col  flex shadow-lg stats m-2 bg-primary-background text-primary-text rounded-md ">
                <div class="stat bg-secondary text-primary-text  ">
                    <div class="stat-figure  ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </div>
                    <div class="stat-title">Total Likes</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat bg-secondary text-primary-text">
                    <div class="stat-figure ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value ">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>
                <div class="stat bg-secondary text-primary-text">
                    <div class="stat-figure ">
                        <div class="avatar online">
                            <div class="w-14 h-14  mask mask-squircle bg-base-100">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="Avatar Tailwind CSS Component" class="mask mask-squircle" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-desc ">31 tasks remaining</div>
                </div>
            </div>

        </div>
    )
}

export default Card02
