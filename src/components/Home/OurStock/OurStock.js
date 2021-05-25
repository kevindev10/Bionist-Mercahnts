import React, { Component,  } from 'react'


import './OurStock.css';
import Demo1 from './Demo1/Demo1';
import Demo2 from './Demo2/Demo2';
import Demo3 from './Demo3/Demo3';
import Demo4 from './Demo4/Demo4';
import Demo5 from './Demo5/Demo5';
import Demo6 from './Demo6/Demo6';
import Demo7 from './Demo7/Demo7';
import Demo8 from './Demo8/Demo8';
import Demo9 from './Demo9/Demo9';
import Demo10 from './Demo10/Demo10';
import Demo11 from './Demo11/Demo11';
import Demo12 from './Demo12/Demo12';
import Demo13 from './Demo13/Demo13';
import Demo14 from './Demo14/Demo14';
import Demo15 from './Demo15/Demo15';




class OurStock extends Component {
constructor(props){
  super(props);
  this.myRef = React.createRef();
 
  
  
  // Set initial state
  this.state = {msg : <Demo1/>}
  
  // Binding this keyword
  this.handleClick = this.handleClick.bind(this)
  this.handleClick2 = this.handleClick2.bind(this)
  this.handleClick3 = this.handleClick3.bind(this)
  this.handleClick4 = this.handleClick4.bind(this)
  this.handleClick5 = this.handleClick5.bind(this)
  this.handleClick6 = this.handleClick6.bind(this)
  this.handleClick7 = this.handleClick7.bind(this)
  this.handleClick8 = this.handleClick8.bind(this)
  this.handleClick9 = this.handleClick9.bind(this)
  this.handleClick10 = this.handleClick10.bind(this)
  this.handleClick11 = this.handleClick11.bind(this)
  this.handleClick12 = this.handleClick12.bind(this)
  this.handleClick13 = this.handleClick13.bind(this)
  this.handleClick14 = this.handleClick14.bind(this)
  this.handleClick15= this.handleClick15.bind(this)

      
      

}



handleClick(){
  
  // Changing state
  this.setState({msg : <Demo1/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick2(){
  
  // Changing state
  this.setState({msg : <Demo2/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick3(){
  
  // Changing state
  this.setState({msg : <Demo3/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick4(){
  
  // Changing state
  this.setState({msg : <Demo4/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick5(){
  
  // Changing state
  this.setState({msg : <Demo5/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick6(){
  
  // Changing state
  this.setState({msg : <Demo6/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick7(){
  
  // Changing state
  this.setState({msg : <Demo7/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick8(){
  
  // Changing state
  this.setState({msg : <Demo8/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick9(){
  
  // Changing state
  this.setState({msg : <Demo9/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick10(){
  
  // Changing state
  this.setState({msg : <Demo10/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick11(){
  
  // Changing state
  this.setState({msg : <Demo11/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick12(){
  
  // Changing state
  this.setState({msg : <Demo12/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}


handleClick13(){
  
  // Changing state
  this.setState({msg : <Demo13/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick14(){
  
  // Changing state
  this.setState({msg : <Demo14/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}

handleClick15(){
  
  // Changing state
  this.setState({msg : <Demo15/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth' })
}


 
  
render(){
 

  return (
      <div>
      
            
            <div className='button-component-main-styling ' >


              <div className='button-component-styling pv2'>
                <button className='mr2 button-component-styling-actual-button shadow-5 br1 ' style={{'width':'50%', 'height':'50px'}} onClick={this.handleClick}> Household Sanitation and Personal Hygiene Items </button>
                <button className='mh2 button-component-styling-actual-button shadow-5 br1' style={{'width':'30%', 'height':'50px'}} onClick={this.handleClick2}> Diagnostic Equipment </button>
                <button className='ml2 button-component-styling-actual-button shadow-5 br1' style={{'width':'20%', 'height':'50px'}} onClick={this.handleClick3}>X-ray Equipment</button>
              </div>

              <div className='button-component-styling pv2'> 
                <button className='mr2 button-component-styling-actual-button shadow-5 br1' style={{'width':'30%', 'height':'50px'}}  onClick={this.handleClick4}>X-ray Protection Accessories </button>
                <button className='mh2 button-component-styling-actual-button shadow-5 br1' style={{'width':'20%', 'height':'50px'}}  onClick={this.handleClick5}>X-ray Accessories </button>
                <button className='ml2 button-component-styling-actual-button shadow-5 br1' style={{'width':'50%', 'height':'50px'}}  onClick={this.handleClick6}> Operating and Theater Room Equipment </button>
              </div> 

              <div className='button-component-styling pv2'>
                <button className='mr2 button-component-styling-actual-button shadow-5 br1' style={{'width':'40%', 'height':'50px'}}  onClick={this.handleClick7}> Laboratory and Research Equipment </button>
                <button className='mh2 button-component-styling-actual-button shadow-5 br1' style={{'width':'40%', 'height':'50px'}} onClick={this.handleClick8}> Laboratory And Research Consumables </button>
                <button className='ml2 button-component-styling-actual-button shadow-5 br1'  style={{'width':'20%', 'height':'50px'}} onClick={this.handleClick9}> Ent Instruments </button>
              </div>

              <div className='button-component-styling pv2'>
                <button className='mr2 button-component-styling-actual-button shadow-5 br1' style={{'width':'25%', 'height':'50px'}} onClick={this.handleClick10}> Dental Equipment </button>
              <button className='mh2 button-component-styling-actual-button shadow-5 br1' style={{'width':'25%', 'height':'50px'}} onClick={this.handleClick11}> Ultrasound Equipment </button>
              <button className='ml2 button-component-styling-actual-button shadow-5 br1' style={{'width':'50%', 'height':'50px'}}  onClick={this.handleClick12}> Maternal And Infant Care Equipment</button>
              </div>

              <div className='button-component-styling pv2'>
                <button className='mr2 button-component-styling-actual-button shadow-5 br1' style={{'width':'40%', 'height':'50px'}} onClick={this.handleClick13}> Obstetrics And Gynecology Equipment </button>
                <button className='mh2 button-component-styling-actual-button shadow-5 br1' style={{'width':'20%', 'height':'50px'}}  onClick={this.handleClick14}> Hospital Furniture </button>
                <button className='ml2 button-component-styling-actual-button shadow-5 br1' style={{'width':'40%', 'height':'50px'}}  onClick={this.handleClick15}> Other Medical Equipment And Consumables </button>
              </div>
            
         
            </div>


             
             <p className='mv4 pv4' ref={this.myRef}  >{this.state.msg}</p>

      </div>
  )
}
}

export default OurStock;
