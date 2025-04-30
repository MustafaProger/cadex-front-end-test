import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ThankYouPage from "./pages/ThankYouPage";

import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 300,
			once: true,
		});
	}, []);

	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/contact-us' element={<ContactPage />} />
				<Route path="/thank-you" element={<ThankYouPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
