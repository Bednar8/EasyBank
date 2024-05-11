import styles from "./Article.module.css"

function Article({img, author, title, description}) {
	return (
		<div className={styles.article}>
			<div className={styles.articleImg}>
				<img src={img} alt="" />
			</div>

			<div className={styles.articleText}>
				<p className={styles.author}>
					By <span>{author}</span>
				</p>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Article
