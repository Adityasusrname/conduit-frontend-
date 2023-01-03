import { useEffect, useState } from "react";
import ArticlesContainer from "./ArticlesContainer";
import Header from "./Header";
import FeedNavBar from "./FeedNavBar";
import './Home.css'

function Home(){

      const [fetched,setFetched] = useState(false)
      const [articlesList,setArticlesList] = useState('loading articles....')

      useEffect(()=>{
       console.log('Hello')
       if(fetched==false)
       {
        fetch("https://api.realworld.io/api/articles").then(data=>{
            return data.json()
        }).then(response=>{
            console.log(response)
            setFetched(true)
            setArticlesList(<ArticlesContainer articles={response.articles}/>)
        })
       }
      },[fetched])
        
        
    
    

    return(
        <div>

            <Header/>
        
            <div id="Feed">

            <FeedNavBar/>
            {articlesList} 

           </div>
           

        </div>
    )
}

export default Home;