import './App.css'
import { ReactLenis, useLenis } from "lenis/react"

function App() {

  const lenis = useLenis(({scroll}) => {

  })

  return (
    <>
    <header class="text-deepgray body-font bg-bg">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-deepgray mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">[Your Institute]</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">About Us</a>
      <a class="mr-5 hover:text-gray-900">Testimonials</a>
      <a class="mr-5 hover:text-gray-900">Contact Us</a>
    </nav>
    <button class="border-2 border-gray inline-flex items-center bg-gray  py-1 px-3 focus:outline-none hover:bg-bg rounded text-base mt-4 md:mt-0 transition-all">Join Us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
<ReactLenis root>
  <section class="text-gray-600 body-font bg-bg">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ignite Your Potential, Achieve Excellence</h1>
        <p class="mb-8 leading-relaxed">Elevate your academic journey with [Your Institute]. Our expert faculty and innovative teaching methodologies empower students to achieve their full potential. Join us to unlock your true capabilities.</p>
        <div class="flex w-full md:justify-start justify-center items-end">
          <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field" class="leading-7 text-sm text-gray-600">Enter Your Name</label>
            <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </input>
          </div>
          <button class="inline-flex text-bg bg-customred border-0 py-2 px-6 focus:outline-none hover:bg-deepred rounded text-lg transition-all">Submit</button>
        </div>
        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Join us and excell in your studies.</p>
        <div class="flex lg:flex-row md:flex-col">
          <button class="bg-gray inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
              <span class="title-font font-medium">Google Play</span>
            </span>
          </button>
          <button class="bg-gray inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
              <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
              <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
            </svg>
            <span class="ml-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">Download on the</span>
              <span class="title-font font-medium">App Store</span>
            </span>
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded hover:-rotate-[20deg] transition-all" alt="hero" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA==">
      </img>
      </div>
    </div>
  </section>
  <section class="text-gray-600 body-font bg-bg">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Inspiring Minds, Shaping Futures</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We are a premier coaching institute dedicated to nurturing young minds and guiding them towards academic excellence. Our experienced faculty, innovative teaching methodologies, and personalized attention empower students to achieve their full potential. Join us on a journey of learning and growth.</p>
      </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-deepred w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">500+</h2>
            <p class="leading-relaxed">Success Rate</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-deepred w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
            <p class="leading-relaxed">Students</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-deepred w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">20+</h2>
            <p class="leading-relaxed">Teachers</p>
          </div>
        </div>
        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-deepred w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">200+</h2>
            <p class="leading-relaxed">Reviews</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="text-gray-600 body-font bg-bg">
  <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-center">Transformative Experiences, Shared Stories</h1>
  
    <div class="container px-5 py-24 mx-auto">
  
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302">
            </img>
            <p class="leading-relaxed">"Joining [Your Institute] was a game-changer. The expert faculty and personalized guidance helped me overcome my weaknesses and excel in my studies. The mock tests and doubt-clearing sessions were incredibly helpful. I highly recommend this institute to anyone aspiring to achieve academic success."</p>
            <span class="inline-block h-1 w-10 rounded bg-deepred mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Student No. 1</h2>
            <p class="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300">
            </img>
            <p class="leading-relaxed">"[Your Institute] provided me with the perfect platform to prepare for my competitive exams. The study materials were comprehensive, and the faculty was always available to answer our queries. The supportive environment and rigorous training helped me boost my confidence and achieve my goals."</p>
            <span class="inline-block h-1 w-10 rounded bg-deepred mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Student No.2</h2>
            <p class="text-gray-500">UI Develeoper</p>
          </div>
        </div>
        <div class="lg:w-1/3 lg:mb-0 p-4">
          <div class="h-full text-center">
            <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305">
            </img>
            <p class="leading-relaxed">"I'm grateful to [Your Institute] for shaping my future. The innovative teaching methods and interactive classes made learning enjoyable. The regular assessments and feedback helped me track my progress and identify areas for improvement. I'm truly thankful for the guidance and support I received."</p>
            <span class="inline-block h-1 w-10 rounded bg-deepred mt-6 mb-4"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Student No.3</h2>
            <p class="text-gray-500">CTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.514025674308!2d77.1968550754419!3d28.614352484906142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sRashtrapati%20Bhavan!5e0!3m2!1sen!2sin!4v1731917852450!5m2!1sen!2sin"></iframe>
        <div class="bg-bg relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a class="text-red-500 leading-relaxed">example@email.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p class="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-bg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Reach out to us for inquiries, support, or partnerships.</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </input>
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
       </input>
       </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Submit</button>
        <p class="text-xs text-gray-500 mt-3">Your Privacy is our top priorty and all the information is safe with us</p>
      </div>
    </div>
  </section>
</ReactLenis>

    </>
  )
}

export default App
