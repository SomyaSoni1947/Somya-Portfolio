import React from 'react'

const App = () => {
  return (
   <>
   
   <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
           {/* <!-- Logo --> */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img
                className="h-10 w-auto"
                src="images/logo.png"
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Portfolio</span
              >
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Home</a
                >
                <a
                  href="/jobs.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Jobs</a
                >
                <a
                  href="/add-job.html"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                  >Add Job</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/*<!-- Hero --> */}
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            Somya Soni
          </h1>
          <p className="my-4 text-xl text-white">
            Hello, I am Somya Soni. I'm working as an Advisor at Amazon, India. I am a Computer Science Engineering graduate from West Bengal University of Technology with a CGPA of 8.8
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Developers and Employers --> */}
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Work Experience </h2>
            <p className="mt-2 mb-4">
              Describe your work experience here
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Know More 
            </a>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">Internships</h2>
            <p className="mt-2 mb-4">
              Add your internships here
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
               Add Job 
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/*<!-- Job Listing 1 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Full-Time</div>
                <h3 className="text-xl font-bold">First Project</h3>
              </div>

              <div className="mb-5">
               Describe your first project here
              </div>

              <h3 className="text-indigo-500 mb-2"> technologies used </h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  location
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Job Listing 2 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold"> Second project </h3>
              </div>

              <div className="mb-5">
               Write Second project description
              </div>

              <h3 className="text-indigo-500 mb-2"> technologies used </h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  put location
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
          
          {/* <!-- Job Listing 3 --> */}
          <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-gray-600 my-2">Remote</div>
                <h3 className="text-xl font-bold">Third Project </h3>
              </div>

              <div className="mb-5">
                Description of third project
              </div>

              <h3 className="text-indigo-500 mb-2">Technologies used</h3>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
                  put location
                </div>
                <a
                  href="job.html"
                  className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                 Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Projects </a
      >
    </section>

   
   </>
  )
}

export default App
