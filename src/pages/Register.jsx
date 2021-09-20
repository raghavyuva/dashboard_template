import React, { useState } from 'react'
import FormLeft from '../global_components/FormLeft'
import { PlaceFill } from "../constants/Register_const";
import IllustrativeRight from '../global_components/IllustrativeRight';
import Build from '../assets/Exams.svg';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/UserActions';
import { PostRequest } from '../Requests/Request';
const { via, loginwith, goto, signin, top_header } = PlaceFill;
export const Register = () => {
    const [email, setemail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
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
                SignUp()
            } else {
                if (password.length < 5 || password.length > 20) {
                    setalertmessage("password length should lie between 5,20");
                } else {
                    setalertmessage("email is badly formatted");
                }
            }
        }
    }
    async function SignUp() {

        const user = { email, password, firstName, lastName, }
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/user/register`;
        const respons = PostRequest(`${url}`, user);
        respons?.then(data => {
            dispatch(setUser(data))
        })
    }
    return (
        <div className="flex flex-col-reverse  md:grid md:grid-cols-2 items-center justify-center bg-primary-background self-center ">
            <IllustrativeRight illustartion={Build}
                headline='Learn once, Impliment always'
                description=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore itaque eligendi dignissimos. Officiis deleniti deserunt minima ullam vitae maxime vero nulla aspernatur iusto, eius beatae, velit tenetur, assumenda corporis rerum.'
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
                signup={true}
                loading={loading}
                setloading={setloading}
                firstName={firstName}
                setfirstName={setfirstName}
                lastName={lastName}
                setlastName={setlastName}
            />
        </div>
    )
}



export default Register;
// eslint-disable-next-line
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
