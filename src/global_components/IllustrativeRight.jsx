import React from "react";
import { SiAcademia } from "react-icons/si";

function IllustrativeRight({ illustartion, headline, tagline, description }) {
    return (
        <div className='sm:flex  p-2    pr-2 md:h-screen md:flex flex-col   lg:mb-0 bg-secondary hidden'>
            <span>
                <SiAcademia size={50} className='text-sec-background' />
            </span>
            <h1
                className='text-4xl font-bold font-mono text-left  p-2 rounded-md mt-8 text-primary-background'
            >
                {headline}
            </h1>
            <div className="flex justify-center items-center flex-col align-middle flex-1 ">
                <div className='self-center flex object-fill'>
                    <img src={illustartion} alt={tagline}
                        className='max-w-7xl lg:h-96 md:h-64 h-60'
                    />
                </div>
                <div className=' text-center mt-10 text-primary-background'>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default IllustrativeRight;
