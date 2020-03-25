import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import { Card, CardBody, CardSubtitle, Badge } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunction';
import authors from '../util/authors';

const SinglePost = ({ data, pageContext }) => {
	console.log(data);
	const post = data.markdownRemark.frontmatter;
	const author = authors.find((x) => x.name === post.author);
	const baseUrl = 'https://priceless-rosalind-2ed0ce.netlify.com/';
	const baseUrlForPost = baseUrl + pageContext.slug;
	return (
		<Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
			<SEO title={post.title} />
			<Card>
				<Img className="cart-image-top" fluid={post.image.childImageSharp.fluid} />
				<CardBody>
					<CardSubtitle>
						<span className="text-info">{post.date}</span> by {' '}
						<span className="text-info">{post.author}</span>
					</CardSubtitle>
					<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
					<ul className="post-tags">
						{post.tags.map((tag) => (
							<li key={tag}>
								<Link to={`/tag/${slugify(tag)}`}>
									<Badge color="primary">{tag}</Badge>
								</Link>
							</li>
						))}
					</ul>
				</CardBody>
			</Card>
			<h3 className="text-center">Share this post</h3>
			<div className="text-center social-share-links">
				<ul>
					<li>
						<a
							className="facebook"
							target="_blank"
							href={'https://www.facebook.com/sharer/sharer.php?u=' + baseUrlForPost}
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook-f fa-2x" />
						</a>
					</li>
					<li>
						<a
							className="twitter"
							target="_blank"
							href={
								'https://www.twitter.com/share?url=' +
								baseUrlForPost +
								'&text=' +
								post.title +
								'&via=twitterHandle'
							}
							rel="noopener noreferrer"
						>
							<i className="fab fa-twitter fa-2x" />
						</a>
					</li>
					<li>
						<a
							className="google"
							target="_blank"
							href={
								'https://www.plus.google.com/share?url=' +
								baseUrlForPost
							}
							rel="noopener noreferrer"
						>
							<i className="fab fa-google fa-2x" />
						</a>
					</li>
					<li>
						<a
							className="linkedin"
							target="_blank"
							href={
								'https://www.linkedin.com/shareArticle?url=' +
								baseUrlForPost
							}
							rel="noopener noreferrer"
						>
							<i className="fab fa-linkedin fa-2x" />
						</a>
					</li>
				</ul>
			</div>
		</Layout>
	);
};

export const postQuery = graphql`
	query blogPostBySlug($slug: String!, $imageUrl: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			frontmatter {
				title
				author
				date(formatString: "MMM Do YYYY")
				tags
				image {
					childImageSharp {
						fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		file(relativePath: { eq: $imageUrl }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
export default SinglePost;
