import React from 'react';

const Footer = () => (
	<div className="site-footer">
		<h4 className="text-center">Blog</h4>
		<p className="text-center">Follow us on social media</p>
		<div className="footer-social-links">
			<ul className="social-links-list">
				<li>
					<a
						target="_blank"
						href="https://www.facebook.com/whatever"
						rel="noopener noreferrer"
						className="facebook"
					>
						<i className="fab fa-facebook-f fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.twitter.com/whatever"
						rel="noopener noreferrer"
						className="twitter"
					>
						<i className="fab fa-twitter fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.instagram.com/whatever"
						rel="noopener noreferrer"
						className="instagram"
					>
						<i className="fab fa-instagram fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.google.com/whatever"
						rel="noopener noreferrer"
						className="google"
					>
						<i className="fab fa-google fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/whatever"
						rel="noopener noreferrer"
						className="linkedin"
					>
						<i className="fab fa-linkedin fa-2x" />
					</a>
				</li>
			</ul>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.keyplanz.com.eg">KeyPlanz</a>
		</div>
	</div>
);
export default Footer;
