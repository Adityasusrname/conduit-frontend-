import ArticleContainer from "./ArticleContainer"
function ArticlesContainer(props){

    const articles = props.articles
   console.log(articles)
    const listArticles = articles.map((article,id)=>{

        
       
    return (<ArticleContainer title={article.title} description={article.description}/>)

     
    })

    console.log(listArticles);

    return(
        <ul>{listArticles}</ul>
    )

}

export default ArticlesContainer;