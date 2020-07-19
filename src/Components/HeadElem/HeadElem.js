/**
 * @fileoverview React Component for HEAD element for Google Analytics and SEO
 */

/* Upon further learning, I have realized that this will not be very helpful unless I implement server-side rendering. Preserving component while deciding what to do. */
import React, { Component } from "react";
import { Helmet } from "react-helmet";

/**
 * A HEAD element containing Google Analytics and SEO information
 * @implements { Component }
 */
class HeadElem extends Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Max Lepper - Web Portfolio</title>
        <meta
          name="description"
          content="Max is a passionate aspiring front-end developer, eager to drive value to your team!"
        />
        <link rel="canonical" href="https://maxlepper.gitlab.io/portfolio/" />
        <meta name="author" content="Max Lepper"></meta>
        <meta
          name="keywords"
          content="Max Lepper, Max, Lepper, front-end developer, front-end, web developer, developer, computer programmer, programmer, ReactJS, React, Redux, Firestorm, Leadership, Agile, Project Management, portfolio, resume"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>

        {/* BEGIN GOOGLE ANAYLITICS */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-172983308-1"
        ></script>
        {/*Not currently sure which to use - <script async src="https://www.google-analytics.com/analytics.js" />*/}
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-172983308-1');`}
        </script>
      </Helmet>
    );
  }
}

export default HeadElem;
