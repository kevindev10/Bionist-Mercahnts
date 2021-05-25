import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';
import './Contact.css'

function Contact() {
  return (
    <div className="">
       



    	<div>
    		<div className ='spacer '></div>
			
			 <h3 className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ", "object-fit":"100%" , 'height':'350px'}}>
                    
                    <p className='white f1 fw8  tc  ' >
                     	TALK TO US
                    </p>
                    <div className='flex white f4 mh2  pv4 ph5 fw1 tc tracked-l '>
                    	<p>
                    	<Link exact to='/' className='ph2 white pointer no-underline dim'>Home</Link>
                    	</p>
                    	<p>/</p>
                    	<p>
                    	<Link to='/contact' className='ph2 white pointer no-underline dim'>Contact </Link>
                    	</p>
                    </div>
                 

              </h3>  
    	</div>





    	<div  className='  flex  contact-form-main-on-mobile' style={{'background-color':'#FAFAFA'}}>

    		<div className='w-50   mt3 ml4 actual-main-contacts-main-on-mobile'>
	    		<div className='ml5 flex  pt5 actual-contacts-location-on-mobile'>
	    			<div>
	                		<i className="fas fas fa-map fa-2x mr3 pv2 actual-contacts-location-icon-on-mobile" style={{'color':' #25A9A2'}}></i>
	                </div>
	                <div className='mt2 ml2  actual-contacts-location-paragraphs-on-mobile'>
		               		<p className='f4 fw8'>Location</p>
	               		    <p className='pv3'>Africa</p>
	               	</div>	    
	              </div>
	             
	             
	              <div className='ml5 flex  actual-contacts-location-on-mobile '>
	              	<div>
	                	<i className="fas fa-phone  fa-2x  mr2 pv2 actual-contacts-location-icon-on-mobile "  style={{ 'color':' #25A9A2'}}></i>
	                </div>
	                <div className='mt2 ml3  actual-contacts-location-paragraphs-on-mobile'>
		                <p className='f4 fw8'>Phone</p>
		                <ul className='pv2'> 
		                 <li>+254 123 456 789</li> 
		                 <li>+254 123 456 789</li>
		                 <li>+254 123 456 789</li>
		                 <li>+254 123 456 789</li>
	                </ul>
	                </div>
	              </div>

	              <div className='ml5 flex actual-contacts-location-on-mobile  '>
		              <div>
		                <i className="fas fa-envelope fa-2x mr2 pv2 actual-contacts-location-icon-on-mobile" style={{'color':' #25A9A2'}}></i>
		               </div> 
		               <div className='mt2 ml3  actual-contacts-location-paragraphs-on-mobile'>
		               		<p className='f4 fw8'>Email</p>
	              		  	<p className='pv3'>sales@bionist-merchants.com</p>
	              		</div>  	
	              </div>
            </div>





    		<div className='pl6 pv4 mt4 w-50 actual-main-form-on-mobile' style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>

					<div className="container">
					    
					    <form target="_blank" action="https://formsubmit.co/kevozzz@yahoo.com" method="POST">
					        <div className="">
					            <div className="">
					                <div className="">
					                    <input  type="text" name="name" className="f4  pa1 mv3 w-70 br1 shadow-5" style={{'border':'1px solid gray'}} placeholder="Full Name" required/>
					                </div>
					                
					                <div className="">
					                    <input type="email" name="email" className="f4  pa1 mv3 w-60 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Email Address" required/>
					                </div>
					                <div className="">
					                    <input  type="phone" name="phone" className="f4  pa1 mv3 w-50 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Phone Number" required/>
					                </div>
					                <div className="">
					                    <input  type="text" name="subject" className="f4  pa1 mt4 mb1 w-40 br1 shadow-5"  style={{'border':'1px solid gray'}} placeholder="Subject" required/>
					                </div>
					            </div>
					        </div>

					        <div className="">
					        	
					            <textarea  placeholder="Message" className="f4  pa1 mv3  w-90 br1 shadow-5" name="message" rows="10" required></textarea>
					        </div>
					        <button type="submit" className="pa2 mv2 f4 w-40 br1 shadow-5 dib dim" style={{'background':'#E6E3E3', 'border':'1px solid #E6E3E3'}} >Submit </button>
					    </form>
					</div>    


			</div>

    	</div>
    	
    	



		 <div className='footer'>
        <div className='bg-black-80 gray flex  footer-main-one'>

            <div className='pv5 w-50 footer-width '>
              <h1 className='ml5 dim footer-margin'><Link exact to='' className=' no-underline ' style={{'font-family': 'Audiowide', 'color':'#1D8B85', 'font-size': '27px'}}>Bionist Merchants</Link></h1>
              <p className='ml5 pv3 footer-margin '>A medical Equipment, Hospital consumables, Laboratory Equipment, Laboratory consumables And General Supplies Company.</p>
              
              <div className='ml5 flex footer-margin'>
                <i className="fas fa-map-marker-alt fa-lg mr3 pv2" style={{'color':' #25A9A2'}}></i>
                <p className='pv3'>Africa</p>
              </div>
             
             <div className='ml5 flex footer-margin'>
                <i className="fas fa-envelope fa-lg mr2 pv2" style={{'color':' #25A9A2'}}></i>
                <p className='pv3'>sales@bionist-merchants.com</p>
              </div>
              <div className='ml5 flex footer-margin'>
                <i className="fas fa-phone  fa-lg  mr2 pv2  "  style={{ 'color':' #25A9A2'}}></i>
                <p className='pv3'> +254 123 456 789 / +254 123 456 789 / +254 123 456 789 / +254 123 456 789</p>
              </div>
              
             
            </div>

            <div className='w-50 footer-width'>
              <h3 className='ml5 mt4 pt5 white footer-margin footer-product-categories'>PRODUCT CATEGORIES</h3>
              <ul className="f6 f5-l lh-copy ml5 pl4 footer-margin " style={{'list-style-type':'square'}}>
            
                <li className='pv3'><Link exact to='' className='gray no-underline'>Household Sanitation and Personal Hygiene Items</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Diagnostic Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>X-ray Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>X-ray Protection Accessories</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>X-ray Accessories</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Operating and Theater Room Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Laboratory and Research Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Laboratory And Research Consumables</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Ent Instruments</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Dental Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Ultrasound Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Maternal And Infant Care Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Obstetrics And Gynecology Equipment</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Hospital Furniture</Link></li>
                
                <li className='pv3'><Link exact to='/' className='gray no-underline'>Other Medical Equipment And Consumables</Link></li>
            
                  
              </ul>
            </div>

        </div>

        <div className='bg-black gray pv3 flex footer-main-two'>
            <p className='ml5 pv3 w-50 footer-width footer-margin footer-copyright'> © Copyright 2021. All Rights Reserved By Bionist Merchants</p>
            <ul className='ml5 flex pv3 w-50 footer-width footer-margin footer-submenu'>
              <li  className=' mh2'>
                <Link  exact to='/' className='gray no-underline'>Home</Link>
              </li>
              <li  className='mh2 '>
                <Link  to='/about' className='gray no-underline'>About</Link>
              </li>
              <li  className='mh2'>
                <Link  to='/contact' className='gray no-underline'>Contact Us</Link>
              </li>
            </ul>
        </div>



     </div>


    </div>
  );
}

export default Contact;
