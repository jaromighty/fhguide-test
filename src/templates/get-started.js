import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GetStartedTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div className="bg-gray-50 overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
                <div className="mx-auto text-base max-w-prose lg:max-w-none">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </h2>
                </div>
                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="relative lg:row-start-1 lg:col-start-2">
                        {/* Image column */}
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <div className="text-base max-w-prose mx-auto lg:max-w-none">
                            <PageContent content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

GetStartedTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const GetStartedPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <GetStartedTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

GetStartedPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default GetStartedPage

export const getStartedPageQuery = graphql`
    query GetStartedPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`