import './ArticleContainer.css'

function ArticleContainer(props){


    console.log(props)
        
    var title= props.title
    var description = props.description
    var username = props.username
    var date = new Date(new Date(props.date).getTime()).toString().substring(4,15)
    var image = props.image
    var favoritesCount = props.favoritesCount


    console.log("Hello!!!")

    return(
        <center>
        <div className="ArticleContainer">

            <div className="ArticleHeading">

                <div className="ArticleInfo">
                  <div className='ImageContainer'><div id='Image'><img src={image}/></div></div>
                  <div className='NameAndDateContainer'>
                    <div id='Username'>{username}</div>
                    <div id="Date">{date}</div>
                    </div>

                </div>

                <div className="LikeButtonContainer">

                    <button id='LikeButton'>{favoritesCount}</button>

                </div>

            </div>
            <h2>{title}</h2>
            <h3 id="Description">{description}</h3>

        </div>
        </center>
    )
    


}

export default ArticleContainer;