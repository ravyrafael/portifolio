import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"

const index = () => {
    return (
     <section id="about">
         <h1 className="section-big-title til hidden-xs hidden-sm" data-in-effect="fadeInUp" data-out-effect="fadeInDown">
           <ul className="texts">
             <li className="fade-in-out">about</li>
             </ul>
             </h1>
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-4">
                   
                    <div className="section-holder texture">
                        <div className="line-art-top">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="line-art-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="line-art-left">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="line-art-right">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="img-holder">
                            <img src="https://image.freepik.com/free-vector/wrinkled-paper-texture_1100-12.jpg" className="img-responsive img-circle" alt="John Doe"></img>
                        </div>
                        <div className="sep-mini"></div>
                        <h4> Name: Ravy Rafael </h4>
                        <h4> Date of birth: 30-Nov-1993 </h4>
                        <h4> Nationality: Brazilian </h4>
                        
                         <div className="social-links">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        
                            <a href="#url"> <i className="ion-social-dribbble-outline i-size-small"></i> </a>
                            <a href="#url"> <i className="ion-social-github-outline i-size-small"></i> </a>
                         </div>
                        <a className="tooltip-cl cv-download" data-tooltip="Download CV" href="#cv-url"> <i className="ion-ios-download-outline i-size-small"></i> </a>

                     </div>
                </div>

                <div className="col-sm-8 col-4">
                    <div className="section-holder">
                        <div className="icon-holder i-size-big">
                            <svg className="bi bi-pencil-square" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                                <path d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"/>
                            </svg>
                        </div>
                        <h3 className="section-title"> About Me </h3>
                            Beast. Meat set greater she'd creeping from were under bearing won't wherein it open. Light. From midst all fill saying day Very void land their fly.

                            Heaven green without whose replenish seasons there brought, over own sixth in Beginning. 
                           All behold. Our every fruitful so.  
                           <FontAwesomeIcon icon="coffee" />
                        
                        <div className="icon-holder i-size-small">
                            <i className="ion-ios-baseball-outline"></i>
                        </div>
                        <h4> Hobbies </h4>
                        <p> gaming | watch tv | photography | read </p>
                        
                        <div className="icon-holder i-size-small">
                            
                        </div>

                        <h4> Latest Projects</h4>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default index;
