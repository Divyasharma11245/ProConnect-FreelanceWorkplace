

export default function NavbarHome(){
    return(
        <>
        <div className="flex flex-row justify-around items-center h-20 w-full border border-gray-400">
             <div className="font-extrabold text-xl"><span className="text-blue-600">PRO</span>CONNECT<i class="fa-solid fa-bars ml-10"></i></div>
             
             <div className="search w-1/3">
                <input  className="w-5/6 p-2 border backdrop-opacity-100 bg-gray-100 hover:border-blue-600 rounded-xl border-gray-100"placeholder="Search for Projects,Freelancers..."/>
             </div>
             <div className="gap-10 flex">
                <span className="message text-xl cursor-pointer"><i class="fa-regular fa-message"></i></span>
                <span className="notification text-xl cursor-pointer"><i class="fa-regular fa-bell"></i></span>
             </div>
             <div className="user flex flex-row items-center cursor-pointer">
                <div className="bg-amber-300  rounded-full p-5 m-5 "></div>
                <div classn>
                    <div>Jatin Verma</div>
                    <div>Client</div>
                    
                </div>
                <div><i class="fa-solid fa-chevron-down ml-5"></i></div>
             </div>
        </div>
        </>
    )
}