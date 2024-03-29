import React, { Component, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Header_Banner from '../global_components/Header_Banner';
import { NavBar } from '../global_components/NavBar';
import DrawerContent from '../utils/DrawerContent';
import Card02 from '../global_components/DashBoardCard/Card02';

export const Users = ({ user, uid, theme, Allusers }) => {
    const dispatch = useDispatch();
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    const Cards = [
        {
            parameters: {
                Allusers
            },
            Component: Card02
        },
    ]
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
                Cards={Cards}
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

export default connect(mapStateToProps, mapDispatchToProps)(Users)
