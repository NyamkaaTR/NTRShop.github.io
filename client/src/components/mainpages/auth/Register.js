import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Бүртгүүлэх</h2>
                <input type="text" name="name" required
                placeholder="Нэр" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Шуудан" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Нууц үг" value={user.password} onChange={onChangeInput} />

                <div className="row">
                    <button type="submit">Бүртгүүлэх</button>
                    <Link to="/login">Нэвтрэх</Link>
                </div>
            </form>
        </div>
    )
}

export default Register