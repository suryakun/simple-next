import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'

class General extends React.Component {
    render() {
        return (
            <div className="container">
                <Head>
                    <title>Simple with NextJs</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
                </Head>
                <Navbar/>   
                {this.props.children}
            </div>
        )
    }
}

export default General;