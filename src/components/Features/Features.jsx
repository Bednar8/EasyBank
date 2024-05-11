import Feature from "../Feature/Feature"
import styles from "./Features.module.css"
import onlineIcon from "../../images/icon-online.svg"
import budgetingIcon from "../../images/icon-budgeting.svg"
import onboardingIcon from "../../images/icon-onboarding.svg"
import apiIcon from "../../images/icon-api.svg"
import {useEffect, useState} from "react"

function Features() {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024)

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 1024)
		}

		window.addEventListener("resize", handleResize)

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, []) // Dodaj pustą tablicę zależności, aby efekt uruchomił się tylko raz po zamontowaniu komponentu

	return (
		<main className={styles.main}>
			<div className={styles.features}>
				<div className={styles.featuresText}>
					{isWideScreen ? (
						<h2>Why choose Easybank ?</h2>
					) : (
						<h2>
							Why choose <br /> Easybank ?
						</h2>
					)}
					<p>
						We leverage Open Banking to turn your bank account into your
						financial hub. Control your finances like never before.
					</p>
				</div>
				<div className={styles.featuresList}>
					<Feature
						img={onlineIcon}
						heading="Online Banking"
						text="Our modern web and mobile applications allow you to keep track of your
				finances
				wherever you are in the world.
				"
					/>
					<Feature
						img={budgetingIcon}
						heading="Simple Budgeting"
						text="See exactly where your money goes each month. Receive notifications when
					you’re
					close to hitting your limits.
			"
					/>
					<Feature
						img={onboardingIcon}
						heading="Fast Onboarding"
						text="We don’t do branches. Open your account in minutes online and start taking
					control
					of your finances right away.
		"
					/>
					<Feature
						img={apiIcon}
						heading="Open API"
						text="Manage your savings, investments, pension, and much more from one account.
					Tracking
					your money has never been easier.
	"
					/>
				</div>
			</div>
		</main>
	)
}

export default Features
