import { useEffect, useState } from 'react';
import { store } from '../store/GlobalState';

import './Page.css';
import PageContainer from './PageContainer';

function Page(props){


    var pageOption = props.pageOption
   

    useEffect(() => {
       
      
        document.getElementById(pageOption).style.color='rgba(0, 0, 0, 0.8)'
      
      }, [pageOption]);

  var pageContainer =   <PageContainer pageOption={pageOption}/>
   
   


    return(
        
        <div className='Page'>
           
           <div className="NavBar">

          <div className="Heading">
         <h3 id="heading">conduit</h3>
         </div>

       <div className="NavOptionsContainer">

       <div className='NavOptions'>
       <h3 onClick={HomeClicked} id='Home'>Home</h3>
       <h3 onClick={SignInClicked} id='SignIn'>Sign in</h3>
      <h3  onClick={SignUpClicked} id='SignUp'>Sign Up</h3>
        
     
     
    </div>
   
             </div>

           </div>

     {pageContainer}
     


        </div>
       
    )

    function HomeClicked(event){
        document.getElementById(pageOption).style.color='rgba(0, 0, 0, 0.3)'
        store.dispatch({type:'Set/Home'})
        
       
    }
    function SignInClicked(event){
        document.getElementById(pageOption).style.color='rgba(0, 0, 0, 0.3)'
        store.dispatch({type:'Set/SignIn'})
       
    }
    function SignUpClicked(event){
        document.getElementById(pageOption).style.color='rgba(0, 0, 0, 0.3)'
        store.dispatch({type:'Set/SignUp'})
       
      
    }
   

   

   
  
}

export default Page