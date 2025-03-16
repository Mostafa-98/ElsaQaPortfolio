import React from 'react'
import globe from './../../assets/images/globe.png'

const About = () => {
  return (
    <>



      <section className='flex flex-col  justify-center items-center md:flex-row bg-[#F4EFED] dark:text-[#F4EFED] dark:bg-[#222222] overflow-hidden'>
        <div className='container md:w-[60%] justify-center items-center mx-auto'>
          <div>
            <h1 className="py-6 font-extrabold text-center text-3xl md:text-5xl justify-center items-center uppercase dark:text-[#F4EFED]">
              about
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:justify-around md:items-center md:px-4 md:py-4">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={globe} alt="" />
            <div className=" w-1/2 flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2   tracking-tight text-gray-900 dark:text-[#F4EFED]">
                <span className='text-xl font-extrabold'>Welcome, friend.</span> I’m a Moustafa Elsaqqa, freelance web developer  I’ve got a broad range of web related skills and specialise in <span className='text-xl font-extrabold'>front-end development.</span> The short version is – I know my onions code-wise, have an eye for aesthetics, and I know how to make high-quality websites from start to finish.
              </h5>            </div>
          </div>

          <div className='text-start'>
            <h1 className='text-2xl py-5 font-extrabold'>My clients include:</h1>

            <ul className='text-left list-disc '>
              <li className='py-3'>Startups & Small Businesses that need a robust, scalable web presence. I specialize in crafting high-performance, modern React applications that not only look great but also drive business growth. Need a sleek landing page, a complex dashboard, or an interactive web app? I’ve got you covered.</li>
              <li className='py-3'>Design Agencies that require a front-end specialist to bring their Figma or Sketch designs to life. I respect design down to the pixel and ensure that the final product is not only aesthetically faithful but also performant, accessible, and easy to use.</li>
              <li className='py-3'>Tech Companies & SaaS Providers that need highly interactive, data-driven interfaces. Whether it’s an advanced UI, real-time updates, or complex state management, I create seamless experiences using React, Next.js, and modern front-end tools.</li>
              <li className='py-3'>Nonprofits & Charities that need maintainable, user-friendly websites within budget constraints. I focus on accessibility, performance, and easy content management so they can focus on their mission instead of struggling with technology.</li>
              <li className='py-3'>Beyond the fundamentals, I have experience working with animations, micro-interactions, data visualization, and WebGL for immersive user experiences. I’m always exploring new front-end technologies to push the boundaries of what’s possible on the web.</li>
            </ul>
            <ul className='text-left'>
              <li className='py-4'>Recently, I spent time developing interactive dashboards and web applications for a SaaS company, working closely with designers and product teams to refine user experiences. I’ve also contributed to open-source projects and built dynamic web tools that help businesses automate and optimize workflows.</li>
              <li className='py-4'>My skills as a React developer go beyond writing code—I focus on problem-solving, usability, and performance optimization. Every project is built with scalability and maintainability in mind, ensuring long-term value for clients.</li>
              <li className='py-4'>In my spare time, I enjoy experimenting with creative coding, exploring 3D graphics in the browser, and contributing to front-end development communities. Currently, I’m working on a React-powered indie project that blends animation and interactivity to create engaging digital experiences.</li>
              <li className='py-4'>If you need a front-end React developer who can turn your ideas into polished, high-quality web applications, let’s connect!</li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default About