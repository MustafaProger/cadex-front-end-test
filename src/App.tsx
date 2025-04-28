// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
					path='/contact-us'
					element={<ContactPage />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
