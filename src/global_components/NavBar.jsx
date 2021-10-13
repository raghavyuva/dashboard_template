import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { FaBell, FaSearch, } from "react-icons/fa";
import DropDown from '../utils/DropDown';
import SearchModal from '../utils/SearchModal';
import { setToken, setUid, setUser } from '../redux/actions/UserActions';
import { NavBarDropDown } from '../constants/MenuItems';
import { RiMessageFill } from 'react-icons/ri';

export const NavBar = ({ user, toggle, settoggle }) => {
    const dispatch = useDispatch();
    const [open, setopen] = useState(false);
    const [modal, setmodal] = useState(false);



    function LogOut() {
        dispatch(setUser([]));
        dispatch(setToken(null));
        dispatch(setUid(null));
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
    }

    return (
        <>
            {
                modal &&
                <SearchModal
                    modal={modal}
                    setmodal={setmodal}
                />
            }
            <div className="navbar mb-2 shadow-lg bg-primary-background text-primary-text border-b-2 border-secondary  justify-between "
            >
                <div className="flex-none  lg:flex">
                    <button className="btn btn-square btn-ghost lg:hidden" onClick={() => {
                        settoggle(!toggle);
                        // console.log(toggle)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-1  px-2 mx-2 lg:flex">
                    <div class="flex-1 lg:flex-none ">
                        <div class="form-control flex-row flex items-center bg-secondary p-2 rounded-xl">
                            <input type="text" placeholder="Search" class="bg-secondary ml-1 focus:ring-current" />
                            <div className="cursor-pointer">
                                <FaSearch onClick={() => setmodal(!modal)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-none">
                    <div className="flex-1 lg:flex-none pr-4 hidden sm:flex">
                        <FaBell size={25} />
                    </div>
                    <div className="flex-1 lg:flex-none pr-4 hidden sm:flex indicator">
                    <div class="indicator-item badge badge-primary">4</div> 
                        <RiMessageFill size={25} />
                    </div>
                    <div class="flex-none">
                        <DropDown
                            open={open}
                            setopen={setopen}
                            LogOut={LogOut}
                            content={NavBarDropDown}
                        />
                    </div>

                    <div class="avatar ">
                        <div class="rounded-full w-10 h-10 m-1">
                            {
                                user?.avatar &&
                                <img src={user?.avatar} alt='' />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => (
    {
        user: state.userDetails.user
    })

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
