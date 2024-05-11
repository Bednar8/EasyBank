import styles from "./MobileNav.module.css"

function MobileNav() {
	return (
		<nav className={styles.mobileNav}>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Careers</a>
				</li>
			</ul>
		</nav>
	)
}

export default MobileNav
