import React from 'react'
import blackImg from './blackImg.jpg'

export default function NewsItem(props) {
    const { title, desc, imageurl, url,source,date } = props

    return (
        <>
            <div className='my-3 '>
                <div className="card" >
                    <span className="position-absolute  badge rounded-pill bg-danger" style={{right:"-2px",top:"-2px"
                }}>
                        {source}
                    </span>
                    <img src={imageurl?imageurl:blackImg} className="card-img-top" height="150px" alt='' />
                    <div className="card-body">
                        <h5 className="card-title">{title?title.slice(0,35):""}...</h5>
                        <p className="card-text">{desc?desc.slice(0,100):""}...</p>
                        <footer className="blockquote-footer">Published on <cite title="Source Title">{date}</cite></footer>
                        <a href={url} className="btn btn-primary">Read More</a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
