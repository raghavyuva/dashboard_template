import React, { useEffect, useState } from 'react'
import { GiAirBalloon } from 'react-icons/gi';
import { connect, useDispatch } from 'react-redux'
import { ApiList, User_Prefix } from '../constants/Api';
import Card01 from '../global_components/DashBoardCard/Card01';
import Card02 from '../global_components/DashBoardCard/Card02';
import Header_Banner from '../global_components/Header_Banner';
import Card03 from '../global_components/DashBoardCard/Card03';
import Card04 from '../global_components/DashBoardCard/Card04';

import { NavBar } from '../global_components/NavBar';
import { setLoading } from '../redux/actions/LoadingActions';
import { setAllUsers, setUser } from '../redux/actions/UserActions';
import { GetRequest } from '../Requests/Request';
import { applyTheme } from '../themes/themeutil';
import DrawerContent from '../utils/DrawerContent.jsx';
import CheckDetailsFetched from '../utils/GetDetails';
const { GET_ALL_USERS, LIST_USER_BY_ROLE } = ApiList;

export const DashBoard = ({
    user,
    uid,
    theme,
    Students,
    Token,
    loading
}) => {

    const dispatch = useDispatch();
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    const [teachers, setteachers] = useState()
    CheckDetailsFetched(user, uid);

    const Cards = [
        {
            parameters: {
                teachers
            },
            Component: Card03
        },
        {
            parameters: {
                teachers
            },
            Component: Card04
        },
        {
            parameters: {
                Students
            },
            Component: Card02
        },
        {
            parameters: {
                teachers
            },
            Component: Card02
        },

    ]
    const Greeting_way = {
        greettext: "",
        greetheader: "Welcome",
        icon: GiAirBalloon
    }

    useEffect(() => {
        dispatch(setLoading(true))
        applyTheme(theme);
        FetchAdmins();
        FetchTeachers()
        dispatch(setLoading(false))
        // eslint-disable-next-line
    }, [])





    function FetchAdmins() {

        let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + LIST_USER_BY_ROLE + 'super_admin', Token);
        response?.then((data) => {
            dispatch(setAllUsers(data))
        })

    }


    function FetchTeachers() {
        let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + LIST_USER_BY_ROLE + 'teacher', Token);
        response?.then((data) => {
            setteachers(data)
        })
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
                Cards={Cards}
                Greet={true}
                grid_system={true}
                user={user}
                greeting_way={Greeting_way}
                Featured={Card01}
                theme={theme}
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
    loading: state.loadingDetails.loading,

})

export default connect(mapStateToProps)(DashBoard)

