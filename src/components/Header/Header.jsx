import styles from "./Header.module.css"
import imageMockups from "../../images/image-mockups.png"

import {usePopup} from "../../context/Context"
// import bgDesktop from "../../images/bg-intro-desktop.svg"
import Button from "../Button/Button"

function Header() {
	const {isErrorPopupShow} = usePopup()
	return (
		<>
			<header className={styles.header}>
				<div className={styles.headerImg}>
					<img src={imageMockups} alt="" />
				</div>
				<div className={styles.headerText}>
					<h1>Next Generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<Button>Request Invite</Button>
				</div>
			</header>
			<header className={styles.headerDesktop}>
				<div className={styles.headerDesktopText}>
					<h1>Next Generation digital banking</h1>
					<p>
						Take your financial life online. Your Easybank account will be a
						one-stop-shop for spending, saving, budgeting, investing, and much
						more.
					</p>
					<Button>Request Invite</Button>
				</div>
				<div className={styles.headerDesktopBoxImg}>
					<div className={styles.headerDesktopMockup}>
						<div>
							<img src={imageMockups} alt="" />
						</div>
					</div>
				</div>
				{isErrorPopupShow && <p>hello</p>}
			</header>
		</>
	)
}

export default Header
