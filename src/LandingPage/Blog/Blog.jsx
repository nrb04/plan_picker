import Lottie from "lottie-react";
import bloganimition from "../../assets/contentCreation.json";


const Blog = () => {
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
    </div>
  );
};

export default Blog;
