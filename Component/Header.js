import React from 'react'
import '../App.css'
import Amazon from './amazon.png'
import {Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../StateProvider'
import {auth} from './Firebase'
function Header() { 
        const [{basket, user}, dispatch] = useStateValue();
        const login = ()=>{
            if (user){
                auth.signOut();
            }
        }
        console.log(basket)
    return (
        <nav className="header">
            {/* Logo on the left hand side of the navbar */}
            <Link to="/">
                <img src={Amazon} alt="Amazon Logo" className='header-logo'/>
            </Link>
            
            {/* search box */}
            <div className="header_search">
            <input type="text" className="header_searchinput" />
            <SearchIcon className="header_searchicon"/>
            </div>

            {/* 3 links */}
            <div className="header_nav">
                {/* 1st link */}
                    <Link to={!user && "/login"} className="header_link">
                        <div  onClick={login}  className="header_option">
                            <span className="header_optionlineone">Hello{user?.email}</span>
                            <span className="header_optionlinetwo">{user? 'Sign Out':'Sign up'}</span>
                        </div>
                    </Link>
                {/* 1st link */}
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className="header_optionlineone">Returms</span>
                            <span className="header_optionlinetwo">& Orders</span>
                        </div>
                    </Link>
                {/* 1st link */}
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className="header_optionlineone">Your</span>
                            <span className="header_optionlinetwo">Prime</span>
                        </div>
                    </Link>
                {/* 1st link */}

            </div>
            {/* basket icon with number */}
             <Link to="/checkout" className="header_link">
                <div className="header_optionbasket">
                <ShoppingBasket />
                <span className="header_opitonlinetwo basket_count">{basket?.length}</span>
                </div>
             </Link>
        </nav>
    )
}


export default Header
