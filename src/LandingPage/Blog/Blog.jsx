import Lottie from "lottie-react";
import bloganimition from "../../assets/contentCreation.json";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";


const Blog = () => {

  const [topArticels, setTopArticels] = useState([])

  useEffect(() => {
    fetch("topArticels.json")
      .then(res => res.json())
      .then(data => setTopArticels(data))
  }, [])




  return (
    <div className="">
      <div className="md:flex items-center my-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">Journey to Success: Unleash Your Potential Through Our Articles</h1>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={bloganimition} loop={true} />
        </div>
      </div>
      <div className="grid md:gird-cols-2 lg:grid-cols-3">
        {
          topArticels.map(article => <BlogCard></BlogCard>)
        }
      </div>
    </div>
  );
};

export default Blog;
