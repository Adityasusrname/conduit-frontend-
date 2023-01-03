import './ArticlePageFooter.css'
function ArticlePageFooter(props){

    var image = props.article.author.image
    var date = new Date(new Date(props.article.createdAt).getTime()).toString().substring(4,15)
    var username = props.article.author.username
    var favoritesCount = props.article.favoritesCount

    console.log(props.article)

    return(

        <div id="ArticlePageFooterContainer">

            <div className="ArticleInfo">
                  <div className='ImageContainer'><div id='Image'><img src={image}/></div></div>
                  <div className='NameAndDateContainer'>
                    <div id='Username'>{username}</div>
                    <div id="Date">{date}</div>
                    </div>

                </div>


            <div >
                        <button id="FollowButton">+Follow {username}</button>
                        <button id="LikeButton">Favourite Article({favoritesCount})</button>
            </div>

        </div>

    )

}

export default ArticlePageFooter