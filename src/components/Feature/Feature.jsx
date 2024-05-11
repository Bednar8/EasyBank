import styles from "./Feature.module.css"

function Feature({img, heading, text}) {
	return (
		<div className={styles.feature}>
			<img src={img} alt="" />
			<h3>{heading}</h3>
			<p>{text}</p>
		</div>
	)
}

export default Feature
