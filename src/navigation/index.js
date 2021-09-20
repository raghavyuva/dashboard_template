import { useEffect } from "react";
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

const { token, uid } = GET_FROM_LOCAL_STORAGE;

function IndexNav({ Token, loading, default_theme }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setToken(token));
		dispatch(setUid(uid));
		applyTheme(default_theme);
		dispatch(setLoading(false));
	}, [default_theme, dispatch]);

	if (loading) {
		return (
			<div className='align-middle flex justify-center items-center h-screen'>
				<button class='btn btn-lg btn-circle loading'></button>
			</div>
		);
	}

	return (
		<div className=''>
			<Router>
				{Token ? (
					<Switch>
						<Route exact path='/' component={DashBoard} />
						<Route exact path='/users' component={Users} />
						<Route   component={NotFound} />
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IndexNav);
