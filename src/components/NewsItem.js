import React from "react";

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card my-3">
          <div style={{ display: "flex", justifyContent: 'center', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">
              {source ? source.name : "unknown"}
            </span>
          </div>
          <div>
            <img
              src={
                imageUrl
                  ? imageUrl
                  : "https://i.gadgets360cdn.com/large/apple_wonderlust_event_1694411247629.jpg"
              }
              alt="..."
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              className="btn btn-sm btn-dark"
              target="
                -blank"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} at{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;






























// import React, { Component } from "react";

// export class NewsItem extends Component {
//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } =
//       this.props;
//     return (
//       <div>
//         <div className="card my-3">
//           <div style={{ display: "flex", justifyContent: 'center', position: 'absolute', right: '0'}}>
//             <span className="badge rounded-pill bg-danger">
//               {source ? source.name : "unknown"}
//             </span>
//           </div>
//           <div>
//             <img
//               src={
//                 imageUrl
//                   ? imageUrl
//                   : "https://i.gadgets360cdn.com/large/apple_wonderlust_event_1694411247629.jpg"
//               }
//               alt="..."
//               className="card-img-top"
//             />
//           </div>
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">{description}</p>
//             <a
//               href={newsUrl}
//               className="btn btn-sm btn-dark"
//               target="
//                 -blank"
//             >
//               Read More
//             </a>
//             <p className="card-text">
//               <small className="text-muted">
//                 By {author ? author : "Unknown"} at{" "}
//                 {new Date(date).toUTCString()}
//               </small>
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
