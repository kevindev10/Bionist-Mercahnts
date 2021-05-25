import React from 'react';
import './OurStockPhotos.css';
import Demo1 from './Demo1/Demo1';
import Demo2 from './Demo2/Demo2';
import Demo3 from './Demo3/Demo3';
import Demo4 from './Demo4/Demo4';
import Demo5 from './Demo5/Demo5';




class OurStockPhotos extends React.Component {
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
  

      
      

}



handleClick(){
  
  // Changing state
  this.setState({msg : <Demo1/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}

handleClick2(){
  
  // Changing state
  this.setState({msg : <Demo2/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}

handleClick3(){
  
  // Changing state
  this.setState({msg : <Demo3/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}

handleClick4(){
  
  // Changing state
  this.setState({msg : <Demo4/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}

handleClick5(){
  
  // Changing state
  this.setState({msg : <Demo5/>})
  this.myRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" })
}



	render(){
		 return (
		    <div className="">
		       


         
            

          

   
        <div className='tc mt4' style={{'list-style':'none'}}>
            <div className="pagination ">
             
              <button className='pagination-buttons shadow-5 br2' onClick={this.handleClick} >1</button>
              <button className='pagination-buttons shadow-5 br2' onClick={this.handleClick2} >2</button>
              <button className=' pagination-buttons shadow-5 br2'  onClick={this.handleClick3}>3</button>
              <button className='pagination-buttons shadow-5 br2' onClick={this.handleClick4}>4</button>
              <button className='pagination-buttons shadow-5 br2' onClick={this.handleClick5}>5</button>
              
             
            </div>
          </div>





            


             
             <p className=' ' ref={this.myRef}  >{this.state.msg}</p>


          
   


		    </div>
		  );
  }
}
 

export default OurStockPhotos;
