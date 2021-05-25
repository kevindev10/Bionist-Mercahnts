import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';
import demoImg from './demoImg.jpg';
import './About.css';
import cardImg1 from "./cardImg1.jpg";
import cardImg2 from "./cardImg2.jpg";
import cardImg3 from "./cardImg3.jpg";
import cardImg4 from "./cardImg4.jpg";
import cardImg5 from "./cardImg5.jpg";
import cardImg6 from "./cardImg6.jpg";



function About() {
  return (
    <div className=" ">
    	<div>
    		<div className ='spacer '></div>
			
			 <h3 className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ", "object-fit":"100%" ,'height':'350px' }}>
                    
                    <p className='white f1 fw8  tc  ' >
                     	ABOUT
                    </p>
                    <div className='flex white f4 mh2  pv4 ph5 fw1 tc tracked-l '>
                    	<p>
                    	<Link exact to='/' className='ph2 white pointer no-underline dim'>Home</Link>
                    	</p>
                    	<p>/</p>
                    	<p>
                    	<Link to='/about' className='ph2 white pointer no-underline dim'>About</Link>
                    	</p>
                    </div>
                 

              </h3>  
    	</div>


       <div>
  			 <article className="pv5 bt bb b--black-10 demo1-article-view-on-mobile " style={{'width':'90%', 'margin-left':'auto', 'margin-right':'auto'}}>
			    <div className="flex flex-column flex-row-ns  demo1-main-view-on-mobile">
			      <div className="w-100 w-50-ns pr3-ns order-2 order-1-ns demo1-heading-view-on-mobile ">
			        <h1 className="f3  mt0 lh-title">Our Story</h1>
			        <h3 className='i fw1  pv3' style={{'color':'#2BCCC3'}}>"A Medical Equipment, Consumables and General Supplies Company ."</h3>

			        <p className="f5 f5-l lh-copy list-items-text-color">
			          	Bionist Merchants is a registered and licensed business , 
			          	where we procure and distribute a range of quality medical
			          	equipment of our own design. We are specialists in medical 
			          	equipment for hospitals, clinics and primary. Our specialist 
			          	fields include: Medical Equipment, Hospital Furniture,
			            Laboratories, Research Items, Consumables etc.
			          	
			        </p>
			        <h3 className=' fw1  pv3 mt3' style={{'color':'#2BCCC3'}}>Our Mission</h3>

			        <p className="f5 f5-l lh-copy list-items-text-color">
			          	To promote healthcare through provision of high quality
			          	 and innovative Medical equipment while maintaining honesty
			          	 , integrity and providing excellent customer service.
			          	
			        </p>
			        <h3 className=' fw1  pv3 mt3' style={{'color':'#2BCCC3'}}>Our Vision</h3>

			        <p className="f5 f5-l lh-copy list-items-text-color">
			          	To deliver the best possible customer service, excellent 
			          	quality and the most advanced medical Equipment. Bionist Merchants
			          	 policy is simply "Quality is our Priority". We want to be 
			          	 the automatic supplier of first choice to our key customers by
			          	  providing them with the best Medical Equipment and a personal service.
			          	
			        </p>
			        <h3 className=' fw1  pv3 mt3' style={{'color':'#2BCCC3'}}>Values & Strengths</h3>

			        <p className="f5 f5-l lh-copy list-items-text-color">
			          	Our people have a strong desire to do the "right thing" and 
			          	to deliver the promises that we make. We maintain very high levels 
			          	of innovation, knowledge & technical expertise to deliver integrated 
			          	solutions that work. We aim to build on the business values of trustworthiness
			           and to build strong partnerships with our customers and strategic partners.
			          	
			        </p>

			         <h3 className=' fw1  pv3 mt3' style={{'color':'#2BCCC3'}}>Our Expertise</h3>

			        <p className="f5 f5-l lh-copy list-items-text-color">
			          We maintain the highest levels of expertise to enable us to deliver on our values.
			           Our medical technology skills span research, design, electronics, lighting and
			            engineering services.
			          	
			        </p>
			      </div>
			      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns demo1-image-view-on-mobile">
			        <img src={demoImg} width='100%' height='600px' className="db image-styling demo1-actual-image-view-on-mobile " style={{'object-fit': 'cover'}}alt=" dimly lit room with a computer interface terminal."/>
			      </div>
			    </div>
			    
			  </article>
   		 </div>



   		<div className='pv4 ' style={{'background-color':'#F5F4F4'}}> 
   		<h1 className='tc about-heading-on-mobile' style={{'font-family': 'Audiowide', }}>A Leading Supplier of Medical Equipments Across Africa</h1>
   		<p className='tc about-paragraph-on-mobile'>We are a Medical Equipment, Hospital consumables, Laboratory Equipment,
			Laboratory consumables And General Supplies Company
		</p>

 


		    <div className='pv2'>
        
		        <div className='cardz ma1  pt3 ph3  main-cardz-on-mobile ' > 
			        <article className="br2 ba dark-gray b--black-10 mv4  w-30  ma3 shadow-5 cardz-on-mobile">
			          <img src={cardImg1} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile " alt=" COMMUNITY FOCUSED."/>
			          
			        </article>

			        <article className="br2 ba dark-gray b--black-10 mv4 w-30   ma3 shadow-5 cardz-on-mobile" >
			          <img src={cardImg2} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" LONG TERM SOLUTIONS."/>
			          
			        </article>

			        <article className="br2 ba dark-gray b--black-10 mv4 w-30  ma3 shadow-5 cardz-on-mobile">
			          <img src={cardImg3} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" PROVING 100%."/>
			          
			        </article>
		        </div>

		        <div className='cardz ma1   pb3 ph3 mb3 main-cardz-on-mobile ' > 
			        <article className="br2 ba dark-gray b--black-10 mv4  w-30  ma3 shadow-5 cardz-on-mobile">
			          <img src={cardImg4} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile " alt=" COMMUNITY FOCUSED."/>
			          
			        </article>

			        <article className="br2 ba dark-gray b--black-10 mv4 w-30   ma3 shadow-5 cardz-on-mobile" >
			          <img src={cardImg5} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" LONG TERM SOLUTIONS."/>
			          
			        </article>

			        <article className="br2 ba dark-gray b--black-10 mv4 w-30  ma3 shadow-5 cardz-on-mobile">
			          <img src={cardImg6} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" PROVING 100%."/>
			          
			        </article>
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

export default About;
