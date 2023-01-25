import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Trending from '../../Shered/Trending/Trending';
import HomeBolg from './HomeBolg';
import './HomeBolgs.css'

const HomeBolgs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='container'>
           <div className='mb-5'>
           <Trending title={'Blog'} subtitle={'Our Latest'}/>
           </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    blogs.slice(0,3).map(bolg => <HomeBolg key={bolg.id} bolg={bolg}></HomeBolg>)
                }
            </div>
        </div>
    );
};

export default HomeBolgs;
