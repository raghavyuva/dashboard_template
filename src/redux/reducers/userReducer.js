import { UserTypes } from "../constants/action-types";

const initialState = {
	user: [],
	token: null,
	uid: null,
	Allusers: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case UserTypes.SET_USER:
			return { ...state, user: payload };
		case UserTypes.SET_TOKEN:
			return { ...state, token: payload };
		case UserTypes.SET_UID:
			return { ...state, uid: payload };
		case UserTypes.SET_ALL_USERS:
			return { ...state, Allusers: payload };
		default:
			return state;
	}
};
