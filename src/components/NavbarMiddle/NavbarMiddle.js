import React from 'react';
import './NavbarMiddle.css';
import{Link} from 'react-router-dom';

function NavbarMiddle() {
  return (
    <div className=" " >

       	<div className='middle-menu-height-on-mobile mv1'style={{'border-top':'1px solid #F6F3F3', 'height':'210px' , }}>
       		
       		<h1 className='ml4 '><Link exact to='' className='company-name no-underline '>Bionist Merchants</Link></h1>
       		
       		<div className='flex middle-menu-view-on-mobile'>
	       		<div className='flex ph4'>
	       			<i class="fas fa-envelope fa-2x fa-border midnav-icons-on-mobile " style={{'color':' #25A9A2'}}></i>
	       			<div className='mv2 mh3 midnav-contact-on-mobile'>
		       			<p>Email</p>
		       			<p>sales@bionist-merchants.com</p>
	       			</div>

	       		</div>

	       		<div className='flex ph4'>
	       			<i className="fas fa-phone fa-border fa-2x  midnav-icons-on-mobile  "  style={{ 'color':' #25A9A2'}}></i>
	       			<div className='mv2 mh3  midnav-contact-on-mobile'>
		       			<p>Call Now</p>
		       			<p className='navmid-phn-no-on-mobile'> +254 123 456 789 / +254 123 456 789 / +254 123 456 789 / +254 123 456 789</p>
	       			</div>

	       		</div>
       		</div>


       		<div className='tr midnav-button-on-mobile'>
	       		<div className=' mr4 midnav-button-on-mobile-2 '>
		        	<Link to='/contact'> <button className='dib pa3 grow shadow-5 f5 buttonMiddle-styling' >Contact Us</button> </Link>
		        </div>
       		</div>


       	</div>


    </div>
  );
}

export default NavbarMiddle;
