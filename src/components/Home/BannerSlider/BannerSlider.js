import React,{Component} from 'react';
import './BannerSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from './banner.jpg';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';
import banner7 from './banner7.jpg';
import banner8 from './banner8.jpg';
import banner9 from './banner9.jpg';



export default class AutoPlay extends Component {
  render() {
    const settings = {
      arrow:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 10000,
      fade: true,
    };
    return (
      <div>
       
        
        <Slider {...settings}>
          
              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ", "object-fit":"100%" ,}}>
                    
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10 ' >
                      Household Sanitation and Personal Hygiene Items
                    </p>
                     <p className='white f5 mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Household Sanitation and Personal Hygiene Items including 500ml Hand wash, 
                      500ml Hand Sanitizer, Sterile gloves e.t.c
                    </p>
                    
                    

                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner1 + ") ", "object-fit":"100%"  }}>
                    <p className='white f1 fw8 slider-heading-on-mobile  tc bg-black-10'>
                      Diagnostic Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                     We supply Diagnostic Equipment including ENT/Diagnostic set, Temporal forehead
                      thermometers, Pulse oximeters, BP Machine-Blood pressure monitors, ECG Machines 
                      and accessories, Binocular loupes, Ear syringes, Head band and mirror sets,
                       Otoscopes, Percussion Hammers e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile ' style={{"backgroundImage": "url(" + banner2 + ") ", "object-fit":"100%"   }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      X-ray Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply X-ray Equipment including Digital X-ray Machine, 
                      Floor-Mounted Medical X-ray, Portable X-ray Machine, Mobile X-ray Machine,
                       C-arm X-ray Machine, Mammography Machine, Fluoroscopy e.t.c
                    </p>
                  </h3>  
              </div>
              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner3 + ") ", "object-fit":"100%"  }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      X-ray Protection Accessories
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply X-ray Protection Accessories including Lead sheet, Lead glass, Lead door,
                     Lead apron, Lead rubber, Lead gogos, Lead Belt, Anatomical Maker, Personal monitoring budge,
                      Lead thyroid shield e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner4 + ") ", "object-fit":"100%"   }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      Operating and Theater Room Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Operating and Theater Room Equipment including Anesthesia machines, 
                      Syringe and Infusion, Electric bone saw / drills, Patient monitors, Suction Units, 
                      Electric Dermatome, Respirators /Ventilators, Operating Light / Lamps, Operating 
                      tables, Electrosurgical unit e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner5 + ") ", "object-fit":"100%"   }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      Laboratory and Research Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Laboratory and Research Equipment including Full Hemogram/
                       Hematology Analyzer, Biochemistry Analyzer, Urine Analyzer, Electrolytic Analyzer,
                      Coagulation Analyzer, Immunoassay Analyzer, Protein Analyzer, 
                      Blood Gas Analyser/ POCT, HbA1c Analyzer, Centrifuge e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner6 + ") ","object-fit":"100%"   }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      Dental Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Dental Equipment including Dental chairs, Panoramic, Digital dental sensor, Dental X-ray Unit,
                       Ultrasonic Scalers, Dental Cabinets, Dental Film Processor, Dental Autoclave, Endo motor, Apex locater e.t.c
                    </p>
                  </h3>  
              </div>


              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner7 + ") ","object-fit":"100%"   }}>
                   <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-40'>
                      Ultrasound Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-40'>
                      We supply Ultrasound Equipment including B/W Ultrasound Machine, 
                      Color Doppler Ultrasound Machine, Cardiology IV Littman Stethoscope, 
                      Fetal and Maternal monitor, Ultrasound Gel, Ultrasound Thermal Papers e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile ' style={{"backgroundImage": "url(" + banner8 + ") ", "object-fit":"100%"  }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      Maternal And Infant Care Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Maternal And Infant Care Equipment including Infant Incubators, Transport Incubators, 
                      Infant Phototherapy Units, Infant Radiant Warmers, Resuscitaire,
                       Delivery Beds, Patient step stools e.t.c
                    </p>
                  </h3>  
              </div>

              <div >
                  <h3 className='div-background-images slider-image-size-on-mobile' style={{"backgroundImage": "url(" + banner9 + ") ","object-fit":"100%"   }}>
                    <p className='white f1 fw8 slider-heading-on-mobile tc bg-black-10'>
                      Obstetrics And Gynecology Equipment
                    </p>
                     <p className='white f5  mh2  ph5 fw1 tc tracked-l slider-paragraph-on-mobile bg-black-10'>
                      We supply Obstetrics And Gynecology Equipment including Video Colposcope,
                       Fetal and Maternal monitor, Mastopathy treatment Machine, Infant Bilirubinometer, 
                       Obstetrics and Delivery Bed, Mammary Gland Inspector, Gynecology Tables, Gynecology 
                       Electrocautery, Speculums e.t.c
                    </p>
                  </h3>  
              </div>

           



              
          

        </Slider>
      </div>
    );
  }
}
