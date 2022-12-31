import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function PageContainer(props){

   var pageOption = <Home/>
   
    if(props.pageOption==='Home')
    pageOption = <Home/>
    else if(props.pageOption==='SignIn')
    pageOption = <SignIn/>
    else if(props.pageOption==='SignUp')
    pageOption=<SignUp/>

    return(
        <div className="Page">
            {pageOption}
        </div>
    )
}
export default PageContainer;