import styles from "./Footer.module.css"

import logoImg from "../../images/logo-white.svg"
import fbIcon from "../../images/icon-facebook.svg"
import youtubeIcon from "../../images/icon-youtube.svg"
import twitterIcon from "../../images/icon-twitter.svg"
import pinterestIcon from "../../images/icon-pinterest.svg"
import instagramIcon from "../../images/icon-instagram.svg"
import Button from "../Button/Button"

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerWrapperNav}>
					<div className={styles.footerIconBox}>
						<div className={styles.footerLogoBox}>
							<img src={logoImg} alt="" />
						</div>
						<div className={styles.socials}>
							<img src={fbIcon} alt="" />
							<img src={youtubeIcon} alt="" />
							<img src={twitterIcon} alt="" />
							<img src={pinterestIcon} alt="" />
							<img src={instagramIcon} alt="" />
						</div>
					</div>
					<nav>
						<ul>
							<div>
								<li>About us</li>
								<li>Contact</li>
								<li>Blog</li>
							</div>
							<div>
								<li>Careers</li>
								<li>Support</li>
								<li>Privacy Policy</li>
							</div>
						</ul>
					</nav>
				</div>

				<div className={styles.footerBtnBox}>
					<Button>Request Invite</Button>
					<p className={styles.copy}>&copy; Easybank. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
