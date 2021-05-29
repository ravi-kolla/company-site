import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CarouselComponent from '../components/carousel'
import FeaturedOffer from '../components/featuredOffer'
import FeaturedList from '../components/featuredList'

function Homepage(props) {
  console.log(props.servicesList);
  return(
    <>
      <Layout>
        <div className="container">
          <CarouselComponent content={props.homeCarousel}/>
          <Row className="mt-4">
            <Col>
              <FeaturedList content={props.servicesList} />
            </Col>
            <Col>
              <FeaturedOffer content={props.featuredOffer[0]}/>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  )
}

Homepage.getInitialProps = async context => {

  const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })

  const homeCarousel = await client.getEntries({content_type: "homeCarousel"}).then((response) => response.items);
  const featuredOffer = await client.getEntries({content_type: "featuredOffer"}).then((response) => response.items);
  const servicesList = await client.getEntries({content_type: "servicesList"}).then((response) => response.items);

  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { homeCarousel, featuredOffer, servicesList }
}

export default Homepage
