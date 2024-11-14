const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new heading")
const ele1=React.createElement("h1",{},"Shopping Cart")
const list=React.createElement("ul",{},[
    React.createElement("li",{},"Item1"),
    React.createElement("li",{},"Item2")
])
const para=<p>This is paragraph</p>
const root=ReactDOM.createRoot(parent)
    // root.render(element);
    // root.render(ele1);
    root.render([element,ele1,list,para])