import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'
const Allcourses = () => {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ifaz5/fd/main/fd1.json`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="courses container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    courses.map((course) => (

                        <div class="col">
                            <div class="card-container h-100">
                                <img className=" img" src={course.image} alt="" />
                                <div class="card-body">
                                    <h4 >{course.name}</h4>
                                    <p class="card-text">{course.description}</p>
                                    <h4>${course.price}</h4>

                                </div>
                            </div>
                        </div>


                    ))

                }

            </div>
        </div>
    );
};

export default Allcourses;