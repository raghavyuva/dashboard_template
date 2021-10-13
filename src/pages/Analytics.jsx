import React, { useState} from 'react'
import { FiSettings } from 'react-icons/fi';
import { connect } from 'react-redux'
import Card03 from '../global_components/DashBoardCard/Card03'
import Header_Banner from '../global_components/Header_Banner';
import { NavBar } from '../global_components/NavBar';
import DrawerContent from '../utils/DrawerContent';
import CheckDetailsFetched from '../utils/GetDetails';
import Card04 from '../global_components/DashBoardCard/Card04'

export const Analytics = ({
    uid,
    user,
    theme
}) => {
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    CheckDetailsFetched(user, uid);
    const Cards = [
        {
            parameters: {
                user,
            },
            Component: Card03
        },
        {
            parameters: {
                user,
            },
            Component: Card04
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
        <NavBar
            user={user}
            theme={theme}
            toggle={toggle}
            settoggle={settoggle}
        />
        <DrawerContent
            toggle={toggle}
            settoggle={settoggle}
            Greet={true}
            grid_system={true}
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
    Students: state.userDetails.Allusers,
    Token: state.userDetails.token,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Analytics)
