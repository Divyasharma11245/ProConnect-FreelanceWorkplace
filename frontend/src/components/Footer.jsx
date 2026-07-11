

export default function Footer() {
  return (
    <footer className="bg-[#071426] text-white">
      <div className="max-w-7xl flex flex-row justify-around mt-10 px-8 py-12  md:grid-cols-5 gap-10">

        <div className="mr-7">
          <h1 className="text-3xl font-extrabold  tracking-wide">
            <span className="text-blue-500">PRO</span>CONNECT
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            Bridging talent and opportunities
            <br />
            to build a better future together.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-5">
            Platform
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Explore</li>
            <li className="hover:text-white cursor-pointer">How It Works</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Enterprise</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-5">
            For Clients
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Post a Project</li>
            <li className="hover:text-white cursor-pointer">Browse Freelancers</li>
            <li className="hover:text-white cursor-pointer">How to Hire</li>
            <li className="hover:text-white cursor-pointer">Success Stories</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-5">
            For Freelancers
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">Find Work</li>
            <li className="hover:text-white cursor-pointer">Create Profile</li>
            <li className="hover:text-white cursor-pointer">Freelancer Resources</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="font-semibold text-xl mb-5">
            Company
          </h2>

          <ul className="space-y-3 text-gray-400 mb-8">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
           </div><div>
          <h2 className="font-semibold text-xl mb-4">
            Follow Us
          </h2>

          <div className="flex gap-4">
            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <i class="fa-brands fa-facebook"></i>
            </div>

            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <i class="fa-brands fa-x-twitter"></i>
            </div>

            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <i class="fa-brands fa-linkedin"></i>
            </div>

            <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              <i class="fa-brands fa-square-instagram"></i>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}