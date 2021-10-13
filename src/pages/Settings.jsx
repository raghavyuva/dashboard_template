import React, { useState, useEffect } from 'react'
import { FiSettings } from 'react-icons/fi';
import { connect, } from 'react-redux'
import Header_Banner from '../global_components/Header_Banner';
import { NavBar } from '../global_components/NavBar';
import Card01 from '../global_components/SettingsCard/Card01';
import ThemeChanger from '../global_components/SettingsCard/ThemeChanger';
import DrawerContent from '../utils/DrawerContent';
import GetDetails from '../utils/GetDetails';

export const Settings = ({
    user,
    uid,
    // theme,
    Allusers
}) => {
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    // const [changingtheme, setchangingtheme] = useState(theme);
    GetDetails(user, uid);
    
    const Cards = [
        // {
        //     parameters: {
        //         theme,
        //         changingtheme,
        //         setchangingtheme
        //     },
        //     Component: ThemeChanger
        // },
        {
            parameters: {
                Allusers,
                user,
            },
            Component: Card01
        },

    ]


    const Greeting_way = {
        greettext: "View general info and manage your account.",
        greetheader: "Account Settings",
        icon: FiSettings
    }

    return (
        <div className='bg-primary-background '>
            <Header_Banner
                display_banner={display_banner}
                setdisplay_banner={setdisplay_banner}
            />
           
            <DrawerContent
                toggle={toggle}
                settoggle={settoggle}
                Greet={true}
                grid_system={false}
                user={user}
                Cards={Cards}
                greeting_way={Greeting_way}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userDetails.user,
    uid: state.userDetails.uid,
    theme: state.themeDetails.theme,
    Allusers: state.userDetails.Allusers
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
