import Link from "next/link";

function NavBar() {
	return (
		<>
			<nav>
				<ul className="nav-ul">
					<li>
						<Link href="/">
							<a>Surfboard</a>
						</Link>
					</li>
					<li>
						<Link href="/raw">
							<a>Raw</a>
						</Link>
					</li>
					<li>
						<Link href="/contentstack">
							<a>Contentstack</a>
						</Link>
					</li>
				</ul>
			</nav>
			<style jsx>
				{`
					.nav-ul {
						display: flex;
						justify-content: space-around;
					}
				`}
			</style>
		</>
	);
}

export default NavBar;
