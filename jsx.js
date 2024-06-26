// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/


//solution
ReactDOM.render(<nav>
    <h1>"My Website"</h1>
    <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>,document.getElementById("root"))
