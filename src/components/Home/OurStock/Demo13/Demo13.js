import React, { Component } from "react";
import demoImg from './demoImg.jpg';

class Demo13 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
    	<div>
  			 <article className="pv5 bt bb b--black-10 demo1-article-view-on-mobile " style={{'width':'80%', 'margin-left':'auto', 'margin-right':'auto'}}>
			    <div className="flex flex-column flex-row-ns  demo1-main-view-on-mobile">
			      <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns demo1-heading-view-on-mobile ">
			        <h1 className="f3  mt0 lh-title">Obstetrics And Gynecology Equipment</h1>
			        <ul className="f5 f4-l lh-copy ml4 list-items-text-color" style={{'list-style-type':'square'}}>
			          	

			        	<li>Video Colposcope</li>
                                        
                        <li>Fetal and Maternal monitor</li>
                        
                        <li>Mastopathy treatment Machine</li>
                        
                        <li>Infant Bilirubinometer</li>
                        
                        <li>Obstetrics and Delivery Bed</li>
                        
                        <li>Mammary Gland Inspector</li>
                        
                        <li>Gynecology Tables</li>
                        
                        <li>Gynecology Electrocautery</li>
                        
                        <li>Speculums</li>


			        </ul>
			      </div>
			      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns demo1-image-view-on-mobile">
			        <img src={demoImg} width='100%' height='450px' className="db demo1-actual-image-view-on-mobile image-styling" style={{'object-fit': 'cover'}}alt=" dimly lit room with a computer interface terminal."/>
			      </div>
			    </div>
			    
			  </article>
   		 </div>
    )
  }
}

export default Demo13;