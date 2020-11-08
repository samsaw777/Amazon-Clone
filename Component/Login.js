import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase';
// import Amazon from './amazon.png'
function Login(){
    const history = useHistory()
    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')
    const login = event =>{
        event.preventDefault();
        //Login Logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //login sucessfully
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //created a new user
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
    return(
        <div className="login">
            <Link to="/">
            <img 
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="Amazon image"
            />
            </Link>
            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} className="login_signin" type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Condition of Use & Scale. Please see our Privacy Notice, our Cookies Notice and iur interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registration">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login