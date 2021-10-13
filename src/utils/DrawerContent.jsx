import React, { useState, useEffect } from 'react'
import { SideMenu, Various_Drawer } from '../constants/MenuItems';
import GreetingsBoard from '../global_components/GreetingsBoard';
import { NavBar } from '../global_components/NavBar';
import SideBar from './SideBar'
import useComponentVisible from './TouchBehaviour';

function DrawerContent({
    toggle,
    settoggle,
    Cards,
    Greet,
    Featured,
    grid_system,
    user,
    greeting_way,
    theme
}) {
    const { ref } = useComponentVisible(false, toggle, settoggle);

    const [MenuItems, setMenuItems] = useState(SideMenu)
    const [active, setactive] = useState(MenuItems[0]?.name);


    useEffect(() => {
        for (let index = 0; index < Various_Drawer.length; index++) {
            const element = Various_Drawer[index];
            if (window.location.toString().includes(element.name)) {
                setMenuItems(element.component);
                element.component.forEach((ele) => {
                    if (window.location.toString().includes(ele.link.toLowerCase())) {
                        setactive(ele.name)
                    }
                })
            }
        }
    }, [window.location.toString()])

    return (
        <div className=" shadow bg-primary-background drawer drawer-mobile h-full" >
            <input id="my-drawer-2 "
                type="checkbox"
                className="drawer-toggle"
                onClick={() => { settoggle(!toggle) }}
                checked={toggle}
                readOnly
            />
            <div className="flex flex-col  drawer-content overflow-hidden p-0  ">
                <div className=''>
                    <NavBar
                        user={user}
                        theme={theme}
                        toggle={toggle}
                        settoggle={settoggle}
                    />
                </div>
                <div className='p-5'>
                    {
                        Greet &&
                        <GreetingsBoard
                            user={user}
                            greeting_way={greeting_way}
                        />
                    }
                    {
                        Featured &&
                        <Featured />
                    }
                    <div className={`${grid_system ? 'grid-cols-2 lg:grid p-4  flex flex-col ' : "flex flex-col"} overflow-hidden `}
                        ref={ref}
                    >
                        {
                            Cards?.length > 0 &&
                            Cards?.map((Card) => (
                                <Card.Component parameters={Card.parameters} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="drawer-side h-screen overflow-hidden" >
                <label for="my-drawer-2" className="drawer-overlay" ></label>
                <ul className="menu  overflow-hidden w-60 bg-secondary shadow-lg text-primary-text  ">
                    <div className='flex flex-row items-center mb-5 justify-center'>
                        <img src="https://image.flaticon.com/icons/png/512/187/187902.png" alt=""
                            className='h-10 w-10 self-center'
                        />
                        <span className="text-lg font-bold ml-5">
                            VegaLearn
                        </span>
                    </div>
                    {
                        MenuItems.length > 0 &&
                        MenuItems?.map((ele) => (
                            <SideBar
                                name={ele.name}
                                active={active}
                                setactive={setactive}
                                link={ele.link}
                                Icon={ele.icon}
                            />
                        )
                        )
                    }
                    {/* <div className=' btn  btn-primary items-center text-center  justify-center  flex flex-row '>

                        <li className='my-2 rounded-md capitalize '>
                            Logout
                        </li>

                    </div> */}
                </ul>
            </div>
        </div>
    )
}

export default DrawerContent
