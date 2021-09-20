import React, { useState } from 'react'
import FormLeft from '../global_components/FormLeft'
import { LoginPlaceFill } from "../constants/Register_const";
import IllustrativeRight from '../global_components/IllustrativeRight';
import Build from '../assets/Book.svg';
import { useDispatch } from 'react-redux';
import { setToken, setUid, setUser } from '../redux/actions/UserActions';
import { PostRequest } from '../Requests/Request';
const { via, loginwith, goto, signin, top_header, description } = LoginPlaceFill;
function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState();
    const [alertmessage, setalertmessage] = useState("");
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    async function Validate() {
        if (!email || !password) {
            setalertmessage("all fields are required");
        } else {
            setalertmessage("");
            if (
                email.match(mailformat) &&
                password.length > 5 &&
                password.length < 20
            ) {
                SignIn()
            } else {
                if (password.length < 5 || password.length > 20) {
                    setalertmessage("password length should lie between 5,20");
                } else {
                    setalertmessage("email is badly formatted");
                }
            }
        }
    }
    async function SignIn() {
        const user = { email, password, }
        let loginurl = `${process.env.REACT_APP_BACKEND_URL}/api/user/login`;
        const resp = PostRequest(`${loginurl}`, user);
        console.log(resp);
        resp?.then((data) => {
            dispatch(setUser(data.user))
            dispatch(setToken(data.token));
            dispatch(setUid(data.user._id));
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.user._id)
        })
    }
    return (
        <div className="flex flex-col-reverse  md:grid md:grid-cols-2 items-center justify-center max-w-full self-center ">
            <IllustrativeRight illustartion={Build}
                headline='Learn once, Impliment always'
                description={description}
            />
            <FormLeft
                email={email}
                password={password}
                setemail={setemail}
                setpassword={setpassword}
                Validate={Validate}
                alertmessage={alertmessage}
                via={via}
                loginwith={loginwith}
                goto={goto}
                signin={signin}
                top_header={top_header}
                loading={loading}
                setloading={setloading}
            />
        </div>
    )
}

export default Login
// eslint-disable-next-line
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/