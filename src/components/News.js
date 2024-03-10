import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country :'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
  }
   capitalisefirstletter =(String) =>{
    return String.charAt(0).toUpperCase()+String.slice(1);
   }
    constructor(props){
    super(props);
    console.log("this is an constructor")
    this.state={
        articles :[],
        loading :false,
        page:1
    }
    document.title =`NewsMonkey- ${this.capitalisefirstletter(this.props.category)}`
 }
 async updatenews() {
  this.props.setProgress(10);
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b3766d48297429a925d1fc10b21e5fe&page=${this.state.page}&pagesize=${this.props.pagesize}`;
this.setState({loading:true})
  let data =await fetch(url);
let parsedData =await data.json()
console.log(parsedData);
this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
this.props.setProgress(100);
}

async componentDidMount() {
//     console.log("cdm")
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b3766d48297429a925d1fc10b21e5fe&page=${this.state.page}&pagesize=${this.props.pagesize}`;
//  this.setState({loading:true})
//     let data =await fetch(url);
//  let parsedData =await data.json()
//  console.log(parsedData);
//  this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
this.updatenews();
}
handleprevClick=async()=>{
// console.log("previous");
// let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b3766d48297429a925d1fc10b21e5fe&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
// let data =await fetch(url);
// let parsedData =await data.json()
// console.log(parsedData);
// this.setState({loading:true})
// this.setState({articles:parsedData.articles})
// this.setState({
//   page:this.state.page -1,
//   articles:parsedData.articles,
//   loading:false
// })
this.setState({page:this.state.page-1})
this.updatenews();
}
handlenextClick=async()=>{
//   console.log("Next");
//   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize))){

  
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5b3766d48297429a925d1fc10b21e5fe&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
// let data =await fetch(url);
// let parsedData =await data.json()
// console.log(parsedData);
// this.setState({loading:true})
// this.setState({articles:parsedData.articles})
// this.setState({
//   page:this.state.page +1,
//   articles:parsedData.articles,
//   loading:false
// })
// }
this.setState({page:this.state.page+1})
this.updatenews();

}
    render() {
    return (
      <div className="container my-3" > 
      <h2 className="text-center" style={{margin:'40px 0px;',marginTop:`70px`}}> NEWSMONKEY-Top {this.capitalisefirstletter(this.props.category)} Headlines</h2>
      {this.state.loading &&<Spinner/>}
      {/* <h2> NEWSMONKEY-The Top Headlines</h2> */}
      <div className="row">
      {this.state.articles.map((element)=>{
    return <div className="col-md-4 my-3" key={element.url}>
    <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
</div>
})}
</div>
<div className="container d-flex justify-content-between">
<button disabled={this.state.page<=1} type="button" class="btn btn-dark mx-1" onClick={this.handleprevClick}> &larr; Prev</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-dark mx-1"onClick={this.handlenextClick}>Next &rarr;</button>
</div>
</div>
    )
  }
}

News.defaultProps={
  country :'in',
  pageSize:8,
  category:'general'
}
News.propTypes={
country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
export default News