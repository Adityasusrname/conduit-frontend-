import { useEffect, useState } from "react";
import ArticlesContainer from "./ArticlesContainer";
import Header from "./Header";
import './Home.css'
import FeedNavBar from "./FeedNavBar";

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