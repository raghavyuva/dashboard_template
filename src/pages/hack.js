import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import Header_Banner from '../global_components/Header_Banner';
import { NavBar } from '../global_components/NavBar';
import DrawerContent from '../utils/DrawerContent';

export const Settings = ({
    user,
    uid,
    theme,
    Allusers
}) => {
    const dispatch = useDispatch();
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    
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
                greettext='here is how your project behaving'
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
