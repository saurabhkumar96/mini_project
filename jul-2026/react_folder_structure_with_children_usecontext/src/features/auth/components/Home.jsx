import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../auth.context'

function Card(props) {
  return (
    <>
      {props.children}
    </>
  )
}

function AnotherCard(props) {
  console.log(props)
  return (
    <>
      {props.children}
    </>
  )
}

function Calculation(props) {
  console.log("length or props.children lenght -", props.children.length)
  console.log(props.children[2])
  return (
    <>
      {props.children.length}
      {props.children[2]}
    </>
  )
}


const Home = () => {
  const user = useContext(UserContext)
  const data = useContext(ThemeContext)
  console.log(data.myname)
  console.log(user)
  return (
    <>
      <Card>
        <h2>Welcome</h2>
        <p>This is inside the Card component.</p>
      </Card>

      {/* another component */}
      <AnotherCard>
        <h2>Another Card</h2>
        <p>This is inside the AnotherCard component.</p>
      </AnotherCard>

      {/* third component for calculation */}
      <div>
        <div>{new Date().toLocaleString()}</div>
        <Calculation>
          <div>one</div>
          <div>two</div>
          <div>three</div>
          <div>four</div>
        </Calculation>
      </div>
    </>

  )
}

export default Home