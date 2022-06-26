import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default function News(props) {
  const [articles, setArticles] = useState([])
  const [totalResults, setResults] = useState(0);
  const [pageNo, setPage] = useState(1);
  const [loading, setloading] = useState(false)
  const [isEmpty,setisempty] = useState(false)

  const fetchdata = async () => {
    setloading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=24&page=${pageNo}&q=${props.searchKey}&apiKey=15c62c66419f47a8a9ba4bed5dceb4a7`
    let data = await fetch(url)
    let fetchedArticles = await data.json()
    setArticles(fetchedArticles.articles)
    setResults(fetchedArticles.totalResults)
    setloading(false)
    if(totalResults==0){
      setisempty(true)
    }

  }

  const fetchmore = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=24&page=${pageNo + 1}&q=${props.searchKey}&apiKey=15c62c66419f47a8a9ba4bed5dceb4a7`
    let data = await fetch(url)
    let fetchedArticles = await data.json()
    setArticles(articles.concat(fetchedArticles.articles))
    setResults(fetchedArticles.totalResults)
    setPage(pageNo + 1)
  }

  useEffect(() => {
    fetchdata()
  }, [props.searchKey, props.category, props.country])


  return (
    <>
      {loading && <Spinner />}

      {isEmpty && totalResults == 0 && <div className={`text-center my-3 text-${props.mode == 'light' ? 'dark' : 'white'}`} > <h3>Oops! Search Results doesn't Match</h3><h4>Try Searching for differnt News</h4></div>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchmore}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-3">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-lg-4 col-md-6 col-sm-6 " key={element.url}>
                <NewsItem title={element.title} desc={element.description} imageurl={element.urlToImage} url={element.url} source={element.source.name} date={element.publishedAt} />
              </div>

            })}
          </div>
        </div>

      </InfiniteScroll>

    </>
  )
}
