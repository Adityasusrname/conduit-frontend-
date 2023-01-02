import './ArticleContainer.css'
import TagsContainer from './TagsContainer'

function ArticleContainer(props){


  
        
    var title= props.title
    var description = props.description
    var username = props.username
    var date = new Date(new Date(props.date).getTime()).toString().substring(4,15)
    var image = props.image
    var favoritesCount = props.favoritesCount
    var tags = props.tags


  

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
            <div id="ArticleFooter">
                  <div id="ReadMore">
                         Read More...
                  </div>
                  <div id="TagsContainer">
                         <TagsContainer tags={tags}/>
                  </div>
            </div>

        </div>
        </center>
    )
    


}

export default ArticleContainer;