import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function ContactUs(){

  return(
    <>
      <Layout>
      <div className="container pt-5">
        <Row className="justify-content-center">
            <Form className="contact-us-form">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="orange-theme-btn" type="submit">
                Submit
              </Button>
            </Form>
            </Row>
        </div>
      </Layout>
    </>
  )
}

export default ContactUs;
