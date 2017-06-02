import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { ServerStyleSheet } from 'styled-components';

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind();

    let css;
    if (process.env.NODE_ENV === 'production') {
      const sheet = new ServerStyleSheet();
      const styles = sheet.getStyleTags();
      css = <style dangerouslySetInnerHTML={{ __html: styles }} />;
    }

    let fonts = <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/52312399-4b05-4128-b29c-2881eca832a7.css"/>;
    let animateCss = <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>;
    let gsap = <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>;
    let scrollMagic = <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>;
    let skrollr = <script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>;

    let scrollMagicIndicators;
    if (process.env.NODE_ENV !== 'production') {
      scrollMagicIndicators = <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          {fonts}
          {animateCss}
          {gsap}
          {scrollMagic}
          {skrollr}
          {scrollMagicIndicators}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    );
  }
});
