import React, { Component } from "react";
import styles from "../styles/Contentstack.module.css";

export class CS extends Component {
render() {
const { header, main, footer } = this.props.cs;
return (
<div className={styles.container}>
	{/* {console.log(this.props.cs)} */}
	<header className={styles.headerContainer}>
		<div className={styles.logo}>
			<a href="/">
				<img src={header[0].logo.url} alt="logo" />
			</a>
		</div>
		<div className={styles.navLinks}>
			<ul>
				{header[0].navigation.map((link) => {
				return (
				<li key={link.title}>
					<a href={link.href}>{link.title}</a>
				</li>
				);
				})}
			</ul>
		</div>
		<div className={styles.hamburger}>
			<span className={styles.hamLine1}></span>
			<span className={styles.hamLine2}></span>
			<span className={styles.hamLine3}></span>
		</div>
	</header>
	<main className={styles.mainContainer}>
		<section className={styles.bannerContainer} style={{
							backgroundImage: `url(${main[0].banner_section.banner_image.url})`,
						}}>
			<div className={styles.banner}>
				<h1 className={styles.bannerTitle}>
					{main[0].banner_section.banner_header}
				</h1>
				<p className={styles.bannerContent}>
					{main[0].banner_section.banner_content}
				</p>
				<div className={styles.cta}>
					<a href={main[0].banner_section.secondary_cta.link}>
						{main[0].banner_section.secondary_cta.text}
					</a>
				</div>
			</div>
		</section>
	</main>
	<footer className={styles.footerContainer}>
		<div className={styles.footerBottom}>
			<div className={styles.footerLogo}>
				<img src={footer[0].footer_logo} alt="footer-logo" />
			</div>
			<ul>
				{footer[0].social_links.map((link) => {
				return (
				<li key={link.title}>
					<a href={link.link}>
						<img src={link.url} alt={link.title} />
					</a>
				</li>
				);
				})}
				{footer[0].bottom_links.map((link) => {
				return (
				<li key={link.label}>
					<a href={link.link}>{link.label}</a>
				</li>
				);
				})}
			</ul>
		</div>
	</footer>
</div>
);
}
}

export default CS;