import Link from 'next/link'

export default function Home() {


    
    const mentors = [1,2,3,4];
      
    let showMentor = (data) =>{
      return (
        <div className="w-full lg:w-1/4 p-2">
              <div className=" shadow-lg rounded-xl flex flex-wrap">
                <div className="w-full h-52 bg-gradient  rounded-xl"></div>
                <div className="w-full p-2 ">
                  <h1 className="font-bold">Kew Coder</h1>
                  <div className="w-full p-2 h-4 bg-primary my-2"></div>
                  <p>
                  Ask anything about react Js, next js, gatsby js, react native 
                  </p>
                  <div>Enghlish, Indonesian</div>

                  <button className="w-full flex bg-primary px-8 p-3 rounded-full text-secondary font-bold mt-3">
                    Book Time 
                    <span className="ml-auto">
                      70$/hour
                    </span>
                  </button>
                </div>
              </div>
        </div>
      )     
    }

  return (
   <div className="bg-light dark:bg-dark h-screen w-screen flex overflow-y-scroll" >
   
      <div className="h-screen w-screen flex z-10 flex-wrap px-8 lg:px-20 items-start">
        <nav className=" py-10 flex w-full justify-start items-start">
          <Link href='/' >
             <div className="font-bold text-lg">
              <span className="text-primary">8</span> 
              Mentor
             </div>
          </Link>
          <div className="ml-auto flex">
          <Link href='#' >
             <div className="font-bold text-lg ml-auto  ">
              Sign
              <span className="text-primary">In</span> 
             </div>
          </Link>
          </div>
        </nav>
        <div className="flex w-full flex-wrap items-start ">
            <form className="w-full flex flex-wrap items-start">
              <input type="text" className="w-full lg:w-4/6 p-2 px-3 lg:px-10 lg:py-4 text-lg rounded-full bg-gradient text-primary mb-2" placeholder="Search" />
              <select className="w-full lg:w-1/6 p-2 lg:p-4 text-lg rounded-full bg-gradient text-primary mb-2" >
                <option value="">Category</option>
              </select>
              <button className="w-full lg:w-1/6 p-2 lg:px-20 lg:py-4 text-lg rounded-full bg-gradient text-primary mb-2" >
                Go
              </button>
            </form>
            <nav className="flex p-2 my-4 overflow-x-scroll ">
            <Link href='/mentors?bussiness' >
              <div className="font-bold lg:text-lg text-primary mr-4 lg:mr-10">
                Bussiness
              </div>
            </Link>
            <Link href='/mentors?enginering' >
              <div className="font-bold lg:text-lg mr-4 lg:mr-10">
                Enginering
              </div>
            </Link>
            <Link href='/mentors?marketing' >
              <div className="font-bold lg:text-lg mr-4 lg:mr-10">
                Marketing
              </div>
            </Link>
            <Link href='/mentors?other' >
              <div className="font-bold lg:text-lg mr-4 lg:mr-10">
               Other
              </div>
            </Link>
          </nav>

          <div className="flex w-full flex-wrap lg:p-2 mt-5 mb-20">
              { mentors.map((d) => {
                return showMentor(d)
              }) }
          </div>
        </div>
      </div>
   </div>
  )
}
