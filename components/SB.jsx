import React, { Component } from "react";
import styles from "../styles/Surfboard.module.css";

export class SB extends Component {
render() {
const { header, main, footer } = this.props.surfboard;
return (
<div className={styles.container}>
	{console.log(this.props.surfboard)}

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
							backgroundImage: `url(${main[0].banner_section.url})`,
						}}>

			<div className={styles.banner}>
				<h1 className={styles.bannerTitle}>
					{main[0].banner_section.title}
				</h1>

				<p className={styles.bannerContent}>
					{main[0].banner_section.description}
				</p>
			</div>
		</section>
		<section className={styles.philosopyContainer}>

			<div className={styles.philosophy}>
				<div className={styles.philosophyTitle}>
					{main[0].philosophy_section.title}
				</div>

				<div className={styles.philosophyRow}>
					{main[0].philosophy_section.philosophy.map((link) => {
					return (

					<div className={styles.philosophy_card} key={link.title}>

						<div className={styles.philosophyImg}>
							<img src={link.url} alt={link.title} />
						</div>

						<div className={styles.philosophyHeading}>
							<h4>{link.title}</h4>
						</div>

						<div className={styles.philosophyContent}>
							<p>{link.description}</p>
						</div>
					</div>
					);
					})}

				</div>
			</div>

		</section>
	</main>
	<footer className={styles.footerContainer}>
		<hr />
		<div className={styles.footer}>
			<div className={styles.footerLinks}>
				<div className={styles.footerLogo}>
					<a href="/">
						<img src={header[0].logo.url} alt="logo" />
					</a>
				</div>
				<div className={styles.nav1}>
					<ul>
						{footer[0].footer_links[0].nav_1.map((link) => {
						return (
						<li key={link.title}>
							<a href={link.href}>{link.title}</a>
						</li>
						);
						})}
					</ul>
				</div>
				<div className={styles.nav2}>
					<ul>
						{footer[0].footer_links[0].nav_2.map((link) => {
						return (
						<li key={link.title}>
							<a href={link.href}>{link.title}</a>
						</li>
						);
						})}
					</ul>
				</div>
				<div className={styles.mail}>
					<p>{footer[0].contact_mail}</p>
				</div>
				<div className={styles.socialMedia}>
					<ul>
						{footer[0].social_media_section.social_media_icons.map(
						(link) => {
						return (
						<li key={link.title}>
							<a href={link.href}>
								<img src={link.url} alt={link.title} />
							</a>
						</li>
						);
						}
						)}
					</ul>
				</div>
			</div>
			<hr />
		</div>
	</footer>
</div>
);
}
}

export default SB;