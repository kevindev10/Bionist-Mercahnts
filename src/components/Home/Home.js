import React from 'react';
import{Link} from 'react-router-dom';
import './Home.css';
import BannerSlider from './BannerSlider/BannerSlider';
import OurStock from './OurStock/OurStock';
import cardImg1 from "./cardImg1.jpg";
import cardImg2 from "./cardImg2.jpg";
import cardImg3 from "./cardImg3.jpg";




function Home() {
  return (
    <div className="">
       
       <div className='pb4' style={{'width':'100%', 'overflow-x':'hidden'}}>
       	<BannerSlider/>
       </div>


       <div>
          <div className='flex center mv2 home-contact-card-on-mobile'>
               <div className='ph4 pv5  white' style={{'background-color':' #1D8B85'}}>
                   <i className="fas fa-phone fa-lg  "  style={{'color':' white', 'padding-bottom':'20px'}}></i>
                   <p className='pv2 f3'>CONTACT US TODAY</p>
                   <p className='pv2 f3'>+254 7123 575 123</p>
                   <p className='pv2 f5'>Visit our offices at Petition Plaza 4th Floor</p>
               </div>
               <div className='ph4 pv5  white' style={{'background-color':' #25A9A2'}}>
                   <i className="fas fa-stethoscope fa-lg "  style={{'color':' white', 'padding-bottom':'20px'}}></i>
                   <p className='pt2 pb4 f3'>SERVING AFRICA</p>
                   
                   <p className='pv2 f5'>We deliver and service clients across  Africa </p>
               </div>
               <div className='ph4 pv5  white' style={{'background-color':' #2BCCC3'}}>
                   <i className="fas fa-hourglass fa-lg "  style={{'color':' white', 'padding-bottom':'20px'}}></i>
                   <p className='pt2 pb4 f3'>WORKING HOURS</p>
                   <div className='flex'>
                   <p className=' f5 bb b-white tl pr5'>MON - FRI -</p>
                   <p className=' f5 bb b-white tr pl5'>8:00 - 17:00</p>
                   </div>
                   <div className='flex'>
                   <p className=' f5 tl pr5'>SATURDAY-</p>
                   <p className=' f5 tr pl5'>8:00 - 12:00</p>
                   </div>
               </div>
          </div>
       </div>


       <div  >
          <div className='mv3 pv2' style={{'margin-left':'25px', 'margin-right':'25px'}} >
            <h1 className='tc  f2 heading-on-mobile ' style={{'font-family': 'Audiowide', }}>Welcome to Bionist Merchants</h1>
            <p className='tl f4 paragraph-on-mobile '>Bionist Merchants is your one stop shop for all your medical equipment needs, 
              as a leading medical equipment supplies store across Africa .           
              Bionist Merchants supplies customers with cutting-edge medical 
              equipment at incomparable prices, we value our customers and go
              above and beyond to make sure they are satisfied with their purchases. 
              We are fueled by our commitment to customer satisfaction and strive to 
              exceed our client's expectations.
             </p>
          </div>
          
       </div>


       <div className='mv3 pv2 '>
       		<OurStock/>
       </div>

       <div>
        <h2 className='tc f2   ' style={{'font-family': 'Audiowide', }}>Some of our Provided Equipment</h2>
        <div className='cardz ma1 pa3 mb3 main-cardz-on-mobile ' > 
        <article className="br2 ba dark-gray b--black-10 mv4  w-30  ma3 shadow-5 cardz-on-mobile">
          <img src={cardImg1} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile " alt=" COMMUNITY FOCUSED."/>
          <div className="pa2 ph3-ns pb3-ns pv4 mb4 tl">
            <div className="dt w-100 mt1 ">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">OXYGEN GENERATOR</h1>
              </div>
              
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray ">
              Better Service At Low Cost
            </p>
          </div>
        </article>

        <article className="br2 ba dark-gray b--black-10 mv4 w-30   ma3 shadow-5 cardz-on-mobile" >
          <img src={cardImg2} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" LONG TERM SOLUTIONS."/>
          <div className="pa2 ph3-ns pb3-ns pv4 mb4 tl">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">ULTRA SOUND MACHINE</h1>
              </div>
              
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray ">
               Better Service At Low Cost
            </p>
          </div>
        </article>

        <article className="br2 ba dark-gray b--black-10 mv4 w-30  ma3 shadow-5 cardz-on-mobile">
          <img src={cardImg3} width='400' height='380' className="db w-100 br2 br--top card-img-size card-photo-mobile" alt=" PROVING 100%."/>
          <div className="pa2 ph3-ns pb3-ns pv4 mb4 tl">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0">MULTI PURPOSE DELIVERY BED</h1>
              </div>
              
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray">
                  Better Service At Low Cost
            </p>
          </div>
        </article>
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

export default Home;
