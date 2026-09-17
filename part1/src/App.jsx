const Hello = ({name, age}) => {
  // SAME AS:
  // const { name, age } = props
  // SAME AS:
  // const name = props.name
  // const age = props.age

  const bornYear = () => new Date().getFullYear() - age
  // SAME AS:
  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - age
  // }

  return (
    <div>
      <p>Hello {age}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      test app created by <a href='https//github.com/Complex1t'>Complex1t</a>
    </div>
  )
}


const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}



// const App = () => {
//   // const now = new Date()
//   // const a = 10
//   // const b = 20
//   // console.log(now, a + b)

//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//     // <div>
//     //   <h1>Greetings</h1>
//     //   <Hello name='Maya' age={26 + 10} />
//     //   <Hello name={name} age={age} />
//     //   <Footer />
//     // </div>
//     // <div>
//     //   <p>Hello world, it is {now.toString()} </p>
//     //   <p>
//     //     {a} plus {b} is {a + b}
//     //   </p>
//     // </div>
//   )
// }

export default App