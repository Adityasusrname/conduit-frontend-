import { useEffect, useState } from 'react';
import './Page.css';
import PageContainer from './PageContainer';

function Page(){

    const [page,setPage] = useState('Home')
    const [optionClicked,setoptionClicked] = useState('Home')

  var pageContainer =   <PageContainer pageOption={page}/>
   
    useEffect(()=>{
        document.getElementById(optionClicked).style.color='rgba(0, 0, 0, 0.8)'
        
    },[optionClicked])

    useEffect(()=>{
           pageContainer = <PageContainer pageOption={page}/>
    },[page])
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
        document.getElementById(optionClicked).style.color='rgba(0, 0, 0, 0.3)'
        setoptionClicked(event.target.id)
        setPage('Home')
    }
    function SignInClicked(event){
        document.getElementById(optionClicked).style.color='rgba(0, 0, 0, 0.3)'
        setoptionClicked(event.target.id)
         setPage('SignIn')
    }
    function SignUpClicked(event){
        document.getElementById(optionClicked).style.color='rgba(0, 0, 0, 0.3)'
        setoptionClicked(event.target.id)
        setPage('SignUp')
    }

   

   
  
}

export default Page