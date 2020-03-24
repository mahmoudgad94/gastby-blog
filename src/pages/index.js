import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql, StaticQuery } from 'gatsby';
import Post from '../components/Post';

const IndexPage = () => (
	<Layout pageTitle="Home">
		<SEO title="Gad BLOG" keywords={[ 'blog', 'article', 'hmm' ]} />
		<StaticQuery
			query={indexQuery}
			render={(data) => {
				return (
					<div>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<Post
								key={node.id}
								title={node.frontmatter.title}
								author={node.frontmatter.author}
								slug={node.fields.slug}
								date={node.frontmatter.date}
								body={node.excerpt}
								fluid={node.frontmatter.image.childImageSharp.fluid}
								tags={node.frontmatter.tags}
							/>
						))}
					</div>
				);
			}}
		/>
	</Layout>
);
const indexQuery = graphql`
	{
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMM Do YYYY")
						author
						tags
						image {
							childImageSharp {
								fluid(maxWidth: 600, maxHeight: 400) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`;
export default IndexPage;
