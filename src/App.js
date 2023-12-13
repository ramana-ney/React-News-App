import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import News from './News'
import './App.css'

const App = () => {

  let [articles, setArticles] = useState([])
  let[category,setCategory]= useState("India")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-11-12&sortBy=publishedAt&apiKey=cd30b1214fbb49e288f35cf389eeaff6`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles)
        console.log(news.articles);
      })
      .catch((error) => console.log(error))

  }, [category])



  return (
    <div>
      {/* Your API key is: cd30b1214fbb49e288f35cf389eeaff6 */}


      <header className='header'>
        <h2>  <span>INDIA</span> News</h2>
        <input type='text' placeholder='search here'
        onChange={(event)=>{
          if(event.target.value !== ""){
          setCategory(event.target.value)
          }
          else{
            setCategory("india")
          }
        }}
        
        ></input>
      </header>

      <section className='news-articles'>
        {
          articles.map((article) => {
            return (
              <News article={article}/>
            )
          })
        }



      </section>
    </div>
  )
}

export default App
