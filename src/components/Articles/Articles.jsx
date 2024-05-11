import Article from "../Article/Article"
import styles from "./Articles.module.css"

import currencyImg from "../../images/image-currency.jpg"
import restaurantImg from "../../images/image-restaurant.jpg"
import planeImg from "../../images/image-plane.jpg"
import confettiImg from "../../images/image-confetti.jpg"

function Articles() {
	return (
		<main className={styles.main}>
			<div className={styles.articles}>
				<h2>Latest Articles</h2>
				<div className={styles.articlesList}>
					<Article
						img={currencyImg}
						author="Claire Robinson"
						title="Receive money in any currency with no fees"
						description="The world is getting smaller and we’re becoming more mobile. So why should you
					be
					forced to only receive money in a single …"
					/>
					<Article
						img={restaurantImg}
						author="Wilson Hutton"
						title="Treat yourself without worrying about money"
						description="Our simple budgeting feature allows you to separate out your spending and set
					realistic limits each month. That means you …"
					/>
					<Article
						img={planeImg}
						author="Wilson Hutton"
						title="Take your Easybank card wherever you go"
						description="We want you to enjoy your travels. This is why we don’t charge any fees on
					purchases
					while you’re abroad. We’ll even show you …"
					/>
					<Article
						img={confettiImg}
						author="Claire Robinson"
						title="Our invite-only Beta accounts are now live!"
						description="After a lot of hard work by the whole team, we’re excited to launch our closed
					beta.
					It’s easy to request an invite through the site ..."
					/>
				</div>
			</div>
		</main>
	)
}

export default Articles
