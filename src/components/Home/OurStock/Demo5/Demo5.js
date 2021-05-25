import React, { Component } from "react";
import demoImg from	'./demoImg.jpg';

class Demo5 extends Component {
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
			        <h1 className="f3  mt0 lh-title">X-RAY ACCESSORIES</h1>
			        <ul className="f5 f4-l lh-copy ml4 list-items-text-color" style={{'list-style-type':'square'}}>
			          	
                        
                        <li>Auto film processors</li>
                        
                        <li>Manual film processors</li>
                        
                        <li>X-ray films</li>
                        
                        <li>X-ray cassettes</li>
                        
                        <li>Intensifying screens</li>
                        
                        <li>Film markers</li>
                        
                        <li>Film storing boxes</li>
                        
                        <li>Film transfer boxes</li>
                        
                        <li>Chest stands</li>
                        
                        <li>X-ray dosimeters</li>
                        
                        <li>Darkroom lights</li>
                        
                        <li>Film developing solutions</li>
                        
                        <li>Film dryer</li>
                        
                        <li>Film Viewers</li>
                        
                        <li>Film hangers</li>
                        
                        <li>X-ray tables</li>
                        
                        <li>X-ray room</li>
                        
                        <li>X-ray generator</li>
                        
                        <li>MRI Non-magnetic</li>
                        
                                   
			          	
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

export default Demo5;