import './TagContainer.css'
function TagsContainer(props){
    var tags = props.tags
    
    var listtags = tags.map((tag,id)=>{
        
        return <div className="Tag" key={id}>{tag}</div>
    })
    return (
       <div id="TagListContainer">{listtags}</div> 
    )
}
export default TagsContainer