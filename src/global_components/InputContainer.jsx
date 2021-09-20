import InputBox from "./InputBox";
export default function InputContainer({
    email,
    setemail,
    password,
    setpassword,
    signup,
    firstName,
    setfirstName,
    lastName,
    setlastName
}) {
    return (
        <div className=" ">
            <div className={signup ? `${'grid grid-cols-2  '}` : `${'flex flex-col'}`}>
                <InputBox
                    name="email"
                    placeholder="email address"
                    required={true}
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                />
                <InputBox
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                />
                {
                    signup &&
                    (
                        <>
                            <InputBox
                                name="first name"
                                placeholder="first name"
                                onChange={(e) => setfirstName(e.target.value)}
                                required={true}
                                value={firstName}
                            />
                            <InputBox
                                name="last name"
                                placeholder="last name"
                                onChange={(e) => setlastName(e.target.value)}
                                required={true}
                                value={lastName}
                            />

                        </>
                    )
                }

            </div>
        </div>
    );
}