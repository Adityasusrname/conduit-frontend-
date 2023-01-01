import { useEffect, useState } from "react";
import ArticlesContainer from "./ArticlesContainer";
import FeedNavBar from "./FeedNavBar";
import Header from "./Header";

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
            <FeedNavBar/>
           {articlesList}
           

        </div>
    )
}

export default Home;