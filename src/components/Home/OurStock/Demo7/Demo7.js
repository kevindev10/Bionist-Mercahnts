import React, { Component } from "react";
import demoImg from './demoImg.jpg';

class Demo7 extends Component {
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
			        <h1 className="f3  mt0 lh-title">LABORATORY AND RESEARCH EQUIPMENT</h1>
			        <ul className="f5 f4-l lh-copy ml4 list-items-text-color" style={{'list-style-type':'square'}}>
                  	    <li>Full Hemogram/ Hematology Analyzer</li>
                        
                        <li>Biochemistry Analyzer</li>
                        
                        <li>Urine Analyzer</li>
                        
                        <li>Electrolytic Analyzer</li>
                        
                        <li>Coagulation Analyzer</li>
                        
                        <li>Immunoassay Analyzer</li>
                        
                        <li>Protein Analyzer</li>
                        
                        <li>Blood Gas Analyser/ POCT</li>
                        
                        <li>HbA1c Analyzer</li>
                        
                        <li>Centrifuge</li>
                        
                        <li>Autoclave</li>
                        
                        <li>Microscope</li>
                        
                        <li>Elisa/ Microplate reader</li>
                        
                        <li>Microplate Washer</li>
                        
                        <li>Lab Incubators</li>
                        
                        <li>Lab Refrigerator</li>
                        
                        <li>Lab/Nitrogen Storage Tanks/ System</li>
                        
                        <li>Liquid Handling</li>
                        
                        <li>Drying Oven</li>
                        
                        <li>Clean Bench</li>
                        
                        <li>Biosafety Cabinet</li>
                        
                        <li>Shaker</li>
                        
                        <li>Roller mixer</li>
                        
                        <li>Oscillator</li>
                        
                        <li>Diaspect Machine</li>
                        
                        <li>Haemo Controls for HB</li>
                        
                        <li>Haemocue HB Cuvettes</li>
                        
                        <li>Triple Balance / Weighing Scales</li>
                        
                        <li>Talley Counters</li>
                        
                        <li>Lab Rotating Stools</li>
                        
                        <li>Hot Air Oven</li>
                        
                        <li>Lab Timer</li>
                        
                        <li>Neuber Chamber</li>
                        
                        <li>Pipette</li>
			          	
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

export default Demo7;