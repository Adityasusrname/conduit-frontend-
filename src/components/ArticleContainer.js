import './ArticleContainer.css'

function ArticleContainer(props){

    var title= props.title
    var description = props.description


    console.log("Hello!!!")

    return(
        <center>
        <div className="ArticleContainer">

            <div className="ArticleHeading">

                <div className="AuthorandTime">
                  <h3>Hello I am author</h3>
                </div>

                <div className="Likes">

                    <h3>Hello I am likes!</h3>

                </div>

            </div>
            <h2>{title}</h2>
            <h3>{description}</h3>

        </div>
        </center>
    )
    


}

export default ArticleContainer;