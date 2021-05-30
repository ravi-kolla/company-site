import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Header from './header';
import Footer from './footer';

const Layout = props => (
  <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="DevClust Technologies" />
        <meta name="description" content="Best IT Services provider" />
        <meta name="keywords" content="DevClust, DevClust Technologies, Web Site developers, IT Services, IT Consulting" />
        <title>DevClust Technologies</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {props.children}
      <Footer />
  </>
)
export default Layout
