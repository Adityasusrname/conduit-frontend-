import './Authentication.css'
function SignUp(){
    return(
        <div className="SignUpForm">
             <h1>Sign Up</h1>
                 <input name="Username" placeholder="Username"/>
                 <br/>
                 <input name="Email" placeholder="Email" />
                 <br/>
                 <input name="Password" placeholder="Password"/>
                 <br/>
                 <button>Sign Up</button>
        </div>
    )
}

export default SignUp;