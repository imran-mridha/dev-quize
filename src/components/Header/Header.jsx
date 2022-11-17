import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="p-4 text-gray-100 border-b border-violet-500">
      <div className="w-11/12 mx-auto">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="Dev Quiz"
            title="Dev Quiz"
            className="inline-flex items-center"
          >
            <span className="text-4xl font-semibold tracking-wide text-gray-100 uppercase">
              Dev<span className='text-violet-500'>Quiz</span>
            </span>
          </NavLink>
          <ul className=" items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/topics"
                aria-label="Topics"
                title="Topics"
                className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Topics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Statistics"
                title="Statistics"
                className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                aria-label="Contact"
                title="Contact"
                className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="lg:hidden z-50">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full ">
                <div className="p-5 bg-gray-900 border border-violet-500 rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Dev Quiz"
                        title="Dev Quiz"
                        className="inline-flex items-center"
                      >
                        <span className="text-4xl font-semibold tracking-wide text-gray-100 uppercase">
                          Dev<span className='text-violet-500'>Quiz</span>
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          aria-label="Home"
                          title="Home"
                          className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/topics"
                          aria-label="Topics"
                          title="Topics"
                          className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                          }
                        >
                          Topics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/statistics"
                          aria-label="Statistics"
                          title="Statistics"
                          className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                          }
                        >
                          Statistics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                          }
                        >
                          Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/contact"
                          aria-label="Contact"
                          title="Contact"
                          className={({ isActive }) => isActive ? `text-violet-500` : `font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400`
                          }
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;