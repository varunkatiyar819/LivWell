import ResponsiveAppBar from "./ResponsiveAppBar";
import Carousels from "./Carousels";
import Search from "./Search";
import CardsNew from "./CardsNew";
import Testimonials from "./Testimonialss";
import Info from "./Info";
import Footer from "./Footer_Home";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";


function HomePage() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/new");
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [posts.length]);

  const [loggedIn, setloggedIn] = useState(true);

  const userLogin = (isLogin)=>{
    setloggedIn(isLogin);
  }

  return (
    <>
      <div className="fluid-container" style={{height: "100vh", width: "auto", position: "relative", overflowX: "hidden !important"}}>
      <ResponsiveAppBar loggedIn = {loggedIn} userLogin = {userLogin}/>
      <Carousels />
      <Search/>
      </div>

      <div className="container">
      <h2 className="text-center my-4" ><strong>PROPERTIES</strong></h2>
      <Posts details = {posts}/>
      </div>

      <div className="container row" style={{width: "100%", padding: "0", margin: "auto"}}>
        <div className="col-md-4 col-sm-12">
      <Testimonials  name="Anik Mukherjee"
       tagl="Comfortable Stay!! Thanks a lot." desc="" likes={20} disl = {3}/>
       </div>
       <div className="col-md-4 col-sm-12">
       <Testimonials  name="Ritesh Parkhi" 
      tagl="Got my Flat. At a very affordable Price." desc="" likes={17} disl = {4}/>
       </div>
       <div className="col-md-4 col-sm-12">
       <Testimonials  name="Mihir Patwari" 
      tagl="Amazing Portal.. Very helpful for outsiders." desc="" likes={10} disl = {2}/>
       </div>
      
     
      </div>
      <Info />
      <Footer />
    </>
  );
}

export default HomePage;
