import React, { Component } from "react";
import demoImg from './demoImg.jpg';

class Demo8 extends Component {
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
			        <h1 className="f3  mt0 lh-title">LABORATORY AND RESEARCH CONSUMABLES</h1>
			        <ul className="f5 f4-l lh-copy ml4 list-items-text-color" style={{'list-style-type':'square'}}>
			          	
			                        	<li>Pipette Tips</li>
                                        
                                        <li>PCR/ Thermocycler</li>
                                        
                                        <li>Stirrer</li>
                                        
                                        <li>Test Tubes</li>
                                        
                                        <li>Centrifuge Tubes</li>
                                        
                                        <li>Cryo Vials</li>
                                        
                                        <li>Cryo Pen/ Lab Permanent Markers</li>
                                        
                                        <li>Cryo Boxes</li>
                                        
                                        <li>Syringes</li>
                                        
                                        <li>Needles</li>
                                        
                                        <li>Vacutainers</li>
                                        
                                        <li>Prickers</li>
                                        
                                        <li>Sterile H. VS Swabs</li>
                                        
                                        <li>Gauze rolls</li>
                                        
                                        <li>Urine Containers</li>
                                        
                                        <li>Stool Containers</li>
                                        
                                        <li>Microscope Slides</li>
                                        
                                        <li>ESR Stands</li>
                                        
                                        <li>ESR Tubes</li>
                                        
                                        <li>Tourniquets</li>
                                        
                                        <li>Beakers</li>
                                        
                                        <li>Measuring cylinders</li>
                                        
                                        <li>Water Bath Serological</li>
                                        
                                        <li>Wash Battles</li>
                                        
                                        <li>Lens Cleaning Tissues</li>
                                        
                                        <li>Coupling Jar Plastic</li>
                                        
                                        <li>Blood Grouping Tiles</li>
                                        
                                        <li>Staining Rack Rack Rod</li>
                                        
                                        <li>Applicator Sticks</li>
                                        
                                        <li>Autoclave Tape</li>
                                        
                                        <li>Leishman Stain</li>
                                        
                                        <li>Field Stain A</li>
                                        
                                        <li>Field Stain B</li>
                                        
                                        <li>WIDAL Kit</li>
                                        
                                        <li>Rheumatoid Factor (RF Kit)</li>
                                        
                                        <li>Brucella Kit</li>
                                        
                                        <li>MVA Kits</li>
                                        
                                        <li>Wire Loop and Handle</li>
                                        
                                        <li>Urinalysis Strips</li>
                                        
                                        <li>H.Pylory Stips</li>
                                        
                                        <li>H.PyloryAntigen Kits</li>
                                        
                                        <li>Salmonella Antigen Kits</li>
                                        
                                        <li>Salmonella Antibody W/Serum Kits</li>
                                        
                                        <li>Polypots</li>
                                        
                                        <li>PDT Strips</li>
                                        
                                        <li>VDRL/Syphilis Strips</li>
                                        
                                        <li>Hepatitis B Strips</li>
                                        
                                        <li>Hepatitis C Strips</li>
                                        
                                        <li>TB Cassette</li>
                                        
                                        <li>Blood Grouping Kits Anti A,B &amp; D</li>
                                        
                                        <li>HIV Determine Strips</li>
                                        
                                        <li>Multi-Drug Test 10 Parameters</li>
                                        
                                        <li>Normal Saline</li>
                                        
                                        <li>Cover Slip</li>
                                        
                                        <li>Oil-Immersion</li>
                                        
                                        <li><strong>Lab Reagents</strong></li>
                                        
                                        <li>Diluents</li>
                                        
                                        <li>Lyse</li>
                                        
                                        <li>Detergent</li>
                                        
                                        <li>Rinse</li>
                                        
                                        <li><strong>Gram Staining Kits</strong></li>
                                        
                                        <li>Crystal Violet</li>
                                        
                                        <li>Lugos of Iodine</li>
                                        
                                        <li>Aceton</li>
                                        
                                        <li>Neutralred</li>
                                        
                                        <li>Carbo Fuchsin Strong</li>
                                        
                                        <li>3% Acid Alcohol</li>
                                        
                                        <li>Research Instruments / Items e.t.c</li>
			          	
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

export default Demo8;