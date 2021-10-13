import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { applyTheme } from "../themes/themeutil";
import { connect, useDispatch } from "react-redux";
import { setToken, setUid } from "../redux/actions/UserActions";
import { setLoading } from "../redux/actions/LoadingActions";
import { GET_FROM_LOCAL_STORAGE } from "../constants/LocalStorage";
import Users from "../pages/Users";
import NotFound from "../pages/404";
import EditUser from "../pages/EditUser";
import Settings from "../pages/Settings";
import Analytics from "../pages/Analytics";
import { setTheme } from "../redux/actions/ThemeActions";
const { token, uid, Theme } = GET_FROM_LOCAL_STORAGE;

function IndexNav({ Token, loading, default_theme, prefer_type }) {
	const dispatch = useDispatch();
	const hours = new Date().getHours();
	const isDayTime = hours > 6 && hours < 18;
	const [Day, setDay] = useState(isDayTime);

	useEffect(() => {
		setDay(isDayTime);
		return () => {};
	}, [isDayTime]);

	useEffect(() => {
		dispatch(setLoading(true));
		dispatch(setToken(token));
		dispatch(setUid(uid));
		console.log(prefer_type);
		switch (prefer_type) {
			case "user_preferred":
				let x = 0;
				if (x == 0) {
					console.log(Theme);
					if (Theme == "dark") {
						dispatch(setTheme("dark"));
						applyTheme("dark");

						x += 1;
					} else {
						dispatch(setTheme("base"));
						applyTheme("base");
					}
				} else {
					applyTheme(default_theme);
				}
				break;
			case "system_preferred":
				break;
			default:
				if (Day) {
					applyTheme(default_theme);
					dispatch(setTheme("base"));
				} else {
					applyTheme("dark");
					dispatch(setTheme("dark"));
				}
				break;
		}
		dispatch(setLoading(false));
	}, [Day, dispatch, default_theme]);

	if (loading) {
		return (
			<div className='align-middle flex justify-center items-center h-screen'>
				<button className='btn btn-lg btn-circle loading'></button>
			</div>
		);
	}

	return (
		<div className=''>
			<Router>
				{Token ? (
					<Switch>
						<Route exact path='/home' component={DashBoard} />
						<Route
							exact
							path='/home/users'
							component={Users}
						/>
						<Route
							exact
							path='/home/analytics'
							component={Analytics}
						/>
						<Route
							exact
							path='/home/edit/user/:id'
							component={EditUser}
						/>
						<Route
							exact
							path='/settings'
							component={Settings}
						/>
						<Route
							exact
							path='/settings/privacy'
							component={Users}
						/>
						<Route component={NotFound} />
					</Switch>
				) : (
					<Switch>
						<Route exact path='/' component={Register} />
						<Route exact path='/login' component={Login} />
					</Switch>
				)}
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	Token: state.userDetails.token,
	loading: state.loadingDetails.loading,
	default_theme: state.themeDetails.theme,
	prefer_type: state.settingsDetails.prefer_type,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndexNav);
