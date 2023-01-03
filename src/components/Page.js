import { useEffect, useState } from 'react';
import { store } from '../store/GlobalState';


import './Page.css';
import PageContainer from './PageContainer';

function Page(props){


    var pageOption = props.pageOption

    console.log(store.getState().prevValue)
   

    useEffect(() => {
       
        
       var currentElement = document.getElementById(pageOption)
       var prevElement = document.getElementById(store.getState().prevValue)

   
   
       if(prevElement!=null){
        prevElement.style.color='rgba(0, 0, 0, 0.3)'
       }
       

       if(currentElement!=null){
        currentElement.style.color='rgba(0, 0, 0, 0.8)'
       }



      

     
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
        
        store.dispatch({type:'Set/Home',prevValue:pageOption})
        
       
    }
    function SignInClicked(event){
       
        store.dispatch({type:'Set/SignIn',prevValue:pageOption})
       
    }
    function SignUpClicked(event){
        
        store.dispatch({type:'Set/SignUp',prevValue:pageOption})
       
      
    }
   

   

   
  
}

export default Page