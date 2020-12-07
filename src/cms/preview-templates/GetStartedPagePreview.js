import React from 'react'
import PropTypes from 'prop-types'
import { GetStartedTemplate } from '../../templates/get-started'

const GetStartedPagePreview = ({ entry, widgetFor }) => (
    <GetStartedTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
)

GetStartedPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default GetStartedPagePreview