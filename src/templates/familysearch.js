import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import FamilySearchNav from "../components/navigation/familysearch"

export const FamilySearchTemplate = ({ title, category, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (<>
        <div className="w-full max-w-8xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="mt-16 lg:flex">
                <div className="fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-transparent lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block hidden">
                    <div className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-18 mr-24 lg:mr-0">
                        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{title}</h2>
                        <FamilySearchNav />
                    </div>
                </div>
                <div className="min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none">
                        <div className="max-w-3xl">
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-tight lg:inline">
                                Welcome to
                                <span className="text-green-700 px-3">{title}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

FamilySearchTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const FamilySearchPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <FamilySearchTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                category={post.frontmatter.category}
                content={post.html}
            />
        </Layout>
    )
}

FamilySearchPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default FamilySearchPage

export const familySearchPageQuery = graphql`
    query FamilySearchPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                category
            }
        }
    }
`