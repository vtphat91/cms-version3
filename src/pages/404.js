import React from "react"



const NotFoundPage = () => {
  // if (typeof window !== 'undefined') {
  //   window.location = '/about-us';
  // }
  // return null;


  return (
    <div className="not-found">
        <Helmet htmlAttributes={{itemtype: 'notfound'}} >
            <style>{`
                h1 {
                    font-family: 'Segoe UI Light';
                    font-weight: 300;
                    color: #fff;
                }
                
                html[itemtype='notfound'] body {
                    font-family: 'Segoe UI';
                    color: #fff;
                    background: #008cff;
                    margin: 0;
                }
                
                .not-found main {
                    margin: 4% 10%;
                }
                
                .emotion {
                    font-size: 8em;
                    margin: 0;
                }
            `}</style>
        </Helmet>
        <main>
            <header>
                <h1 className="emotion">:(</h1>
            </header>
            <p>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
            <p>100% complete</p>
        </main>
      </div>
  )




}

export default NotFoundPage