import { FaHome, FaUsers, FaUserSecret } from "react-icons/fa";
import { FiSettings, FiTrendingUp } from "react-icons/fi";

export const SideMenu = [
	{
		name: "DashBoard",
		link: "home",
		icon:FaHome
	},
	{
		name: "Users",
		link: "home/users",
		icon:FaUsers
	},
	{
		name: "Analytics",
		link: "home/analytics",
		icon:FiTrendingUp
	},
	
];

export const settings_menu = [
	{
		name: "General Info",
		link: "settings",
		icon:FiSettings
	},
	{
		name: "Privacy",
		link: "settings/privacy",
		icon:FaUserSecret
	},
];
export const Various_Drawer = [
	{
		name: "settings",
		component: settings_menu,
	},
	{
		name: "home",
		component: SideMenu,
	},
];

export const NavBarDropDown = {
	header: "",
	options: [
		{
			name: "Account Settings",
			linkto: "settings",
		},
		{
			name: "Support",
			linkto: "support",
		},
		{
			name: "License",
			linkto: "licence",
		},
	],
};
