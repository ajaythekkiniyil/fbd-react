import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { allDoctorsUrl } from './constants'
import { Link } from 'react-router-dom'
function Page() {
    const [allDoctors, setAllDoctors] = useState([])
    useEffect(() => {
        axios.get(allDoctorsUrl).then((resp) => {
            setAllDoctors(resp.data.data)
        })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <h5>Doctors List</h5>
                </div>
                <ul>
                    {
                        allDoctors.map((eachDoctor,index)=>{
                            return(
                                <Link to={eachDoctor.attributes.slug}  key={index}>
                                    <li>{eachDoctor.attributes.name}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Page