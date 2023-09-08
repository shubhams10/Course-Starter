import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
  let course= props.course;
  let likedCourse=props.likedCourse;
  let setLikedCourse=props.setLikedCourse;
  function clickHandler(){
    if(likedCourse.includes(course.id)){
      setLikedCourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
      toast.warning("Like Removed");
    }
    else{
      if(likedCourse.length===0){
        setLikedCourse([course.id]);
      }
      else{
        setLikedCourse((prev)=>[...prev,course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="bg-bgDark w-[300px] bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative ">
            <img src={course.image.url}/>
            <div className="w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-12px] grid place-items-center">
            <button onClick={clickHandler}>
            {
              likedCourse.includes(course.id)?( <FcLike fontsize="1.75rem"/>):( <FcLikePlaceholder fontsize="1.75rem"/>)
            }
            </button>
            </div>
        </div>
        <div>
            <p className="text-white font-semibold text-md leading-6">{course.title}</p>
            <p className="mt-2 text-white text-sm">
              {
                course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
              }
            </p>
        </div>
    </div>
  )
}

export default Card