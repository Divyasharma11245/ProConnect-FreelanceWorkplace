export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-around h-20 align-middle items-center ">
        <div className="font-extrabold text-3xl"><span className="text-blue-600">PRO</span>CONNECT</div>
        <div className="gap-5 flex font-semibold text-l  ">
          <a className="hover:text-blue-600"href="/home">Home</a>
          <a className="hover:text-blue-600"href="">Explore</a>
          <a className="hover:text-blue-600"href="">How it Works</a>
          <a className="hover:text-blue-600"href="">About Us</a>
          <a className="hover:text-blue-600"href="">Pricing</a>
          <a className="hover:text-blue-600"href="">Contact</a>
        </div>
        <div className="flex gap-5">
            <button className="text-black hover:text-blue-600 font-semibold">Login</button>
            <button className="text-white bg-blue-600 rounded-xl font-semibold w-{60} p-3 hover:text-blue-600 hover:border-1 hover:bg-white hover:border-blue-600">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
