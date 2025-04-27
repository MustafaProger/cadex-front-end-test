// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Contact from "./pages/ContactPage";
import Header from "./components/header/Header";

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<MainPage />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
