import React from 'react';
import {Link} from 'react-router-dom';
import banner from './banner.jpg';
import OurStockPhotos from './OurStockPhotos/OurStockPhotos';

function Gallery() {
  return (
    <div className="">
       

    	<div>
    		<div className ='spacer '></div>
			
			 <h3 className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ", "object-fit":"100%" , 'height':'350px'}}>
                    
                    <p className='white f1 fw8  tc  ' >
                     	GALLERY
                    </p>
                    <div className='flex white f4 mh2  pv4 ph5 fw1 tc tracked-l '>
                    	<p>
                    	<Link exact to='/' className='ph2 white pointer no-underline dim'>Home</Link>
                    	</p>
                    	<p>/</p>
                    	<p>
                    	<Link to='/gallery' className='ph2 white pointer no-underline dim'>Gallery</Link>
                    	</p>
                    </div>
                 

              </h3>  
    	</div>

    	<div className='pv4 ' style={{'background-color':'#F5F4F4'}}> 
   		<h1 className='tc about-heading-on-mobile' style={{'font-family': 'Audiowide', }}>Some of the Medical Equipments We Supply </h1>
   		<p className='tc about-paragraph-on-mobile'>We stock a wide variety of medical equipments in our Nairobi office
		</p>
		</div>

		<div className='mv3 pv2 '>
			<OurStockPhotos/>
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

export default Gallery;


