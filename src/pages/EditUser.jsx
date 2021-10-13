import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { User_Prefix, ApiList } from '../constants/Api'
import EditCard from '../global_components/DashBoardCard/EditCard'
import Header_Banner from '../global_components/Header_Banner'
import { NavBar } from '../global_components/NavBar'
import { setLoading } from '../redux/actions/LoadingActions'
import { GetRequest,  PutRequest } from '../Requests/Request'
import DrawerContent from '../utils/DrawerContent'
const { GET_USER, UPDATE_USER_BY_ID } = ApiList;


export const EditUser = ({ user, theme, Token }) => {

    const dispatch = useDispatch();


    const [toggle, settoggle] = useState(false);
    const [display_banner, setdisplay_banner] = useState(true);
    let location = useLocation();
    let id = location?.state
    const [User, setUser] = useState(null);
    const [email, setemail] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [role, setrole] = useState('');


    const Fields = [
        {
            value: email,
            onchange: setemail,
        },
        {
            value: first_name,
            onchange: setfirst_name,
        },
        {
            value: last_name,
            onchange: setlast_name
        },
        {
            value: role,
            onchange: setrole
        }
    ]
    const Cards = [
        {
            parameters: {
                User,
                Fields,
                OnSubmit,
                user
            },
            Component: EditCard
        },
    ]


    function OnSubmit() {
        let url = process.env.REACT_APP_BACKEND_URL + User_Prefix + UPDATE_USER_BY_ID + id;
        let requestBody = {
            first_name,
            last_name,
            role,
            email,
        }
        let response = PutRequest(url, requestBody, Token);
        response?.then(data => {
            console.log(data)
            if (data.message) {
                alert(data.message)
            }
        })
    }

    useEffect(() => {
        dispatch(setLoading(true));
        FetchUserById();
        dispatch(setLoading(false))
        return () => {

        }
    }, [])


    const FetchUserById = () => {

        let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + GET_USER + id)
        response?.then((data) => {
            setUser(data?.user);
            setemail(data?.user?.email);
            setfirst_name(data?.user?.first_name);
            setlast_name(data?.user?.last_name);
            setrole(data?.user?.role)
        })

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
                grid_system={false}
                Cards={Cards}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.userDetails.user,
    theme: state.themeDetails.theme,
    Token: state.userDetails.token,
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
