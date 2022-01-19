let Reactcontent = document.getElementById("root")

const myFirstElement = React.createElement("li",null,[
    React.createElement("li",null,"item2"),
    React.createElement("li",null,"item3"),
    React.createElement("li",null,"item4")
]) //2. Create a React Element

ReactDOM.render(myFirstElement,Reactcontent) //1. Used to join

const myJSXElement = (
    <ul>
        <li>orange</li>
        <li>apple</li>
    </ul>
)

ReactDOM.render(myJSXElement, Reactcontent)