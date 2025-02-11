import React from 'react'

const Home = () => {
  return (
    <div>
      <table>
        <tr>
            <td>Username:</td>
            <td><input value="Enter your username"></input></td>
        </tr>
        <tr>
            <th>Password:</th>
            <th><input value="Enter your password" type="password"></input></th>
        </tr>
      </table>
    </div>
  )
}

export default Home
