import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(login({ name: "hxx", age: 20, email: "hxx@aaa.com" }));
				}}
			>
				Login
			</button>
			<button
				onClick={() => {
					dispatch(logout());
				}}
			>
				logout
			</button>
		</div>
	);
};

export default Login;
