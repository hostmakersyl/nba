import React from 'react';
import {Link} from 'react-router-dom';

import Fontawsome from 'react-fontawesome';
import style from './sideNav.css';

const SideNavItem = () => {

    const items = [
        {
            type:style.option,
            icon:'home',
            text:'Home',
            link:'/'
        },
        {
            type:style.option,
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            type:style.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
        {
            type:style.option,
            icon:'sign-in',
            text:'Sign-In',
            link:'/sign-in'
        },
        {
            type:style.option,
            icon:'sign-out',
            text:'Sign-Out',
            link:'/sign-out'
        },
    ];
    const showItems = () => {
        return items.map( (item,i)=>{
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <Fontawsome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    };
    return (
        <div>
            {showItems()}
        </div>
    )
};

export default SideNavItem;