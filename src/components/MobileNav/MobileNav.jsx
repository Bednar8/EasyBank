import {usePopup} from "../../context/Context"
import styles from "./MobileNav.module.css"

function MobileNav() {
	const navItems = ["Home", "About", "Contact", "Blog", "Careers"]
	const {setIsErrorPopupShow} = usePopup()

	return (
		<nav className={styles.mobileNav}>
			<ul>
				{navItems.map((item, i) => (
					<li key={i}>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault()
								setIsErrorPopupShow(true)
							}}>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MobileNav
