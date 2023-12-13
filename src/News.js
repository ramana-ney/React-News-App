import React from 'react'

const News = (props) => {
    return (
        <div className='News'>
            <div className='img'>
                 
                    <img src={props.article.urlToImage} /> 
 
            
            </div>

            <h3>{props.article.title}</h3>

            <p>{props.article.author}</p>

            <a href={props.article.url} target='blank'>Read more</a>


        </div>
    )
}

export default News
