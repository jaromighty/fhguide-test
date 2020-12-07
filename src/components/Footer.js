import React from 'react'
import { Link } from 'gatsby'

import amazonSmile from '../img/amazon-smile.jpg'
import sorenson from '../img/sorensen-logo.png'
import miller from '../img/miller.png'
import ashton from '../img/ashton.jpg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                Media Resources
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                <em>Come, Follow Me</em> Companion
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                Trainers &amp; Consultants
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                TFHGA Marketplace
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                The Family History Guide Association
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                Quotes
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                What's New
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                Help
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="#" className="text-base text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            The Family History Guide is <a href="#" className="text-gray-200 hover:underline">approved by FamilySearch</a> as a training resource.
          </p>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-center text-base text-gray-400">
              &copy; 2020 The Family History Guide Association, a 501(c)(3) public charity organization. All rights reserved.
            </p>
            <p className="mt-2 text-center text-base text-gray-400">
              The Family History Guide is solely responsible for the content on this website.
            </p>
            <p className="mt-2 text-center text-base text-gray-400">
              It is independent from FamilySearch and The Church of Jesus Christ of Latter-day Saints, although both have approved the content of the site.
            </p>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 items-center md:grid-cols-6 lg:grid-cols-5">
                <a href="#">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img src={amazonSmile} alt="Amazon Smile" className="h-32" />
                  </div>
                </a>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img src={sorenson} alt="Sorenson Legacy Foundation" className="h-16" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img src={miller} alt="Larry H. and Gail Miller Family Foundation" className="h-24" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img src={ashton} alt="Ashton Family Foundation" className="h-24" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img src="https://widgets.guidestar.org/gximage2?o=9651601&l=v4" alt="Guidestar Platinum Seal of Transparency" className="h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
