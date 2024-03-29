import '../css/signup.css'
import { useState } from 'react'
import Login from './Login'

const SignUp = () => {
    
    const [emailid,setEmailid] = useState ('')
    const [username,setUsername] =useState('')
    const [nm,setNm] =useState('')
    const [login,setLogin]=useState(false)

    const onSubmit =(e) => {
        e.preventDefault()

        if(!emailid || !username) {
            alert('Please Fill the details')
            return
        }
        //post data

        setEmailid('')
        setUsername('')
        
    }
    const onLogin=(e)=>{
        e.preventDefault()
        setLogin(true)
    }
    return (
        <div className="card">
                <form className="form_add">
                <div className="form_control">
                        <label>Name:</label>
                        <input type='text' value={nm}
                onChange={(e)=> setNm(e.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label>Email Id:</label>
                        <input type='text' value={emailid}
                onChange={(e)=> setEmailid(e.target.value)}/>
                    </div>
                    <div className="form_control">
                        <label>Username:</label>
                        <input type='text' value={username}
                onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                </form>
                <input type='submit' value='Create Account' className='createacc btn' onClick={onSubmit} />
                <p className='failedcreateacc'>Already have Account?<button className='btn login' onClick={onLogin}>Login</button> </p>
                
        </div>
        
    )
}

export default SignUp
