import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='m-20'>
                <h2 className='text-4xl text-center font-bold text-blue-600 mb-7'>Explore Your Knowledge</h2>
                <div className='blog my-3'>
                    <h5 className='text-xl font-bold'>1. What are the different ways to manage a state in a React application?</h5>
                    <p><small>There are four main types of state you need to properly manage in your React apps: <br />

                        i. Local state <br />
                        ii. Global state<br />
                        iii. Server state<br />
                        iv. URL state <br /> <br />
                        Let's cover each of these in detail:<br />

                        - Local (UI) state Local state is data we manage in one or another component.<br />

                        Local state is most often managed in React using the useState hook. <br />

                        - Global (UI) state Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                        - Server state Data that comes from an external server that must be integrated with our UI state. <br />
                        - URL state Data that exists on our URLs, including the pathname and query parameters. </small></p>
                </div>
                <div className='blog my-3'>
                    <h5 className='text-xl font-bold'>2. How does prototypical inheritance work?</h5>
                    <p><small>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </small></p>
                </div>
                <div className='blog my-3'>
                    <h5 className='text-xl font-bold'>3. What is a unit test? Why should we write unit tests?</h5>
                    <p><small>
                        Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. <br />
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    </small></p>
                </div>
                <div className='blog my-3'>
                    <h5 className='text-xl font-bold'>4. React vs. Angular vs. Vue?</h5>
                    <p><small>
                        Vue provides higher customizability and hence is easier to learn than Angular or React. <br />
                        Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.

                    </small></p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;