import styles from "./Navbar.module.css"
import closeIcon from "../../images/icon-close.svg"
import logo from "../../images/logo.svg"
import burgerIcon from "../../images/icon-hamburger.svg"
import MobileNav from "../MobileNav/MobileNav"

import Button from "../Button/Button"
function Navbar({onToggleNav, isOpenNav}) {
	const navItems = ["Home", "About", "Contact", "Blog", "Careers"]
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navbarBox}>
					<a href="#" className={styles.logo}>
						<img src={logo} alt="logo easybank" />
					</a>
					<nav className={styles.nav}>
						{navItems.map((item, i) => (
							<a href="#" key={i}>
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
						<Button>Request Invite</Button>
					</div>
				</div>
			</div>
			{isOpenNav && <MobileNav />}
		</>
	)
}

export default Navbar
