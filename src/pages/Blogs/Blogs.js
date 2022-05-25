import React from 'react';

const Blogs = () => {
    return (
        <div className='grid gap-5'>
            <div>
                <h2 className='text-3xl	'>1 How will you improve the performance of a React Application?</h2>
                <article className='text-lg'>
                The operations involved in keeping the DOM updates are costly but react uses several techniques to minimize the no. of operations which leads to natively faster UI for many cases. Still, we can use several techniques to speed up the application:
                    <br></br>
                1. Use binding functions in constructors: By adding an arrow function in a class, we add it as an object and not as the prototype property of the class. And if we use the component multiple time, there will be various instances of these functions within each object of the component. The most reliable way to use functions is to bind them with the constructor.
                <br></br>
                2. Avoid inline style attributes: The browser often invests a lot of time rendering, when styles are implied inline. Scripting and rendering take time because the browser has to plan all the React style rules to the CSS properties. Creating a separate style.js file and importing it into the component is a faster method.
                </article>
            </div>

            <div>
                <h2 className='text-3xl	'>2 What are the different ways to manage a state in a React application?</h2>
                <article className='text-lg'>
                    
                </article>
            </div>

            <div>
                <h2 className='text-3xl	'>3 How does prototypical inheritance work?</h2>
                <article className='text-lg'>
                    
                </article>
            </div>

            <div>
                <h2 className='text-3xl	'>4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <article className='text-lg'>
                    
                </article>
            </div>

            <div>
                <h2 className='text-3xl	'>5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <article className='text-lg'>
                    
                </article>
            </div>

            <div>
                <h2 className='text-3xl	'>6 What is a unit test? Why should write unit tests?</h2>
                <article className='text-lg'>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. <br></br>

                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </article>
            </div>
        </div>
    );
};

export default Blogs;