import React from 'react'

const NewsItem = (props) => {

     let {title, descriptiion, ImageUrl, newsUrl, author, date, source} = props;
    return (
        <div className="card my-2">
        <img src={!ImageUrl?"https://i.ytimg.com/vi/lxF3S9zcysc/maxresdefault.jpg":ImageUrl} className="card-img-top" alt="..."/>
        <div style={{display:'flex',justifyContent:'flex-end', position:'absolute',right:'0'}}>
        <span className=" badge rounded-pill bg-danger" style={{left:"90%", zIndex:1}}>
    {source}</span>
    </div>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{descriptiion}...</p>
          <p className="card-text"><small className="text-muted">Updated by {author} on { new Date(date).toGMTString()}</small></p>
          <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    )
  }


export default NewsItem