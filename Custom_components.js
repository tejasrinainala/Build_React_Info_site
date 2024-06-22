/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

//solution
import React from "react"
import ReactDOM from "react-dom"
function Reasons()
{
    return(
        <div>
        <ol>
        <li>Easy to Learn</li>
        <li>Performance</li>
        <li>Flexibility</li>
        </ol>
        </div>
        
    )
}
ReactDOM.render(<Reasons/>,document.getElementById("root"))
