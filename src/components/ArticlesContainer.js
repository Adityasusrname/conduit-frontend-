import ArticleContainer from "./ArticleContainer"


function ArticlesContainer(props){

    const articles = props.articles
  
    const listArticles = articles.map((article,id)=>{

        
      
    return (<ArticleContainer key={id} title={article.title} description={article.description} username={article.author.username} date={article.createdAt}
             image={article.author.image} favoritesCount={article.favoritesCount} tags={article.tagList} slug={article.slug}


    />)

     
    })

   

    return(
        <div>
        
        {listArticles}
        </div>
    )



}

export default ArticlesContainer;