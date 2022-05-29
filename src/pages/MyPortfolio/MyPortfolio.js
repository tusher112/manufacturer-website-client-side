import React from "react";
import profile from "../../assest/img/image1.jpg";
const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen grid grid-cols-1">
        <div class="hero-content flex-col lg:flex-row lg:space-x-36">
          <img src={profile} class="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 class="text-5xl font-bold">Md. Tusher Ahmed Aman</h1>
            <p className="mt-2 mb-5">
              UI/UX Designer and Web <span className="text-red-400">Developer</span>
            </p>
            <p>
              I am Tusher, a web developer, and a creative designer with over 1 year of experience. I do web development that
              offers a wide range of services, but not limited to, including figma design into react 
              using react-native, and many more. I also design the UI/UX of websites. Feel free to reach out to me so we can start
              planning about your next project.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="text-center bg-base-200 p-5 text-4xl uppercase rounded mb-9">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mb-5">
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">City University</h2>
              <div>
                <p>Bechelor of Science in Computer Engineering</p>
                <p>City University</p>
                <p>Savar, Dhaka, Bangladesh</p>
                {/* <p>Software Development Intern</p> */}
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">Phitron</h2>
              <div>
                <p>Scratch Programming</p>
                <p>Basic Problem solving with C</p>
                <p>Data Structures</p>
                <p>Algoritm</p>
                <p>Object Oriented Programming (OOP) & Python</p>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">Programming Hero</h2>
              <div>
                <p>Learn Web Design & Development</p>
                <p>(JavaScript, React, Node, Firebase, Mongodb)</p>
                <p>Front-end Developer</p>
                <p>Back-end Developer</p>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">More Basic knowledge</h2>
              <div>
                <p>Basic Structured Query Language ( MySql ) .</p>
                <p>Basic PHP</p>
                <p>Basic Java Programming</p>
                <p>Github Project Management</p>
                <p></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* design skilss */}
      <div className="mt-12">
        <h2 className="text-center bg-base-200 p-5 text-4xl uppercase rounded mb-9 ">Design Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center mb-5">
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">HTML5, CSS3, BOOTSTRAP & TAILWIND</h2>
              <div>
                <p className="mb-2">I will design any website using html, css & Bootstrap.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="100" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">JavaScript</h2>
              <div>
                <p className="mb-2">Basic Problem solving and Web design with JavaScript.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="70" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">React with Firebase</h2>
              <div>
                <p className="mb-2">I will design and Develop any website using React and Firebase for authentication.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="75" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title justify-center font-bold text-2xl mb-4">Mongodb</h2>
              <div>
                <p className="mb-2">I will design and Develop any website using React and implement Back-end using Mongodb.</p>
                <p className="mb-3">Coding skills:</p>
                <input type="range" min="0" max="100" value="75" class="range range-secondary" step="25" />
                <div class="w-full flex justify-between text-xs px-2">
                  <span>30%</span>
                  <span>50%</span>
                  <span>80%</span>
                  <span>95%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-12">
        <h2 className="text-center bg-base-200 p-5 text-4xl uppercase rounded mb-9 ">Project Link</h2>

        1. <a class="link link-primary" href="https://tusher112-techshop.netlify.app/" >TechShop with React Live Site</a> <br/>
        2. <a class="link link-primary" href="https://nextgen-car-warehouse.web.app/" >NextGen Car Warehouse React Live Site</a> <br/>
        3. <a class="link link-primary" href="https://royal-photography-8a502.web.app/" >Personal Service(Photographar) Live site</a> <br/>

      </div>

      <div class="my-12 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        <div class="stat place-items-center">
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value">10+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Project Complete</div>
          <div class="stat-value text-secondary">20+</div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title">Years of Experinces</div>
          <div class="stat-value">1+</div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;

