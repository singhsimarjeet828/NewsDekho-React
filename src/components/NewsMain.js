import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsMain = (props) =>{
const [articles, setArticles]=useState([])
const [loading, setLoading]=useState(true)
const [page, setPage]=useState(1)
const [totalResults, settotalResults]=useState(0)
// document.title = `${this.capitalFirstLetter(this.props.category)} - NewsDekho`; 

   const capitalFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

  const updateNews = async()=>{
 props.setProgress(10);
  let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
 setLoading(true)
 props.setProgress(30);
  let newsdata = await fetch(url);
  let newsjson = await newsdata.json();
 props.setProgress(70);
  console.log(newsjson);
   setArticles(newsjson.articles)
   settotalResults(newsjson.totalResults);
   setLoading(false)
   props.setProgress(100);
    
}

 useEffect(()=>{
  document.title = `${capitalFirstLetter(props.category)} - NewsDekho`; 
  updateNews();
 },[])


// const handlePrev=  async ()=>{
//  setPage(page-1)
//   updateNews();

// }
//  const handleNext=  async ()=>{ 
//   setPage(page + 1)
//   updateNews();
//   }
  const fetchMoreData =  async () => {
    setPage(page + 1)
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
  let newsdata = await fetch(url);
  let newsjson = await newsdata.json();
  console.log(newsjson);
    // loading:false
    setArticles(articles.concat(newsjson.articles))
    settotalResults(newsjson.totalResults)
  };

    return (
<>
<div className='container' style={{color:props.mode === "dark" ? "white":"black"}}>
            <h1 className = "my-5 text-center">NewsDekho - Top {capitalFirstLetter(props.category)} Headlines</h1>
            </div>
   {loading && <Spinner/>}
   <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
        >
          
        <div className="container">
            <div className="row" >
            {articles?.map((element)=>{

                return <div className="col-md-4"  key ={element.url}>
                  <NewsItem  title ={element.title ? element.title.slice(0, 45):""} descriptiion={ element.description?element.description.slice(0, 88):""} ImageUrl={element.urlToImage ? element.urlToImage:""} newsUrl={element.url} author={ !element.author?"unknown":element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
                
            })}

              </div>
               
           </div>
           </InfiniteScroll>
           {/* <div className="container d-flex justify-content-between">
           <button  disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrev}> 	&larr; Previous</button>
           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next 	&rarr;</button>
           </div> */}
           
</>
    ) } 
  
          


NewsMain.defaultProps = {
  country:'in',
  pageSize:8,
  category:"general"
}
NewsMain.propTypes = {
country : PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string

}

export default NewsMain