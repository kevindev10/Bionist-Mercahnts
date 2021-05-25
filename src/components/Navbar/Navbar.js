import React,{useState} from 'react';

import{Link} from 'react-router-dom';


import './Navbar.css';


function Navbar() {
	const[click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick (false);

	

	/*//////////////////////////////////////////////////////////////////////////*/

	

	/*//////////////////////////////////////////////////////////////////////////*/

  return (
	<div >
		 <nav className='navbar'>
		 	
		 	<div className='menu-icon' onClick ={handleClick} >
		 		<i className={click ? 'fas fa-times ' : 'fas fa-bars fa-border'}/>
		 	</div>
		 	<ul className={click ? 'nav-menu active' : 'nav-menu'}>

			 	<li className ='nav-item '>
			 		<Link exact to='/' className='nav-links' onClick ={closeMobileMenu}>
			 			Home
			 		</Link>
			 	</li>

			 	<li className ='nav-item'>
			 		<Link  to='/about' className='nav-links' onClick={closeMobileMenu}>
			 			About 
			 		</Link>
			 		
			 	</li>

			 	<li className='nav-item'>
		            <Link  to='/gallery' className='nav-links' onClick={closeMobileMenu}>
		            	 Gallery
		            </Link>
	          </li>

			 	<li className ='nav-item'>
			 		<Link  to='/team' className='nav-links' onClick ={closeMobileMenu}>
			 			Team
			 		</Link>
			 	</li>	
			 	<li className ='nav-item'>
			 		<Link  to='/contact' className='nav-links' onClick ={closeMobileMenu}>
			 			Contact
			 		</Link>
			 	</li>	

			 	

		 	</ul>
		 	
		 </nav> 
	</div>
  );
}

export default Navbar;
