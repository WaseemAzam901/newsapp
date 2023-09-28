import React from 'react'
import Book from './Book.gif'
const Spinner = () => {
    return (
      <div className="spinner-container">
        <div className="text-center">
          <img src={Book} alt="Book" />
        </div>
      </div>
    )
  
}
export default Spinner


// import React, { Component } from 'react'
// import Book from './Book.gif'
// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className="spinner-container">
//         <div className="text-center">
//           <img src={Book} alt="Book" />
//         </div>
//       </div>
//     )
//   }
// }
