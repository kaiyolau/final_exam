import React from 'react';
import { Session } from '../requests';
import {NavLink} from 'react-router-dom';


const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <NavLink to='/' >Welcome Page</NavLink>
            |
            {
                currentUser ? (
                    <>
                        <NavLink to='/items/new'>Auction New</NavLink>
                        -
                        <span>Welcome, { currentUser.first_name }</span>
                        -
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/sign_in'>Sign In</NavLink>
                        |
                        <NavLink to='/sign_up'>Sign Up</NavLink>
                        |
                        <NavLink to='/items'>Acuction index</NavLink>

                        <NavLink to='/items/new'>new Acuction</NavLink>
                        |

                    </>
                )
            }
        </nav>
    )
}

export default NavBar;
