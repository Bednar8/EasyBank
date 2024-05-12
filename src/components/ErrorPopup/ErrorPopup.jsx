import {useEffect, useState} from "react"
import styles from "./ErrorPopup.module.css"
import {usePopup} from "../../context/Context"

function ErrorPopup() {
	const {timer, isErrorPopupShow} = usePopup()

	return (
		<div
			className={`${styles.errorPopup} ${isErrorPopupShow && styles.active}`}>
			<div>
				<p>✋😉</p>
				<p>
					Hey! This project is only a landing page and {`doesn't`} have any
					interactive features.
				</p>
				<p className={styles.timer}>
					{window.innerWidth > 1024 ? `Wait ${timer}s` : `${timer}s`}
				</p>
			</div>
		</div>
	)
}

export default ErrorPopup
