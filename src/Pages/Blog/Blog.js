import React from 'react';

const Blog = () => {
    return (
        <div className='m-20'>
            <h1 className='text-info fw-bold p-4 m-4'>Question 1: How will you improve the performance of a React Application?

            </h1>
            <p className='p-2'>
                React component transpile
                Bundle of JavaScript and CSS files
                Web server for development
                Unit test execution environment
                Linter (static analysis)
                PWA support
                TypeScript template
                etc ...
            </p>
            <p className='p-2'>
                Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.
            </p>

            <h1 className='text-info fw-bold p-4 m-4'>Question 2: What are the different ways to manage a state in a React application?</h1>
            <p className='p-2'>
                Local state.
                Global state.
                Server state.
                URL state.
            </p>

            <h1 className='text-info fw-bold p-4 m-4'>Question 3: How does prototypical inheritance work?

            </h1>
            <p className='p-2'>
                Prototype Inheritance is a feature in javascript .use a add method  and properties in the objects. the method which object inherit and properties and methods of another object. normally, in order to get and set the [[Prototype]] of an object, then use the Object. getPrototype and Object.
            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 4: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
            </h1>
            <p className='p-2'>
                In the React,  this.props and this.state represent render, or on-screen values.
                The setState call is asynchronous.  Do not expect this.state to reflect the new value immediately after the call.  If you need to calculate a value based on the current state, pass the update function instead of the object
                So that doesn't work as code expectations
            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </h1>
            <p className='p-2'>
                You can find same products to a given name by passing the database Storage URI, web URL, or base64 encoded string to Vision API Product Search. Refer to the Usage Limits for maximum request size and  information.
            </p>
            <h1 className='text-info fw-bold p-4 m-4'>Question 6: What is a unit test? Why should write unit tests?

            </h1>
            <p className='p-2'>
                Benefits of using unit test tools:

                Firstly the test execution can be automated by encoding.  Second, you can rerun tests at the same level by leaving test cases.  The important thing is not to leave the test results, but to keep the test itself
            </p>

        </div>
    );
};

export default Blog;