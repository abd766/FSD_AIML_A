const Greeting = ({name="Abd",age="20"})=>{
    return(
        <div>
       <h2>Hello {name} {age}</h2>
        </div>
    )
}

Greeting.defaultProps={
    name:"Xyz",
    age:19
}

export default Greeting;