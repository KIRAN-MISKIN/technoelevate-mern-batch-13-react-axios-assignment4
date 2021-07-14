import React, { Component } from 'react';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import {Link,BrowserRouter} from "react-router-dom";

export default class Home extends Component {
    render() {
        const wid={
                height:"300px",
                maxWidth:"740px",
                marginLeft:"0px",
                marginTop:"30px",
                backgroundColor:"lightgreen"
                
        }

        const wid1={
            height:"300px",
            maxWidth:"740px",
            marginLeft:"500px",
            marginTop:"70px",
            backgroundColor:"cyan"
        }

        const im={
            height:"300px",
            width:"250px"
        }

        const main={
            
        }
        return (
            <BrowserRouter>
            <div style={main}>
                <div className="container">
                <div className="card mb-3" style={wid} >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={home1} style={im} alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">COVID-19 vaccines are safe</h5>
        <h6>BE SAFE AND KEEP INDIA FREE FROM COVID-19</h6>
        <p className="card-text">COVID-19 vaccines also help keep you from getting seriously ill even if you do get COVID-19.
        Getting vaccinated yourself may also protect people around you</p>
        <p className="card-text"><small className="text-muted">Last updated Today</small></p>
        <Link to='https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits.html'>Read More</Link>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={wid1} >
  <div className="row no-gutters">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Immunity after COVID-19 vaccination</h5>
        <h6>PLEASE FOLLOW GOVERNMENT RULES AND STAY SAFE</h6>
        <p className="card-text">There is still a lot we are learning about COVID-19 vaccines and CDC is constantly reviewing evidence and updating guidance. We don’t know how long protection lasts for those who are vaccinated.
         Getting a COVID-19 vaccine is a safer choice.</p>
        <p className="card-text"><small className="text-muted">Last updated Today</small></p>
        <Link to=''>Read More</Link>
      </div>
    </div>
    <div className="col-md-4">
      <img src={home2} style={im} alt="..."/>
    </div>
  </div>
</div>


</div>
            </div>

            </BrowserRouter>
        )
    }
}