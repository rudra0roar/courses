import React, { useState } from "react";
import Card from "./Card";


const Cards = ({courses , category}) => {

    const allCourses = [];
    // console.log(courses);
    const [likedCourses , setLikedCourses] = useState([]);

    // returns you a list of all courses recieved from the api Response
    const getCourses = () =>{
        
        if(category === "All"){
            console.log("get Courses chal rha h k");
            Object.values(courses).forEach( (courseCategory) =>{
                // console.log(courseCategory);
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            });
            console.log("return tak ponch pa rha h k");
            return allCourses;
        }
        else{
            console.log("else condition mein koi dikkat");
            // main sirf specific category ka array pass kru ga
            return courses[category];

        }
        
    }
    getCourses();
    // getCourses();
    // console.log(allCourses);

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => {
                    return (<Card key={course.id}
                         course = {course}
                         likedCourses = {likedCourses}
                         setLikedCourses = {setLikedCourses}/>);
                }) 
            }
        </div>
    )
}

export default Cards;