import ArticleContainer from "./ArticleContainer"

function ArticlesContainer(props){

    const articles = props.articles
   console.log(articles)
    const listArticles = articles.map((article,id)=>{

        
       
    return (<ArticleContainer title={article.title} description={article.description} username={article.author.username} date={article.createdAt}
             image={article.author.image} favoritesCount={article.favoritesCount}
    />)

     
    })

    console.log(listArticles);

    return(
        <div>
        
        {listArticles}
        </div>
    )

}

export default ArticlesContainer;