import * as React from "react"
import { useState } from 'react'
import Styles from './styles.module.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Icon, InlineIcon } from '@iconify/react';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import facebookIcon from '@iconify-icons/simple-icons/facebook';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import twitterIcon from '@iconify-icons/simple-icons/twitter';
// styles
const pageStyles = {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: '100vh',
  width: '100vw',
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 4,
  Width: "auto",
  fontWeight: 'black',
  fontSize: '6rem',
  paddingTop: "96px",

}

const footer_row1 = {
  display: 'flex',
  flexDirection: 'row',
  width: 'inherit',
  justifyContent: 'space-between',
  marginLeft: 20,
  marginRight: 20,
  padding: 30

}

const timeCount = {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center'
}
const footer = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyItems: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  height: 'inherit',
  justifyContent: 'flex-end'


}

const list = {
  float: 'right',
}
const ul = {
  listStyle: 'none',
  listItems: 'none',
  display: 'flex',
  flexDirection: 'row'
}
// data


// markup

const IndexPage = () => {
  const data = useStaticQuery(graphql`
   query MyQuery {
  file(relativePath: {eq: "background.jpg"}) {
    childImageSharp {
      fluid (fit:COVER) {
        aspectRatio
        base64
        sizes
        src
        srcSet
      }
    }
  }
}
  `)
  const [seconds, setSeconds] = useState(0)

  return (
    <section className={Styles.container}>
      <div className={Styles.backgb}>
        {/* <Img
          className={Styles.backgb}
          fluid={data.file.childImageSharp.fluid}
          alt="backgroud image"
        /> */}
      </div>
      <main className={Styles.maincontent} style={pageStyles}>
        <nav className={Styles.nav}>
          <img src="/logo.svg" height='50px' />
          <h3>Murika Studios</h3>
        </nav>
        <div className={Styles.content}>
          <title>Home Page</title>
          <h1 className={Styles.maintext} style={headingStyles}>
            COMING SOON
        </h1>


          <br />
          <span className={Styles.headingAccentStyles}> Our Website is Coming Soon</span>
        </div>
        <footer style={footer}>
          <div style={footer_row1}>
            <div className={Styles.timeCount} style={timeCount}>
              <span>{seconds}<b>D</b></span>
              <span>00<b>H</b></span>
              <span>00<b>M</b></span>
            </div>
            <div className={Styles.socialMedia} style={list}>
              <ul className={Styles.ul}>
                <a href="/" target='_blank'>
                  <li><Icon icon={instagramIcon} /></li>
                </a>  <a href="/" target='_blank'>
                  <li><Icon icon={facebookIcon} /></li>
                </a>  <a href="/" target='_blank'>
                  <li><Icon icon={linkedinIcon} /></li>
                </a>  <a href="/" target='_blank'>
                  <li><Icon icon={twitterIcon} /></li>
                </a>
              </ul>
            </div>
          </div>
          <div className={Styles.copyright}><small>CopyRight 2021</small></div>
        </footer>

      </main>
    </section>
  )
}


export default IndexPage