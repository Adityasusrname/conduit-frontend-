import ArticlePageFooter from "./ArticlePageFooter"
import './ArticlePageHeader.css'

function ArticlePageHeader(props){


    return(
        <div id="ArticlePageHeaderContainer">

           <div id="HeaderBox">

         
        <h1 id="TitleOfArticle">{props.article.title}</h1> 

            <ArticlePageFooter article={props.article}/>

                
        </div>

        </div>
    )

}

export default ArticlePageHeader