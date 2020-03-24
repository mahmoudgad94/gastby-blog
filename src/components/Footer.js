import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
						<li className="fab fa-facebook-f fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.twitter.com/whatever"
						rel="noopener noreferrer"
						className="twitter"
					>
						<li className="fab fa-twitter fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.instagram.com/whatever"
						rel="noopener noreferrer"
						className="instagram"
					>
						<li className="fab fa-instagram fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.google.com/whatever"
						rel="noopener noreferrer"
						className="google"
					>
						<li className="fab fa-google fa-2x" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/whatever"
						rel="noopener noreferrer"
						className="linkedin"
					>
						<li className="fab fa-linkedin fa-2x" />
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
