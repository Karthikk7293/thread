
function index() {
  const handleLogin = (e) => {
    try {
      e.preventDefault()
      

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={`flex min-h-screen max-w-md  items-center  flex-col justify-around mx-auto  px-3 `}>

      <div className='  py-2 w-full  rounded-xl h-[85vh] '>
        <img src={'/images/banner.webp'} alt='' className='w-full my-auto  h-full rounded-md' />
      </div>
      <div onClick={handleLogin} className='shadow-md shadow-slate-900 h-[8vh] w-full mb-10 rounded-xl flex justify-between items-center px-3'>
        <p className='font-medium tracking-widest' >Login with
          <span className='text-blue-500'> G</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span></p>
        <img src={'/images/logo.webp'} alt='' className='w-[3vh] my-auto' />
      </div>
    </div>
  )
}

export default index