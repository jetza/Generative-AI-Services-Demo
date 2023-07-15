import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {
    conclusionText,
    fifthNavText,
    firstNavText,
    fourthNavText,
    headerExample1Text,
    headerExample2Text,
    headerExample3Text,
    secondNavText,
    sixthNavText,
    thirdNavText
} from "../constants/texts";
import {
    contentHeaderClass,
    navBarClass,
    navigationItemClass,
    navigationItemFirstClass
} from "../constants/cssClasses";

import HamburgerIcon from "../components/HamburgerIcon";
import DallE from "../components/DallE";
import ImageToText from "../components/ImageToText";
import ObjectDetection from "../components/ObjectDetection";
import Dictaphone from "../components/Dictaphone";
import TextToSpeech from "../components/TextToSpeech";
import TextToVideo from "../components/TextToVideo";

const MainPage = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    let navigate = useNavigate();

    const navigationText = [
        {text: `${secondNavText}`, key: 0, href: "#i2t"},
        {text: `${thirdNavText}`, key: 1, href: "#object-rec"},
        {text: `${fourthNavText}`, key: 2, href: "#dictaphone"},
        {text: `${fifthNavText}`, key: 3, href: "#text2speech"},
        {text: `${sixthNavText}`, key: 4, href: "#text2video"},
    ];
//TODO: make a new class from navBarClass to set navbar on mobile not to overlap when clicked on link
    return (
        <div className="max-w-[110rem] mx-auto">
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:hidden md:px-8 dark:bg-slate-900 dark:border-gray-700">
                <div className="max-w-3xl mx-auto py-2">
                    <button type="button"
                            className="flex justify-between gap-x-2 items-center w-full text-gray-500 hover:text-gray-600"
                            onClick={() => setMobileNavbar(!mobileNavbar)}>
                        <span className="text-sm">AI Services Demo React App</span>
                        <HamburgerIcon toggleNavbar={mobileNavbar}/>
                    </button>
                </div>
                <div className={`${mobileNavbar? {navBarClass}: "hidden"}`}>
                    <nav className="relative space-y-8 mt-10">
                        <ul className="ml-0.5 space-y-2 border-l-2 border-slate-100 dark:border-slate-800" >
                            <li><Link className={navigationItemFirstClass} reloadDocument to="#dalle">{firstNavText}</Link></li>
                            {navigationText.map(item => {
                                return (
                                    <li key={item.key}><Link reloadDocument to={item.href} className={navigationItemClass}>{item.text}</Link></li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={navBarClass}>
                <nav className="relative space-y-8 mt-10">
                    <button onClick={() => {navigate('../')}}>
                        <h5 className="mb-3 text-sm font-semibold text-slate-200">
                            <Link reloadDocument to="#header">AI Services Demo React App</Link>
                            </h5>
                    </button>
                    <ul className="ml-0.5 space-y-2 border-l-2 border-slate-100 dark:border-slate-800" data-hs-scrollspy="#scrollspy">
                        <li><Link className={navigationItemFirstClass} reloadDocument to="#dalle">{firstNavText}</Link></li>
                        {navigationText.map(item => {
                            return (
                                    <li key={item.key}><Link reloadDocument to={item.href} className={navigationItemClass}>{item.text}</Link></li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[26rem]">
                <div className="max-w-3xl mx-auto xl:max-w-none py-10 xl:ml-0 xl:pr-16 ">
                    <header id="header" className="max-w-6xl pt-8">
                        <h1 className="block text-xl font-bold sm:text-3xl text-indigo-900 mb-6">
                            Programmatic Creation of Multimedia Content Using Generative AI Services</h1>
                        <div className="mt-2 ml-4 text-lg text-gray-400">
                            <p>{headerExample1Text}</p>
                            <br/>
                            <p>{headerExample2Text}</p>
                            <br/>
                            <p>{headerExample3Text}</p>
                            <br/>
                            <p>{conclusionText}</p>
                        </div>
                    </header>
                    <div className="mt-16">
                        <div id="scrollspy" className="space-y-10 md:space-y-16">
                            <div id="dalle" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{firstNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p>For the purpose of generating an image with text, we will use the openai service, which is already known to everyone, and is called Dalle. </p>
                                        <br/>
                                        <p>Dalle is just one of the set of services offered by the OpenAI platform. Apart from it, the most famous and also the one that is the most used is ChatGPT. </p>
                                        <br/>
                                        <p>In order to use any of OpenAI services in our applications, we need to install OpenAI library with npm and connect to their API. </p>
                                        <br/>
                                        <p>How to access the API and authenticate can be found at the following link: <a className="font-semibold hover:text-indigo-900" href="https://platform.openai.com/docs/api-reference/authentication">https://platform.openai.com/docs/api-reference/authentication</a> </p>
                                        <br/>
                                        <p>After logging in to the openai platform, it is necessary to generate an API key and an organization. After that, we can choose what service we want to call, and how we want to configure parameters on model that we need.</p>
                                        <br/>
                                        <p>We can try Dalle in several ways:</p>
                                        <ul className="ml-2">
                                            <br/>
                                            <li>Through OpenAI at <a className="font-semibold hover:text-indigo-900" href="https://labs.openai.com/">https://labs.openai.com/</a> </li>
                                            <li>Edge(Canary version) has a built-in option called Image generator, which is based on Dalle.</li>
                                            <li>On Microsoft Bing you can access it on <a className="font-semibold hover:text-indigo-900" href="https://www.bing.com/images/create/">https://www.bing.com/images/create/</a></li>
                                        </ul>
                                        <br/>
                                        <DallE/>
                                    </div>
                                </div>

                            </div>

                            <div id="i2t" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{secondNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p>API Ninjas is a set of 78 API's that developers can use to build their own projects.</p>
                                        <br/>
                                        <p>There is a section AI/Computer Vision which you can find under the list of all API's on <a className="font-semibold hover:text-indigo-900" href="https://api-ninjas.com/api">https://api-ninjas.com/api</a></p>
                                        <br/>
                                        <p>In order to use their services, developer needs to register and generate API key. There are examples of usage and it is very easy to implement in code.</p>
                                        <br/>
                                        <p>There is a free and paid plan. Under 50 000 API calls are free per month. You can track your API calls through their dashboard.</p>
                                        <br/>
                                        <br/>
                                        <p>Here is a list of all AI services:</p>
                                        <br/>
                                        <ul className="ml-2">
                                            <li><strong>Embeddings</strong>  - Encode any text to vectors using state-of-the-art machine learning models.</li>
                                            <li><strong>Face Detect</strong> - Detect faces from any given image.</li>
                                            <li><strong>Image to Text</strong> - State-of-the-art text detection and extraction from images.</li>
                                            <li><strong>Object Detection</strong> - Fast and accurate image object recognition using the latest machine learning algorithms.</li>
                                            <li><strong>Sentiment</strong> - Text sentiment analysis using state-of-the-art algorithms.</li>
                                            <li><strong>Text Similarity</strong> - Compute text similarity score using the latest NLP machine learning models.</li>
                                        </ul>
                                        <br/>
                                        <ImageToText/>
                                    </div>
                                </div>

                            </div>

                            <div id="object-rec" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{thirdNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p></p>
                                        <br/>
                                    <ObjectDetection/>
                                </div>
                            </div>

                            </div>

                            <div id="dictaphone" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{fourthNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p></p>
                                        <br/>
                                    <Dictaphone/>
                                </div>
                            </div>
                            </div>

                            <div id="text2speech" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{fifthNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p></p>
                                        <br/>
                                    <TextToSpeech/>
                                    </div>
                                </div>
                            </div>

                            <div id="text2speech" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{sixthNavText}</h2>
                                <div className="ml-4">
                                    <div className="mt-2 text-lg text-gray-400">
                                        <p></p>
                                        <br/>
                                    <TextToVideo/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
