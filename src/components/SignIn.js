import './Authentication.css'
function SignIn(){
    return(
        <div className="SignInForm">
                 <h1>Sign In</h1>
                 <input name="Email" placeholder="Email" />
                 <br/>
                 <input name="Password" placeholder="Password"/>
                 <br/>
                 <button>Sign In</button>
        </div>
    )
}

export default SignIn;