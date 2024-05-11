import styles from "./ErrorPopup.module.css"

function ErrorPopup() {
	return (
		<div className={styles.errorPopup}>
			<div>
				<p>✋😉</p>
				<p>
					Hey! This project is only a landing page and {`doesn't`} have any
					interactive features.
				</p>
			</div>
		</div>
	)
}

export default ErrorPopup
