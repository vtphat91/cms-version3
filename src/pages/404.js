import React from "react"
import {Helmet} from "react-helmet";


const NotFoundPage = () => {
  if (typeof window !== 'undefined') {
    window.location = '/about-us';
  }
  return null;


//   return (
//     <div className="404 not-found">
//             <style>{`
//                 .404>h1 {
//                     font-family: 'Segoe UI Light';
//                     font-weight: 300;
//                     color: #fff;
//                 }
                
//                 html[itemtype='notfound'] main {
//                     font-family: 'Segoe UI';
//                     color: #fff;
//                     background: #008cff ;
//                     margin: 0;
//                 }
                
              
                
//                 h1 .emotion {
//                     font-size: 8em;
//                     margin: 0;
//                     color: #fff;
//                 }
//                 .content {
//                     background: #008cff ;
//                     height : 340px;
//                 }
//             `}</style>
//             <div className="content">
//                 <h1 className="emotion">:(</h1>
//                 <p>Page Not Found</p>
//                 <p>100% complete</p>
//             </div>
//       </div>
//   )




}

export default NotFoundPage