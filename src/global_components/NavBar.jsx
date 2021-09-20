import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { FaMoon, FaSun, FaSearch, } from "react-icons/fa";
import { setTheme } from '../redux/actions/ThemeActions';
import DropDown from '../utils/DropDown';
import SearchModal from '../utils/SearchModal';
import { setToken, setUid, setUser } from '../redux/actions/UserActions';

export const NavBar = ({ user, theme,  toggle, settoggle }) => {
    const dispatch = useDispatch();
    const [open, setopen] = useState(true);
    const [modal, setmodal] = useState(false)

    function Toggle_Theme(type) {
        switch (type) {
            case 'dark':
                dispatch(setTheme('base'));

                break;
            case 'base':
                dispatch(setTheme('dark'));
                break;
            default:
                break;
        }
    }

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
            <div className="navbar mb-2 shadow-lg bg-primary-background text-primary-text border-b-2 border-secondary ">

                <div className="flex-none  lg:flex">
                    <button className="btn btn-square btn-ghost" onClick={() => settoggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-1 hidden px-2 mx-2 lg:flex">
                    <span className="text-lg font-bold">
                      Acme Inc
                    </span>
                </div>
                <div className="flex-1 lg:flex-none pr-2 hidden sm:flex">
                    <div className="cursor-pointer">
                        <FaSearch onClick={() => setmodal(!modal)} />
                    </div>
                </div>
                <div class="flex-none">
                    <DropDown
                        open={open}
                        setopen={setopen}
                        LogOut={LogOut}
                    />
                </div>
                <div class="flex-none">
                    {theme === 'base' ? (
                        <btn onClick={() => Toggle_Theme('base')} className='pr-2'>
                            <FaMoon size={20} />
                        </btn>
                    ) : (
                        <btn onClick={() => Toggle_Theme("dark")} className='pr-2'>
                            <FaSun size={20} />
                        </btn>
                    )}
                    <div class="avatar ">
                        <div class="rounded-full w-10 h-10 m-1">
                            <img src="https://i.pravatar.cc/500?img=32" alt='' />
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
