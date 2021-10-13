import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setThemePreference } from '../../redux/actions/settingsActions';
import { setTheme } from '../../redux/actions/ThemeActions';

function ThemeChanger({ parameters }) {

    const [toggle, settoggle] = useState(true)
    const dispatch = useDispatch();

    function Toggle_Theme(type) {
        dispatch(setThemePreference('user_preferred'))
        // localStorage.setItem("theme_preference", "user_preferred")
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

    return (
        <div className='m-3 '>
            <div class=" rounded-lg ">
                <div class="form-control">
                    <label class="cursor-pointer label bg-secondary">
                        <span class="label-text text-primary-text">{
                            parameters.theme == 'dark' ? 'default mode' : "dark mode"
                        }</span>
                        <input type="checkbox"
                            onClick={() => {
                                settoggle(!toggle)
                                Toggle_Theme(parameters.theme)
                            }}
                            checked={toggle} class="toggle  toggle-primary" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger
