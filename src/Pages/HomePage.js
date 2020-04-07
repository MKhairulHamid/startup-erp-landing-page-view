import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Header from '../Components/Header';


import '../sass/HomePage.sass'


const HomePage = () => {

    return (
        <div className="homePageRoot" >
            <div className="section1n2">
                <div className="section1">
                    <div className="header" sticky="top">
                            <Header />
                    </div>
                    <div className="banner">
                        <div className="quote1">
                            <h3>Discover how enterprise resource planning (ERP) software</h3>
                            <h3> can help you perfect your growth plans and your ability to execute on them.</h3>
                        </div>
                        <div className="quote2">
                            <h4 className="quote2Text">"If You Can't Measure It, You Can't Improve It" </h4>
                        </div>
                    </div> 
                </div>
                <div id="about" className="section2">
                    <div className="aboutTitle">
                        <h3> About Startup-ERP </h3>
                    </div>
                    <div className="aboutText">
                        <h4 style={{textAlign: 'center'}}>
                        At Startup-ERP, we believe that selling should be easy. However, the reality is that most business owners spend hours every day compiling sales reports, checking their inventory, and going through paperworks. Startup-ERP takes away the pain of running a business so you can focus on what's really important: serving your customers and growing your business.
                        </h4>
                    </div>
                </div>
            </div>
            <div id="pricing" className="sectionbuffer">
            </div>
            <div  className="section4">
                <div className="pricingTitle">
                    <h2>Our Simple Pricing</h2>
                </div>
                <div className="flex-container">
                    <div className="pricingItem1" >
                        <ListGroup>
                            <ListGroup.Item>
                                <h4> Small Business </h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Point of Sales
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Inventory Management
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Customer Management
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Free Consultation
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Rp 1000.000 / Month</h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="pricingItem2" >
                        <ListGroup>
                            <ListGroup.Item>
                                <h4> Growing Business </h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                All of Small Business Package
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Supplier Management
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Income Report
                            </ListGroup.Item>
                            <ListGroup.Item>
                                1 on 1 Consultation
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Rp 2000.000 / Month</h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="pricingItem3" >
                        <ListGroup>
                            <ListGroup.Item>
                                <h4> Corporate </h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                All of Growing Business Package
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Employee Management
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Full Financial Report
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Weekly Business Report
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5> Rp 10.000.000 / Month</h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
            <div id="contact" className="section5">
                <div className="Contact">
                        <h5> Contact Us</h5>
                        <p> Startup Tower </p>
                        <p> Jalan Jendral Sudirman Jakarta </p>
                        <p> 📞 021 123456</p>
                </div>
                <div className="Copyright">
                    <p> © By M Khairul Hamid </p>
                </div>

            </div>
        </div>
    )
}

export default HomePage;