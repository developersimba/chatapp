import logout from "../assets/logout.png"
import lens from "../assets/lens.png"
import user1 from "../assets/user1.png"
import check from "../assets/check.png"
import user2 from "../assets/user2.png"
import profile1 from "../assets/profile1.png"


const Leftbar = () => {
  return (
    <div className="h-screen">
    <div className='w-72 flex'>
      <h1 className='font-medium mt-3 ml-7'>Conversations</h1>
      <img src={logout} className="w-4 h-4 ml-32 mt-3"/>
    </div>
    <div className="border border-spacing-1 w-60 flex mt-5 ml-7 p-1">
        <img src={lens} className="w-4 h-4 mt-1 ml-3"/>
        <input placeholder="Search" className="outline-none place-content-between"/>
    </div>
    <div className="border border-t-2 mt-3 p-2 ">
        <div className="flex">
        <img src={user1}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2  p-2 ">
        <div className="flex">
        <img src={user2}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2  p-2 ">
        <div className="flex">
        <img src={profile1}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2 p-2 ">
        <div className="flex">
        <img src={user2}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2  p-2 ">
        <div className="flex">
        <img src={profile1}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2  p-2 ">
        <div className="flex">
        <img src={user1}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    <div className="border border-t-2 p-2 ">
        <div className="flex">
        <img src={user1}className="w-9 h-9"/>
      <h1>91567534343</h1>
      <h1 className="ml-16 text-xs text-gray-400">Monday</h1>
        </div>
        <div className="flex">
        <img src={check} className="w-5 h-5 ml-7"/>
        <h1 className="text-sm text-gray-400">how are tgergregregrg</h1>
        </div> 
    </div>
    </div>
  )
}

export default Leftbar
