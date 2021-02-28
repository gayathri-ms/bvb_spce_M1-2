import '../css/signup.css'
import { useState } from 'react'
const SignUp = () => {
    
    const [emailid,setEmailid] = useState ('')
    const [username,setUsername] =useState('')

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
    return (
        <div className="card">
                <form className="form_add">
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
                <p className='failedcreateacc'>Already have Account?<button className='btn login'>Login</button> </p>
        </div>
        
    )
}

export default SignUp
