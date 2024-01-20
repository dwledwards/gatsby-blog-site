import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.title}</p>
            {children}
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.object,
    children: PropTypes.any
}

export const postQuery = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMM D, YYYY")
            }
        }
    }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost