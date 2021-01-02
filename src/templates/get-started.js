import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GetStartedTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <div className="bg-gray-50 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
                        {title}
                    </h2>
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
                    <div className="relative col-span-2 z-10">
                        <PageContent className="prose prose-cyan text-gray-500 mx-auto lg:max-w-none" content={content} />
                    </div>
                    <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                        <svg className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
                        </svg>
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