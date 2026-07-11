import { Users, Briefcase, Trophy, UserCheck } from "lucide-react";
import heroImage from "../utils/heroImage.jpeg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar"
export default function LandingPage() {
  const information = [
    {
      info: "10000+",
      description: "Registered Users",
      icon: Users,
    },
    {
      info: "4500+",
      description: "Projects Passed",
      icon: Briefcase,
    },
    {
      info: "2800+",
      description: "Freelancers",
      icon: UserCheck,
    },
    {
      info: "98%",
      description: "Successful Projects",
      icon: Trophy,
    },
  ];
  const process = [
    {
      line: "Post Your Project",
      description:
        "Share your project details and requirements in just a few minutes",
    },
    {
      line: "Receive Proposals",
      description:
        "Get Proposals from qualified freelancers and compare their profiles and reviews",
    },
    {
      line: "Hire & Collaborate",
      description:
        "Choose the best freelancer and start collaborating to get things done.",
    },
  ];
  return (
    <>
    <Navbar/>
      <div className="landing-page-container flex-1 border-blue-200">
        <div className="container-landing m-0 pb-6  flex flex-col bg-blue-100 h-2/3 w-full ">
          
          <div className="hero m-6  ml-36 h-full  w-4/5 flex flex-row">
            <div className="left-hero h-5/5 w-1/2">
              <p className="mt-10 bg-blue-200 border-blue-300 border-2 p-1.5 text-sm ml-2 w-fit rounded-lg text-blue-600 font-bold">
                <i class="fa-solid fa-file-shield"></i> &nbsp;The Most Trusted
                Freelance Platform
              </p>
              <h2 className=" text-5xl mt-10 font-bold">Connect. Collaborate. </h2>
              <h2 className=" text-5xl font-bold text-blue-600 mt-2">Create.</h2>
              <p className=" w-4/5 mt-5 opacity-75 ">
                ProConnect hepls businesses find their perfect freelancers and
                empowers talent to build their dream careers
              </p>
              <span className="landing-buttons">
                <button className=" bg-blue-600 text-white rounded-xl  ml-5 p-3  mt-5 cursor-pointer">
                  Hire a FreeLancer&nbsp;<i class="fa-solid fa-right-long"></i>
                </button>
                &nbsp;&nbsp;
                <button className=" bg-white  p-3 ml-5 text-blue-600 border-blue-600 border-2 rounded-xl rounded-xlcursor-pointer">
                  Find Work &nbsp;<i class="fa-solid fa-right-long"></i>
                </button>
              </span>
              <div className="reviews">
                <span className="">
                 
                  <div className="ml-32 mt-5 text-amber-400"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                  <div className="ml-10 mb-10">
                    Trusted by 10,000+ users worldwide
                  </div>
                </span>
              </div>
            </div>
            <div className="right-hero  w-1/2">
              <img className="rounded-xl" src={heroImage} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 h-20 ">
          {" "}
          <div className="info-landing-page border-2 border-blue-300 w-3/4 rounded-xl text-center align-middle flex flex-row justify-around items-center">
            {information.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-row items-center justify-center"
                >
                  <div>
                    {" "}
                    <Icon
                      className="mr-3 bg-blue-400 rounded-full p-1"
                      size={32}
                    />
                  </div>

                  <div>
                    <h2 className="">
                      <b>{item.info}</b>
                    </h2>
                    <p className="">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-row justify-center align-middle text-center">
          {" "}
          <div className="w-1/4"></div>
          <div className="working-landing-page p-6 w-1/2 mt-5 border-2 rounded-xl border-blue-300 flex flex-col justify-center text-center">
            <div className="text-2xl font-bold text-blue-500">How ProConnect Work</div>
            <div className=" mb-10 text-sm opacity-70">
              Three Simple Steps to get your work done.
            </div>
            {process.map((item, index) => {
              return (
                <div
                  className=" text-center justify-center align-middle flex flex-col    "
                  key={index}
                >
                  <div>
                    {index != 0 && (
                      <i class="fa-solid fa-arrow-down-long m-3"></i>
                    )}
                  </div>

                  <span className="font-bold">
                    {index + 1}.&nbsp;{item.line}
                  </span>
                  <p className="opacity-60">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="w-1/4"></div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
}
