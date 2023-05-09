import React from 'react';
import Navbar from '../Shared/Navbar';
import context from '../../assets/title-image.png'
import inlineBlock from '../../assets/inlineBlock.png'
import simantick from '../../assets/simantick.png'

const Blogs = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='#' src={context} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Context API</h1>
                        <h1 className="py-6 text-ellipsis ">The Context API is a feature of React that allows data to be passed down the component tree without having to pass props manually at every level. It provides a way to share data between components without the need for intermediate components to pass down that data as props.

                            Context allows you to create a global store of data that can be accessed by any component in your application, regardless of how deeply nested it is in the component tree. This can be useful for managing things like user authentication state, language preferences, or any other application-wide data that needs to be shared among different parts of your application.</h1>
                        <button className="btn btn-primary">More details</button>
                    </div>
                </div>
            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">inline block and inline block Element difference </h1>
                        <h1 className="py-6 text-ellipsis ">
                            Inline-block and inline-block element are two related concepts in web development, but they are not the same thing.

                            "Inline-block" is a value of the CSS display property. It is used to make an element behave like an inline-level element, but it also allows the element to have a width, height, padding, margin, and vertical alignment properties. Inline-block elements flow horizontally alongside other inline-level elements and may wrap onto a new line if the container width is too small.

                            On the other hand, "inline-block element" refers to an HTML element that is displayed as inline-block due to its CSS properties. This can include various HTML elements like  div, span, img, button, etc. Inline-block elements can have their own content, as well as padding, margin, and other CSS properties.

                            So, the difference between inline-block and inline-block element is that the former is a CSS property value used to control how an element is displayed on the page, while the latter is an HTML element that is displayed as inline-block by setting its CSS properties.</h1>
                        <button className="btn btn-primary">More details</button>
                    </div>
                    <img alt='#' src={inlineBlock} className="max-w-xl rounded-lg shadow-2xl" />

                </div>
            </div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='#' src={simantick} className="max-w-sm rounded-lg shadow-2xl" />

                    <div>
                        <h1 className="text-5xl font-bold">What are semantic tags? </h1>
                        <h1 className="py-6 text-ellipsis ">
                            Semantic tags are HTML tags that convey meaning to web browsers and search engines about the content they contain. They describe the purpose or meaning of the content within the tag, rather than just its appearance. This makes it easier for search engines to understand the content of a webpage, and also makes the webpage more accessible to users with disabilities who rely on screen readers to navigate the web.

                            Examples of semantic tags include  header, nav, main, article, section, aside,footer, figure and figcaption. Each of these tags has a specific meaning and is used to organize content on a webpage. For example, the  header tag is used to define the top part of a webpage, which typically includes a logo, navigation menu, and other introductory content. The  article tag is used to define a self-contained piece of content, such as a blog post or news article.

                            Using semantic tags can help improve the SEO (search engine optimization) of a website, as search engines can more easily understand the content of the webpage and rank it accordingly. Additionally, using semantic tags can improve the accessibility of a website, as screen readers can more easily navigate the content and convey its meaning to visually impaired users.




                        </h1>
                        <button className="btn btn-primary">More details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;