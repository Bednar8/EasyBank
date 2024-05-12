import styles from "./Navbar.module.css"
import closeIcon from "../../images/icon-close.svg"
import logo from "../../images/logo.svg"
import burgerIcon from "../../images/icon-hamburger.svg"
import MobileNav from "../MobileNav/MobileNav"

import Button from "../Button/Button"
import {usePopup} from "../../context/Context"
function Navbar({onToggleNav, isOpenNav}) {
	const {setIsErrorPopupShow} = usePopup()

	const navItems = ["Home", "About", "Contact", "Blog", "Careers"]
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navbarBox}>
					<a
						href="#"
						className={styles.logo}
						onClick={() => setIsErrorPopupShow(true)}>
						<img src={logo} alt="logo easybank" />
					</a>
					<nav className={styles.nav}>
						{navItems.map((item, i) => (
							<a
								href="#"
								key={i}
								onClick={(e) => {
									e.preventDefault()
									setIsErrorPopupShow(true)
								}}>
								{item}
							</a>
						))}
					</nav>
					<button className={styles.burgerBtn} onClick={onToggleNav}>
						{isOpenNav ? (
							<img src={closeIcon} alt="close navigation" />
						) : (
							<img src={burgerIcon} alt="navigation button" />
						)}
					</button>
					<div className={styles.btn}>
						<Button onClick={() => setIsErrorPopupShow(true)}>
							Request Invite
						</Button>
					</div>
				</div>
			</div>
			{isOpenNav && <MobileNav />}
		</>
	)
}

export default Navbar
