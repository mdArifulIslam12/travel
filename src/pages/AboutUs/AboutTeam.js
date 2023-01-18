import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Trending from '../Shered/Trending/Trending'
import './AboutTeam.css'
const AboutTeam = () => {
    const [team,setTeam] = useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    },[])
    return (
        <div className='container aboutTeams'>
            <div className="row">
                <div className="col-lg-7">
                    <Trending title={'Special Team'} subtitle={'Our'}/>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {team.map((team)=> <div className="col aboutTeam">
                        <img src={team.img} alt="" />
                        <h4 className='text-center mt-4'>{team.name}</h4>
                        <p className='text-center'>{team.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutTeam;