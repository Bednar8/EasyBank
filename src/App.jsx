import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import {useState} from "react"
import LayerShadow from "./components/LayerShadow/LayerShadow"
import Features from "./components/Features/Features"
import Articles from "./components/Articles/Articles"
import Footer from "./components/Footer/Footer"

function App() {
	const [isOpenNav, setIsOpenNav] = useState(false)

	function toggleNav() {
		setIsOpenNav(!isOpenNav)
	}
	return (
		<>
			{isOpenNav && <LayerShadow />}
			<Navbar onToggleNav={toggleNav} isOpenNav={isOpenNav} />
			<Header />
			<Features />
			<Articles />
			<Footer />
		</>
	)
}

export default App
