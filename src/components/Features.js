import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    {gridItems.map((item) => (
      <div key={item.text} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-900">
              {item.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {item.text}
            </p>
          </div>
          <a href="#" class="mt-6 block w-full bg-gradient-to-r from-cyan-600 to-green-400 rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-green-600">Get started</a>
        </div>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
