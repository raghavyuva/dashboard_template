import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { User_Prefix, ApiList } from '../constants/Api';
import { setLoading } from '../redux/actions/LoadingActions';
import { setUser } from '../redux/actions/UserActions';
import { GetRequest } from '../Requests/Request';
const { GET_USER } = ApiList;
export default function CheckDetailsFetched(
    user,
    uid,
) {
    const dispatch = useDispatch();
    const [data, setdata] = useState(user)
    function FetchUserDetails() {

        if (user.length <= 0) {
            dispatch(setLoading(true));

            let response = GetRequest(process.env.REACT_APP_BACKEND_URL + User_Prefix + GET_USER + uid)
            response?.then((data) => {
                dispatch(setUser(data.user));
                dispatch(setLoading(false));
                setdata(data.user)
            })
        }

    }
    useEffect(() => {
        FetchUserDetails()
    });
    return { data };
}
