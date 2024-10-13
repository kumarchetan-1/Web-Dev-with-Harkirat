import React from 'react'

function app() {
    const [count, setCout ] = React.useState(0)

    return (
        <div>
            <Button count={count} setCout={setCout}></Button>
        </div>
    )
}


function Button(props) {
    function onButtonClick() {
        props.setCout(count + 1)
    }

    return React.createElement("button", {onclick: onButtonClick}, `Counter ${props.count}`) // synonymous code given below
    // return <button onClick={onButtonClick} >Counter {props.count}</button> // this returns xml but not html technically
}

export default app