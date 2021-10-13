import { combineReducers } from "redux";
import { loadingReducer } from "./loadingReducer";
import { settingsReducer } from "./settingsReducer";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";
export const reducers = combineReducers({
	userDetails: userReducer,
	loadingDetails: loadingReducer,
	themeDetails: themeReducer,
	settingsDetails: settingsReducer,
});
