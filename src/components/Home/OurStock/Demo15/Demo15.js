import React, { Component } from "react";
import demoImg from './demoImg.jpg';



class Demo15 extends Component {
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
			        <h1 className="f3  mt0 lh-title">Other Medical Equipment And Consumables</h1>
			        <ul className="f5 f4-l lh-copy ml4 list-items-text-color" style={{'list-style-type':'square'}}>
			          	
			          	<li>Vein Finder / Detectors</li>
                                        
                                        <li>Hydrocollator Units</li>
                                        
                                        <li>Food and Beverage Thermometer</li>
                                        
                                        <li>Hot Packs</li>
                                        
                                        <li>Massagers</li>
                                        
                                        <li>Nurse Watches</li>
                                        
                                        <li>Waste Bins</li>
                                        
                                        <li>Menstrual Bins</li>
                                        
                                        <li>Sharp Object containers /Boxes</li>
                                        
                                        <li>Incinerators</li>
                                        
                                        <li>Sterilizers</li>
                                        
                                        <li>Fridge Thermometers</li>
                                        
                                        <li>Sterile Powdered Gloves</li>
                                        
                                        <li>Sterile Non-Powdered Gloves</li>
                                        
                                        <li>Gauze rolls</li>
                                        
                                        <li>Cotton Wool</li>
                                        
                                        <li>Blood Giving Set</li>
                                        
                                        <li>Urine Bags</li>
                                        
                                        <li>Branulas</li>
                                        
                                        <li>Plaster of Paris Roll GYPSONA</li>
                                        
                                        <li>Sutures Chromoc Cut Gut</li>
                                        
                                        <li>Sutures Nylon</li>
                                        
                                        <li>Sutures Vicrly</li>
                                        
                                        <li>Sutures Plain</li>
                                        
                                        <li>Sutures Silk</li>
                                        
                                        <li>Surgical Blades-All sizes</li>
                                        
                                        <li>Syringe Disposable</li>
                                        
                                        <li>Needle Disposable</li>
                                        
                                        <li>Cord Clamps</li>
                                        
                                        <li>Straping Adhesive</li>
                                        
                                        <li>NG- All size</li>
                                        
                                        <li>Fluid Giving set</li>
                                        
                                        <li>Scalp vein</li>
                                        
                                        <li>Silicone folly Catheters</li>
                                        
                                        <li>Ambu bag</li>
                                        
			          	
			        </ul>
			      </div>
			      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns demo1-image-view-on-mobile">
			        <img src={demoImg} width='100%' height='450px' className="db image-styling demo1-actual-image-view-on-mobile" style={{'object-fit': 'cover'}}alt=" dimly lit room with a computer interface terminal."/>
			      </div>
			    </div> 
			    
			  </article>
   		 </div>
    )
  }
}

export default Demo15;