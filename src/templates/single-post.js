import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import { Card,  CardBody, CardSubtitle, Badge } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify } from '../util/utilityFunction';
const SinglePost = ({ data }) => {
	const post = data.markdownRemark.frontmatter;
	return (
		<Layout pageTitle={post.title}>
			<SEO title={post.title} />
			<Card>
				<Img className="cart-image-top" fluid={post.image.childImageSharp.fluid} />
				<CardBody>
					<CardSubtitle>
						<span className="text-info">{post.date}</span>  by  {' '}
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
		</Layout>
	);
};

export const postQuery = graphql`
	query blogPostsBySlug($slug: String!) {
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
						fluid(maxWidth: 700, maxHeight: 300) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
export default SinglePost;
