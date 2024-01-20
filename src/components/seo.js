import * as React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return <title>{title} | {data.site.siteMetadata.title}</title>
}

Seo.propTypes = {
    title: PropTypes.string
}

export default Seo