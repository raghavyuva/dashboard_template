import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { ApiList, User_Prefix } from '../constants/Api';
import Card01 from '../global_components/DashBoardCard/Card01';
import Card02 from '../global_components/DashBoardCard/Card02';
import Header_Banner from '../global_components/Header_Banner';
import { NavBar } from '../global_components/NavBar';
import { setLoading } from '../redux/actions/LoadingActions';
import { setAllUsers, setToken, setUid, setUser } from '../redux/actions/UserActions';
import { GetRequest } from '../Requests/Request';
import { applyTheme } from '../themes/themeutil';
import DrawerContent from '../utils/DrawerContent.jsx';
const { GET_USER, GET_ALL_USERS } = ApiList;

export const DashBoard = ({ user, uid, theme }) => {


    const dispatch = useDispatch();
    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    const [Greet] = useState(true);


    useEffect(() => {
        applyTheme(theme);
        FetchUserDetails();
        FetchAllUsers();
        return () => {
        }
        // eslint-disable-next-line
    }, [theme])

  


    function FetchUserDetails() {
        if (user.length <= 0) {
            dispatch(setLoading(true))
            let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + GET_USER + uid)
            response?.then((data) => {
                dispatch(setUser(data.user));
                dispatch(setLoading(false))
            })
        }
    }



    function FetchAllUsers() {
        // dispatch(setLoading(true));
        // let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + GET_ALL_USERS);
        // response?.then((data) => {
        //     // dispatch(setAllUsers(data.user))
        //     console.log(data);
        //     // dispatch(setLoading(false));
        // })
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
                Cards={Cards}
                Greet={Greet}
                Featured={Card01}
                grid_system={true}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userDetails.user,
    uid: state.userDetails.uid,
    theme: state.themeDetails.theme
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)

const Cards = [
    {
        parameters: {
            users: [{
                user: "Raghav Bhat",
                email: "raghavyua@gmail.com"
            },
            {
                user: "Raghava Bhat",
                email: "raghavyua@il.com"
            },
            {
                user: "Raghav Bhat",
                email: "raghavyua@gmail.com"
            },
            {
                user: "Raghava Bhat",
                email: "raghavyua@il.com"
            },
            {
                user: "Raghav Bhat",
                email: "raghavyua@gmail.com"
            },
            {
                user: "Raghava Bhat",
                email: "raghavyua@il.com"
            }
            ]
        },
        Component: Card02
    },
]