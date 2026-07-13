export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-around h-20 align-middle items-center fixed top-0 left-0 z-50 bg-white w-full shadow-md">
        <div className="font-extrabold text-3xl"><span className="text-blue-600">PRO</span>CONNECT</div>
        <div className="gap-5 flex font-semibold text-l  ">
          <a className="hover:text-blue-600"href="/home">Home</a>
          <a className="hover:text-blue-600"href="">Explore</a>
          <a className="hover:text-blue-600"href="">How it Works</a>
          <a className="hover:text-blue-600"href="">About Us</a>
          <a className="hover:text-blue-600"href="">Pricing</a>
          <a className="hover:text-blue-600"href="">Contact</a>
        </div>
        <div className="flex gap-4">
            <button className="text-black hover:text-blue-600 font-semibold">Login</button>
            <button className="text-white bg-blue-600 border border-blue-600 rounded-xl font-semibold w-{60} p-3 hover:text-blue-600  hover:bg-white">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
