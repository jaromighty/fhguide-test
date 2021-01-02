import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"

export const FamilySearchTemplate = ({ title, category, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <section className="bg-gray-50 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{category}</h2>
                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h3>
                </div>
            </div>
        </section>
    )
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