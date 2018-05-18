import React from 'react';
import Slick from 'react-slick';
import {Link } from 'react-router-dom';

import Style from './slider.css'


const SliderTemplates = (props) => {
   //console.log(props);
   let template = null;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
            ...props.settings
    };

    switch (props.type){
        case ('featured'):
            template = props.data.map((item,i) =>{
                return (
                    <div key={i}>
                        <div className={Style.fetured_item}>
                            <div className={Style.fetured_image}>
                                <img src={`../images/articles/${item.image}`} alt={item.image}  className={Style.featured_image_singel} />
                                <Link to={`articles/${item.id}` } className={Style.featured_caption}><div> {item.title} </div></Link>
                            </div>
                        </div>
                    </div>
                )
            });
            break;
        default:
            template = null;
    }

    return(
        <div>
            <Slick {...settings}>
                {template}
            </Slick>
        </div>
    )
};
export default SliderTemplates;