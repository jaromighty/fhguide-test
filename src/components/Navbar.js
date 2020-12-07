import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/fh-guide-cyan-600.svg'
import { Transition } from '@headlessui/react'

const Navbar = () => {
    const [introIsOpen, setIntroIsOpen] = useState(false);
    const [websiteIsOpen, setWebsiteIsOpen] = useState(false);
    const [categoryOneIsOpen, setCategoryOneIsOpen] = useState(false);
    const [categoryTwoIsOpen, setCategoryTwoIsOpen] = useState(false);
    const [moreIsOpen, setMoreIsOpen] = useState(false);
    return (
        <div className="fixed w-full z-50">
            <nav className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src={logo} alt="The Family History Guide" className="h-12 w-auto" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-2">
                                    <div className="relative" onMouseEnter={() => setIntroIsOpen(true)} onMouseLeave={() => setIntroIsOpen(false)}>
                                        <button className="px-3 py-2 group rounded-md text-gray-500 inline-flex items-center text-sm font-medium hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700">
                                            <span>Intro</span>
                                            <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <Transition
                                            show={introIsOpen}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <div className="absolute -ml-0 pt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/3">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link to="/get-started" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Get Started
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <div className="relative" onMouseEnter={() => setWebsiteIsOpen(true)} onMouseLeave={() => setWebsiteIsOpen(false)}>
                                        <button className="px-3 py-2 group rounded-md text-gray-500 inline-flex items-center text-sm font-medium hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700">
                                            <span>Partners</span>
                                            <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <Transition
                                            show={websiteIsOpen}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <div className="absolute -ml-4 pt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="none" aria-hidden="true">
                                                                <g stroke="currentColor" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <g>
                                                                        <g transform="translate(4.000000, 2.000000)">
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.643678161" x="4.3908046" y="0" width="2.3908046" height="2.3908046"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.597701149" x="1.40229885" y="1.93103448" width="1.70114943" height="1.70114943"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.5" x="10.4597701" y="7.14942529" width="1.2183908" height="1.2183908"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.643678161" x="4.3908046" y="3.6091954" width="2.3908046" height="2.3908046"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.827586207" x="8.16091954" y="3.08045977" width="2.7816092" height="2.7816092"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.827586207" x="0" y="5.01149425" width="2.98850575" height="2.98850575"></rect>
                                                                            <rect id="Rectangle" stroke="currentColor" strokeWidth="0.827586207" x="6.02298851" y="7.35632184" width="2.98850575" height="2.98850575"></rect>
                                                                            <path d="M4.65517241,6.26436782 C4.48253317,6.52687091 4.3599278,6.72610463 4.28735632,6.86206897 C4.09451691,7.22335803 3.94533421,7.59568397 3.86206897,7.81609195 C3.77288951,8.05215521 3.67179513,8.36454367 3.5862069,8.75862069 C3.55991748,8.879666 3.52543472,9.08656255 3.48275862,9.37931034 C3.2476153,9.23342341 3.07137009,9.10315521 2.95402299,8.98850575 C2.83667589,8.87385628 2.67958777,8.67079115 2.48275862,8.37931034 L1.95402299,8.37931034 C2.16350086,8.8425078 2.35507174,9.18733539 2.52873563,9.4137931 C2.70239953,9.64025082 2.98975585,9.91994431 3.3908046,10.2528736 C3.36781609,11.2720307 3.52490421,12.2375479 3.86206897,13.1494253 C4.19923372,14.0613027 4.70498084,14.9003831 5.37931034,15.6666667 L7.54022989,15.6666667 C6.92720307,15.183908 6.45210728,14.7279693 6.11494253,14.2988506 C5.77777778,13.8697318 5.4559387,13.3256705 5.14942529,12.6666667 C5.53256705,12.4137931 5.86590038,12.1072797 6.14942529,11.7471264 C6.43295019,11.3869732 6.61685824,11.0421456 6.70114943,10.7126437 L6.2183908,10.7126437 C6.0651341,10.9885057 5.88122605,11.2145594 5.66666667,11.3908046 C5.45210728,11.5670498 5.18390805,11.7126437 4.86206897,11.8275862 C4.61685824,10.7471264 4.53639847,9.78927203 4.62068966,8.95402299 C4.70498084,8.11877395 5.01915709,7.22222222 5.56321839,6.26436782 L4.65517241,6.26436782 Z" id="Path-2" fill="#000000"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        FamilySearch
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Start learning to use FamilySearch.
                                                                </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                                                                <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
                                                                    <g id="ancestry-icon">
                                                                        <path d="M13.6966292,3.46816479 C15.411985,4.7340824 16.670412,6.65168539 17.4719101,9.22097378 L18.1685393,9.22097378 L18.1685393,2.00749064 L19.988764,2.00749064 L19.988764,17.9400749 L18.1685393,17.9400749 L18.1685393,10.7940075 L17.5617978,10.7940075 C16.9026217,13.7153558 15.7003745,15.7715356 13.9550562,16.9625468 C12.2682118,17.956825 10.1066617,18.3436495 7.68539326,18.0636704 C7.53625474,18.046425 7.3452435,18.0052265 7.11235955,17.9400749 C7.082397,17.7977528 7.10486891,17.6104869 7.17977528,17.3782772 C7.60674157,15.670412 8.16853933,14.4569288 8.75280899,13.5243446 C9.53183521,12.4531835 10.6891386,11.5430712 12.2247191,10.7940075 C11.5805243,10.7490637 11.1535581,10.7340824 10.9438202,10.7490637 C10.7340824,10.7640449 10.6104869,10.7790262 10.5730337,10.7940075 C10.4389476,10.8746013 10.3415693,10.9382717 10.2808989,10.9850187 C9.33707865,11.7490637 8.5505618,12.164794 7.92134831,12.3782772 C6.64743323,12.849739 5.51275236,12.7052118 4.7752809,12.6479401 C4.34920495,12.5720635 3.65305744,12.4323174 2.85393258,12.1423221 C2.11468862,11.874057 1.290854,11.4833682 0.426966292,10.7490637 C0.231366529,10.5969586 0.0927897499,10.3385317 0.0112359551,9.97378277 C0.0486891386,9.60674157 0.307116105,9.27715356 0.786516854,8.98501873 C1.44729704,8.50310677 2.31460674,8.23220974 2.76404494,8.07490637 C4.34831461,7.56928839 5.37078652,7.44569288 6.19101124,7.44569288 C7.56928839,7.47565543 9.05243446,8.11235955 10.6404494,9.35580524 L12.1348315,9.43445693 C11.0262172,9.26966292 9.8988764,8.51310861 8.75280899,7.16479401 C8.21348315,6.4906367 7.64450291,5.37154176 7.37078652,4.1423221 C7.14606742,2.8164794 7.14606742,2.10486891 7.37078652,2.00749064 C10.2022472,1.93258427 12.3108614,2.41947566 13.6966292,3.46816479 Z M12.2921348,11.9513109 C11.6629213,12.5018727 11.0224719,13.4456929 10.247191,14.7041199 C9.87265918,15.3632959 9.72284644,15.8277154 9.79775281,16.0973783 C9.82022472,16.164794 9.97003745,16.2247191 10.247191,16.2771536 C11.1460674,16.4569288 11.8539326,16.4007491 12.6516854,16.0973783 C13.5168539,15.6254682 13.9158027,15.1753284 14.3932584,14.2209738 C14.8202247,13.1535581 14.9550562,13.0411985 15.2359551,12.1310861 C15.3032638,11.9130057 15.3219904,11.5347286 15.2921348,10.9962547 C14.2509363,10.8314607 13.2509363,11.1498127 12.2921348,11.9513109 Z M4.3258427,8.71535581 C3.7340824,8.97003745 3.43820225,9.31460674 3.43820225,9.74906367 C3.46067416,9.88389513 3.65917603,10.1273408 4.03370787,10.4794007 C4.74157303,11.0299625 5.42252904,11.2247583 5.84269663,11.2659176 C6.43820225,11.2659176 6.60674157,11.3333333 7.86516854,11.0636704 C8.44194757,10.8689139 8.80149813,10.6104869 8.94382022,10.2883895 C8.66019812,9.83040226 8.4130071,9.51579552 8.20224719,9.34456929 C7.59141366,8.84831401 6.88764045,8.55805243 6.3258427,8.52434457 C5.85940166,8.49635811 4.92134831,8.46816479 4.3258427,8.71535581 Z M11.505618,3.83895131 C10.9737828,3.64419476 10.505618,3.61423221 10.1011236,3.74906367 C10.1423612,4.24750267 10.1835597,4.60330791 10.2247191,4.8164794 C10.4716116,6.09517645 10.9101124,6.90636704 11.4044944,7.51310861 C11.6179775,7.80524345 12.3820225,8.62546816 13.4606742,8.96254682 C14.3520599,9.23970037 14.9475655,9.26217228 15.247191,9.02996255 C15.3595506,8.7752809 15.2284644,8.17602996 14.8539326,7.23220974 C14.5274779,6.32677339 13.8764045,5.51310861 13.5730337,5.20973783 C13.158461,4.78430299 12.4269663,4.19850187 11.505618,3.83895131 Z" id="Combined-Shape"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Ancestry
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Something about Ancestry.
                                                                </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <g id="myheritage-icon" fill="currentColor">
                                                                        <path d="M8.11320755,2 C8.43243203,2 8.74735047,2.01843638 9.05695617,2.05430245 C5.02007043,2.5218712 1.88679245,5.95163123 1.88679245,10.1132075 C1.88679245,14.2747839 5.02007043,17.7045439 9.05625137,18.1721126 C8.74735047,18.2079787 8.43243203,18.2264151 8.11320755,18.2264151 C3.63240675,18.2264151 0,14.5940083 0,10.1132075 C0,5.63240675 3.63240675,2 8.11320755,2 Z M11.8867925,2 C16.3675933,2 20,5.63240675 20,10.1132075 C20,14.5940083 16.3675933,18.2264151 11.8867925,18.2264151 C11.567568,18.2264151 11.2526495,18.2079787 10.9430438,18.1721126 C14.9798503,17.7046307 18.1132075,14.2748365 18.1132075,10.1132075 C18.1132075,5.95157859 14.9798503,2.52178443 10.9435955,2.05428471 C11.2526495,2.01843638 11.567568,2 11.8867925,2 Z M9.97903564,2.35639413 C14.2630054,2.35639413 17.7358491,5.82923779 17.7358491,10.1132075 C17.7358491,14.1263398 14.6882391,17.4276646 10.7811496,17.8290516 C10.8830908,17.8076391 10.9938352,17.7827387 11.1111111,17.754717 C10.7127883,17.5870021 10.4751922,17.0139762 10.3983229,16.0356394 C10.3311557,15.5112644 10.3474179,14.7355279 10.4471095,13.7084301 L10.4795199,13.3927599 L10.51011,13.1191715 L11.0122265,13.1591408 C11.3639664,13.1484266 11.7084418,13.0074324 12.0456528,12.7361582 C12.0731878,12.7152933 12.0894331,12.7152933 12.0943888,12.7361582 C12.190801,13.1420888 12.2436165,13.3889298 12.9088255,13.2771063 C13.1858014,13.1356261 13.342412,12.9628697 13.5389642,12.8164226 C14.1409253,12.3679136 14.2915042,11.8115187 13.9907012,11.1472378 C14.4236097,10.6352897 14.640064,10.2378131 14.640064,9.95480788 C14.6854619,9.69143879 14.5840932,9.42126332 14.335958,9.14428148 C14.335958,8.63921236 14.154144,8.15192064 13.7905161,7.68240632 C13.3102466,7.04067304 12.9156362,6.71980641 12.6066848,6.71980641 C12.5633776,6.25775791 12.3763669,5.89174829 12.0456528,5.62177755 C11.7208621,5.27548344 11.3629564,5.13946759 10.9719356,5.21373002 C10.7247991,4.94797672 10.521625,4.81510007 10.3624132,4.81510007 C9.66215442,4.77003898 9.57580503,4.9101972 9.40517721,4.9101972 C9.108264,4.9101972 8.89116822,4.98678672 8.75388987,5.13996577 C8.46596974,5.12218267 8.26492479,5.13720986 8.15075504,5.18504733 C8.00192577,5.24740725 7.83620741,5.51759462 7.75888119,5.55462608 C7.59445633,5.633369 7.49580768,5.67822204 7.39263954,5.74938581 C7.13295077,5.92851508 7.01499894,6.11972616 7.03878407,6.32301903 C6.85163347,6.3721679 6.64332744,6.55084949 6.41386596,6.85906381 C6.30182973,7.00377821 6.20412571,7.22036216 6.1207539,7.50881568 C5.77616587,7.80593362 5.5253954,8.19924741 5.3684425,8.68875704 C5.24768325,9.02271377 5.27024792,9.26049753 5.4361365,9.40210831 C5.42953868,9.46156866 5.40697401,9.53427514 5.3684425,9.62022774 C5.23887906,9.96521841 5.03559233,10.1458825 5.06375295,10.3793157 C5.15048685,10.8389757 5.42255266,10.7883152 5.60387186,11.0387104 C5.60387186,11.0822974 5.48862929,11.2050689 5.3684425,11.3061715 C5.17161499,11.5015232 5.16008687,11.6549771 5.21167043,11.8659223 C5.4027962,12.4420737 5.62332121,12.4254854 6.01044533,12.6313057 C6.01044533,12.6708391 6.28247019,13.1591408 6.70863633,13.2771063 C7.31832252,13.4189433 7.67092915,13.1755147 7.79807677,13.1591408 C7.87897887,13.1755147 7.87897887,13.1755147 7.92463067,13.2023695 C8.01643376,13.256373 8.0769089,13.3510752 8.21648364,13.3510752 C8.34635417,13.3288006 8.54604512,13.1528578 8.70725236,13.0456278 C8.75547549,13.0135513 8.7985507,12.9969444 8.83647799,12.9958071 C9.0201967,13.0084438 9.20613449,13.021553 9.39540365,13.0348668 C9.53465843,14.2205754 9.56847566,15.1195052 9.49685535,15.7316562 C9.42697414,16.7728861 9.20684836,17.4472397 8.83647799,17.754717 C8.92501624,17.7787424 9.00990035,17.8004734 9.09113032,17.81991 C5.22464262,17.3784908 2.22222222,14.0964756 2.22222222,10.1132075 C2.22222222,5.82923779 5.69506588,2.35639413 9.97903564,2.35639413 Z" id="Combined-Shape"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        MyHeritage
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Something about MyHeritage.
                                                                </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 h-6 w-6 text-cyan-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <g id="findmypast-icon" fill="currentColor">
                                                                        <path d="M7.22860421,4.2401444 C7.05919929,4.2401444 6.30656421,4.9661799 4.97069899,6.4182509 C2.84440208,8.63840939 1.59505776,9.74848864 1.22266604,9.74848864 C0.883208545,9.62866951 0.672557057,9.48571692 0.590711582,9.31963087 C0.508866106,9.15354482 0.482405084,8.8153336 0.511328516,8.30499721 C1.07392581,6.39964904 1.51205371,5.08593874 1.82571222,4.36386632 C2.13937073,3.6417939 2.60554018,2.87372368 3.22422056,2.05965565 C3.35188065,1.98011478 3.46761575,1.98011478 3.57142588,2.05965565 C3.675236,2.13919651 3.70484108,2.25055832 3.6602411,2.39374108 C3.10052601,3.01515469 2.59193735,3.9484982 2.13447513,5.19377161 C1.6770129,6.43904503 1.40721925,7.62456236 1.32509416,8.75032361 C1.73633617,8.54872956 2.68425936,7.59003646 4.16886375,5.87424432 C5.0741468,4.86732565 6.09406029,3.86979 7.22860421,2.88163735 C7.84784877,2.44908351 8.30582668,2.32491276 8.60253796,2.5091251 C8.89924925,2.69333745 8.89924925,3.10184247 8.60253796,3.73464016 C8.11250771,4.77216419 7.40764523,6.03434526 6.48795053,7.52118338 C6.07466206,8.32172054 5.87097848,8.81938751 5.87689976,9.01418429 C5.9675574,9.04446264 6.28706106,8.80806695 6.83541076,8.30499721 C7.38376046,7.80192747 8.25852072,6.94267556 9.45969153,5.72724146 C9.77502795,5.52201533 10.0200091,5.47896211 10.1946349,5.59808179 C10.3692608,5.71720147 10.391796,5.94273891 10.2622406,6.27469412 L9.33967371,7.90058345 C9.13954205,8.54258403 9.17954799,8.96013472 9.45969153,9.15323551 C9.9496538,9.36304661 10.3697161,9.31669621 10.7198786,9.01418429 C11.2707577,8.61372937 11.6947119,8.27893616 11.9917411,8.00980469 C12.2887703,7.74067321 12.720848,7.29983512 13.2879743,6.6872904 C13.5409814,5.92577223 13.7430334,5.37609269 13.8941305,5.03825176 C14.0452276,4.70041084 14.2833598,4.26587364 14.6085271,3.73464016 C14.7487331,3.45709894 14.9092837,3.36356952 15.0901789,3.4540519 C15.2710741,3.54453428 15.2710741,3.71836987 15.0901789,3.97555869 C14.8058304,4.46954828 14.6008382,4.85274615 14.4752023,5.1251523 C14.3495664,5.39755845 14.2202864,5.7391359 14.0873623,6.14988465 C14.2233934,6.24789793 14.2799014,6.33735334 14.2568861,6.4182509 C14.2338709,6.49914847 14.1129524,6.63609363 13.8941305,6.82908639 C13.7780555,7.4522706 13.720018,7.97172313 13.720018,8.38744396 C13.720018,9.0089019 13.7780555,9.40587542 13.8941305,9.57836453 C13.9586589,9.62680842 14.0539322,9.62680842 14.1799503,9.57836453 C14.3059685,9.52992063 14.5027181,9.41766116 14.7701994,9.24158611 L16.9678918,6.14988465 L17.7318454,5.1251523 L18.3058304,4.4969619 C18.4855682,4.32575024 18.6600376,4.2401444 18.8292385,4.2401444 C18.9984395,4.2401444 19.1446804,4.32575024 19.2679613,4.4969619 C19.4093093,4.62845418 19.4860241,4.76572733 19.4981059,4.90878136 C19.5101876,5.05183538 19.4644714,5.28160219 19.3609572,5.59808179 C18.6575393,7.82500726 17.765514,9.98568697 16.6848811,12.0801209 C15.8060387,13.8189431 15.1139207,15.4954037 14.6085271,17.1095026 L14.6085271,17.8603273 C14.6085271,17.9534424 14.5245894,18 14.356714,18 C14.1888387,18 14.0990547,17.9534424 14.0873623,17.8603273 C14.0353239,17.736404 14.0093048,17.6212617 14.0093048,17.5149003 C14.0093048,17.4085389 14.0661866,17.0759899 14.1799503,16.5172531 C14.8389097,14.2952303 15.7340983,11.9559992 16.8655163,9.49955991 C17.4430691,8.24389283 17.836126,7.21678983 18.0446871,6.4182509 C17.3268235,7.2631575 16.8197814,7.96830511 16.5235607,8.53369373 C16.1830667,8.97405273 15.7490176,9.48601323 15.2214133,10.0695752 C14.7239393,10.3613497 14.2815117,10.507237 13.8941305,10.507237 C13.2827229,10.2693912 12.977019,10.0164751 12.977019,9.74848864 C12.9154919,9.51218909 12.892175,9.26742098 12.9070681,9.01418429 C12.9219613,8.76094761 12.9845874,8.33732045 13.0949465,7.74330281 C12.4343818,8.38729396 11.8789212,8.88672173 11.4285649,9.24158611 C10.9782086,9.59645049 10.6524848,9.79136387 10.4513935,9.82632624 C9.89119151,9.93819307 9.49782811,9.96308591 9.27130333,9.90100477 C9.04477854,9.83892363 8.82185675,9.64513233 8.60253796,9.31963087 C8.54954794,9.0730847 8.52305293,8.85602325 8.52305293,8.66844653 C8.52305293,8.48086981 8.54954794,8.20012618 8.60253796,7.82621565 C7.98174576,8.46314056 7.50158953,8.93493071 7.16206927,9.24158611 C6.82254902,9.54824151 6.56454981,9.74315489 6.38807164,9.82632624 C5.81209488,10.0912054 5.39245741,10.1160983 5.12915921,9.90100477 C4.86586101,9.68591127 4.81304094,9.27505853 4.97069899,8.66844653 C5.08454251,8.24592411 5.30194096,7.71992901 5.62289435,7.09046124 C5.94384773,6.46099347 6.47908436,5.51088786 7.22860421,4.2401444 Z" id="Path-9"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        FindMyPast
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Something about FindMyPast.
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <div className="relative" onMouseEnter={() => setCategoryOneIsOpen(true)} onMouseLeave={() => setCategoryOneIsOpen(false)}>
                                        <button className="px-3 py-2 group rounded-md text-gray-500 inline-flex items-center text-sm font-medium hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700">
                                            <span>Category Name</span>
                                            <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <Transition
                                            show={categoryOneIsOpen}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <div className="absolute -ml-0 pt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/3">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Trainers
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                            </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Activities
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                            </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Youth
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                            </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Media
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                            </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Faiths
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                            </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <div className="relative" onMouseEnter={() => setCategoryTwoIsOpen(true)} onMouseLeave={() => setCategoryTwoIsOpen(false)}>
                                        <button className="px-3 py-2 group rounded-md text-gray-500 inline-flex items-center text-sm font-medium hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700">
                                            <span>Category Name</span>
                                            <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <Transition
                                            show={categoryTwoIsOpen}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <div className="absolute -ml-0 pt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/3">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Countries
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                                </p>
                                                            </div>
                                                        </Link>

                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        Vault
                                                                    </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    Proin aliquam at eros in pretium.
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>

                                    <div className="relative" onMouseEnter={() => setMoreIsOpen(true)} onMouseLeave={() => setMoreIsOpen(false)}>
                                        <button className="px-3 py-2 group rounded-md text-gray-500 inline-flex items-center text-sm font-medium hover:bg-gray-200 hover:bg-opacity-75 focus:outline-none focus:bg-gray-700">
                                            <span>More</span>
                                            <svg className="ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>

                                        <Transition
                                            show={moreIsOpen}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <div className="absolute -ml-0 pt-2 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/3">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link to="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                            <svg className="flex-shrink-0 w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                                                            </svg>
                                                            <div className="ml-4">
                                                                <div className="inline-flex items-center">
                                                                    <p className="text-base font-medium text-gray-900">
                                                                        More
                                                                </p>
                                                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block text-right">
                            <span class="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                                <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-600 bg-white hover:bg-gray-50">
                                    Log in to Tracker
                                    <svg className="w-6 h-6 pl-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
