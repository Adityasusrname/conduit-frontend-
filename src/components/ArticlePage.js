import { useEffect, useState } from "react";
import { store } from "../store/GlobalState";
import ArticlePageHeader from "./ArticlePageHeader";
import './ArticlePage.css'
import TagsContainer from "./TagsContainer";
import ArticlePageFooter from "./ArticlePageFooter";

function ArticlePage(){


    const [article,setArticle] = useState(null)
    const [fetched,setFetched] = useState(false)

    useEffect(()=>{
       
    },[article])
   
    if(fetched==false)
    {
        fetch(`https://api.realworld.io/api/articles/${store.getState().Slug}`).then(data=>{
            return data.json()
        }).then(response=>{
            setFetched(true)
            setArticle(response.article)
            
        })
    }
  
    if(article==null)
    {
        return(
            <h1>Loading Article....</h1>
        )
    }
    else{
        return(
            <div>
              <ArticlePageHeader article={article}/> 
              <div id="ArticleBodyContainer">
                <div id="BodyBox">
              {article.body}
              <TagsContainer tags={article.tagList}/>
              <div id="ArticlePageFooter">
              <ArticlePageFooter article={article}/>
              </div>
             
              </div>
              </div>
            </div>
        )
    }
}

export default ArticlePage;