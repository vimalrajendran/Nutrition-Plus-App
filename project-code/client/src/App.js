import { Route, Routes, Navigate} from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import MainDashboard from "./components/Main/dashboard";
import Nav1 from "./components/Header/nav1";
import Nav2 from "./components/Header/nav2";

function App() {
	const user = localStorage.getItem("token");

	return (

		<div>
			<Nav1 />
			<Routes>
				{<Route path="/home" exact element={<MainDashboard />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<MainDashboard/>} />
			</Routes>
		</div>



	);
}

export default App;

