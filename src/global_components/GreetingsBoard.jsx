import React from 'react'
import { GiAirBalloon } from 'react-icons/gi'
function GreetingsBoard({ user, greeting_way }) {
    const { greettext, greetheader, icon } = greeting_way ? greeting_way : "";
    return (
        <div className='bg-secondary text-primary-text p-5 shadow-lg rounded-md m-2 justify-between sm:flex-row flex flex-col'>
            <div className='flex flex-col'>
                <span className='text-4xl font-bold  font-serif'>
                    {greetheader ? greetheader : `Greetings 👋${user?.first_name}`}
                </span>
                <span className='text-primary'>
                    {greettext ? greettext : "  Here's what's happening with your project today"}
                </span>
            </div>
            <div
                className="hidden sm:flex" aria-hidden="true"
            >
                {
                    icon ?
                        (<greeting_way.icon size={80}
                            className='text-primary-text'
                        />) :
                        (
                            <GiAirBalloon size={80}
                                className='text-primary-text'
                            />
                        )
                }
            </div>
        </div>
    )
}

export default GreetingsBoard
