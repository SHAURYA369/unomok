import React from 'react'
import "../Table.css"
const Table = () => {
  return (
    <div className='app-container'>
        <table>
            <thread>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Short Description</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <td>Shaurya</td>
                    <td>Singh</td>
                    <td>shaurya7singh@gmail.com</td>
                    <td>18-07-2001</td>
                    <td>Student</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table