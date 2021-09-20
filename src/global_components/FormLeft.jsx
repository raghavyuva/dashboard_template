import React from "react";
import { FaAccusoft, } from "react-icons/fa";
import {
    Link,
} from "react-router-dom";
import InputContainer from "./InputContainer";
import Button from "../utils/Button";
function FormLeft({
    password,
    email,
    setemail,
    setpassword,
    alertmessage,
    Validate,
    top_header,
    via,
    goto,
    signin,
    signup,
    loading,
    firstName,
    setfirstName,
    lastName,
    setlastName
}) {
    return (
        <div className=" flex flex-col justify-center items-center h-screen  ">
            <div className={`shadow-lg items-center flex flex-col m-2 bg-primary ${(signup ? "p-8" : "p-8 px-12")}`}>
                <FaAccusoft className='text-primary-focus' size={50} />
                <span
                    className='sm:text-2xl md:text-3xl text-left lg:text-3xl font-medium my-5'
                >{top_header}</span>
                <InputContainer
                    email={email}
                    setemail={setemail}
                    password={password}
                    setpassword={setpassword}
                    signup={signup}
                    firstName={firstName}
                    setfirstName={setfirstName}
                    lastName={lastName}
                    setlastName={setlastName}
                />
                <Button
                    text={via}
                    onClick={() => Validate()}
                    loading={loading}

                />
                <Link to={`${'/' + signin}`}>
                    <Button
                        text={goto}
                        Style="bg--primary-background"
                        loading={loading}

                    />
                </Link>
            </div>
            <div className='hidden  md:flex mt-5'>
                <span>
                    Terms . Privacy . Contact
                </span>
            </div>
            <span className="text-red-500">{alertmessage}</span>
        </div>
    );
}

export default FormLeft;