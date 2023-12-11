const reactElement = { // how this works , the react makes it as a tree the tree will have the type of the element and the property (props) , this will be a key value pair, of that particular element , so that is being calculated using that
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    } ,
    children: 'click me to visit the google'            // this will happen in the backside of the react this will convert the whole things in the tree and that tree is bascially created using the trick , this is really very very important thing to remebrr so nwe need to take care of the things , this is really good
     
}

// first code now make this code a little more good to make the things

// function costumRender(reactElement, mainelement){
//     const domelement = document.createElement(reactElement.type) // we create the element using the type
//     domelement.innerHTML = reactElement.children
//     domelement.setAttribute("href", reactElement.props.href)
//     domelement.setAttribute('target', reactElement.props.target)
//     mainelement.appendChild(domelement)

// }

function costumRender(reactElement, mainelement){
    const domelement = document.createElement(reactElement.type) // we create the element using the type
    domelement.innerHTML = reactElement.children
    for(prop in reactElement.props){
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    mainelement.appendChild(domelement)

}




const mainelement = document.querySelector("#root")
costumRender(reactElement, mainelement)


