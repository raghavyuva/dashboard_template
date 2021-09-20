import React, { useState } from 'react'
import { SideMenu } from '../constants/MenuItems';
import GreetingsBoard from '../global_components/GreetingsBoard';
import SideBar from './SideBar'

function DrawerContent({ toggle, settoggle, Cards, Greet, Featured, grid_system }) {
    const [active, setactive] = useState(SideMenu[0]?.name);
    return (
        <div className=" shadow bg-primary-background drawer drawer-mobile h-full">
            <input id="my-drawer-2 "
                type="checkbox"
                className="drawer-toggle"
                onClick={() => { settoggle(!toggle) }}
                checked={toggle}
                readOnly
            />
            <div className="flex flex-col  drawer-content overflow-hidden p-5">
                {
                    Greet &&
                    <GreetingsBoard />
                }
                {
                    Featured &&
                    <Featured />
                }
                <div className={`${grid_system ? 'grid-cols-2 lg:grid gap-4 flex flex-col ' : "flex flex-col"} h-screen`}>
                    {
                        Cards?.length > 0 &&
                        Cards?.map((Card) => (
                            <Card.Component parameters={Card.parameters} />
                        ))
                    }
                </div>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-hidden w-60 bg-primary-background shadow-lg border-r-2 text-primary-text  ">
                    {
                        SideMenu?.length > 0 &&
                        SideMenu?.map((ele) => (
                            <SideBar
                                name={ele.name}
                                active={active}
                                setactive={setactive}
                                link={ele.link}
                            />
                        )
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default DrawerContent
