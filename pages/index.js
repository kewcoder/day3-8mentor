import Link from 'next/link'
export default function Home() {

  return (
   <div className="bg-light dark:bg-dark h-screen w-screen flex overflow-x-scroll" >
      <div className="h-screen w-screen flex bg-img z-0"></div>

      <div className="h-screen w-screen flex z-10 flex-wrap px-8 lg:px-20 items-start ">
        <nav className=" py-10 flex w-full justify-start items-start">
          <Link href='/' >
             <div className="font-bold text-lg">
              <span className="text-primary">8</span> 
              Mentor
             </div>
          </Link>
          <div className="ml-auto flex">
          <Link href='/mentors' >
             <div className="d-none lg:block font-bold text-lg ml-auto border-b-2 border-primary mr-10">
              Find a Mentor
             </div>
          </Link>
          <Link href='#' >
             <div className="font-bold text-lg ml-auto  ">
              Sign
              <span className="text-primary">In</span> 
             </div>
          </Link>
          </div>
        </nav>
        <div className="flex w-full flex-wrap items-start ">
          <h1 className="text-7xl lg:text-8xl w-full font-bold leading-normal tracking-widest" >Ask Directly

          <br />

          <span>to the </span>
                  <span className="text-primary"> Experts</span>
         
          </h1>
          <Link href='/mentors'>
              <div className="bg-primary font-bold px-10 py-4 rounded-xl text-secondary mt-10 hover:opacity-90">
                FIND A MENTOR
              </div>
          </Link>
        </div>
        <nav className="lg:flex mt-3">
          <Link href='/mentors?bussiness' >
             <div className="font-bold text-lg border-b-2 border-primary mr-10">
              Bussiness
             </div>
          </Link>
          <Link href='/mentors?enginering' >
             <div className="font-bold text-lg border-b-2 border-primary mr-10">
              Enginering
             </div>
          </Link>
          <Link href='/mentors?marketing' >
             <div className="font-bold text-lg border-b-2 border-primary mr-10">
              Marketing
             </div>
          </Link>
        </nav>

        <button className="bg-gradient text-primary p-4 text-md lg:text-lg rounded-full ml-auto lg:absolute bottom-4 right-20 lg:right-32 lg:bottom-1/4">
          Play
        </button>

        <Link href='#' >
             <div className="font-bold text-lg ml-auto ">
              Become a Mentor
             </div>
          </Link>

        
        
      </div>
   </div>
  )
}
