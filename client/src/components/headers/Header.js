import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Filters from './Filters'
import {AiOutlineShoppingCart } from 'react-icons/ai'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Бүтээгдэхүүн нэмэх</Link></li>
                <li><Link to="/category">Ангилал</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                
                <li><Link to="/history">{isAdmin ? '' : 'Түүх'}</Link></li>
                <li><Link to="/" onClick={logoutUser}>Гарах</Link></li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%" ,
        backgroundColor: '#2e3267'
    }

    return (
        <header>
            <div className="menu" id="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="25" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Админ' : 'NTR SHOP'}</Link>
                </h1>
            </div>
            {
                    !isAdmin && 
                    <Filters />
                }
            <ul style={styleMenu}>
                

                <li><Link to="/">{isAdmin ? '' : 'Дэлгүүр'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Нэвтрэх ✥ Бүртгүүлэх</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <AiOutlineShoppingCart size="30px"/>
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header
