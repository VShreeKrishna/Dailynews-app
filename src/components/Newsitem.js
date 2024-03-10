import React from 'react'

const Newsitem =(props)=> {
  let {title,description,imageurl,newsurl,author,date,source} =props
    return (
      <div>
        
        <div className="card" >
          <div style ={{
            display:`flex`,
            justifyContent:`flex-end`,
            position:`absolute`,
            right:`0`
          }
          }>
  <span class=" badge rounded-pill bg-danger"> {source} </span>
  </div>
  <img src={!imageurl?"https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3cyUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
{source}
  
    <h5 className="card-title">{title}...</h5> 
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default Newsitem