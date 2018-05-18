import React from 'react';
import {Link} from 'react-router-dom';
import Style from './button.css';

const Buttons = (props) => {
    let template = null;
    switch (props.type){
        case "loadmore":
            template = (
                <div className={Style.blue_btn}
                     onClick = {props.loadmore}>
                    {props.cta}
                </div>
            );
            break;
        case "moreVideo":
            template = () => {
             <div>Hi More Video</div>
        };
        default:
            template=null;
    }
    return template;
};

export default Buttons;