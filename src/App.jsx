import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import {useState} from "react"
import LayerShadow from "./components/LayerShadow/LayerShadow"
import Features from "./components/Features/Features"
import Articles from "./components/Articles/Articles"
import Footer from "./components/Footer/Footer"

import {ContextProvider} from "./context/Context"

import ErrorPopup from "./components/ErrorPopup/ErrorPopup"

function App() {
	const [isOpenNav, setIsOpenNav] = useState(false)

	function toggleNav() {
		setIsOpenNav(!isOpenNav)
	}

	return (
		<ContextProvider>
			{isOpenNav && <LayerShadow />}
			<Navbar onToggleNav={toggleNav} isOpenNav={isOpenNav} />
			<Header />
			<Features />
			<Articles />
			<Footer />
			<ErrorPopup />
		</ContextProvider>
	)
}

export default App
