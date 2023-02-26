import React, { Fragment } from 'react'
import NavItem from './NavItem'
import Topbar from './Topbar'
import './Header.css'




const Header = ({carditem}) => {
    return (
        <Fragment>
            <Topbar carditem={carditem} />
            <NavItem />
        </Fragment>
    )
}

export default Header