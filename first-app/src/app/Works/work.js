import React from 'react';
import './work.css'
import Portfolio1 from '../../assets/page11.jpg';
import Portfolio2 from '../../assets/site.png';
import Portfolio3 from '../../assets/page22.jpg';
import Portfolio4 from '../../assets/page33.jpg';

const Works=()=>{
    const workArr =[
        {
            id:1,
            img_url: Portfolio1,
            title: "Portfolio 1"
        },
        {
            id:2,
            img_url: Portfolio2,
            title: "Portfolio 2"
        },
        {
            id:3,
            img_url: Portfolio3,
            title: "Portfolio 3"
        },
        {
            id:4,
            img_url: Portfolio4,
            title: "Portfolio 4"
        }
    ]
    return( 

    <section id='works'>
        <h1 className="worksTitle">My Portfolio</h1>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel <br /> perfect . I am excited to bring my skills and experience to help businessess <br /> achive their goals and create a strong online presence</span>
        <div className="work-images">
            {workArr.map((item)=>(
                <div key={item.id} className='work_image_item'>
                    <img src={item.img_url} alt={item.title} />
                </div>
            ))}
        </div>

        <button className="workBtn">
            <a href="https://github.com/Anindoroyapu">See More.</a>
        </button>
    </section>


    );
}


export default Works;