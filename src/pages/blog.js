import * as React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

BlogPage.propTypes = {
    data: PropTypes.any
}

export const query = graphql`
    query {
        allFile {
          nodes {
            name
          }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage