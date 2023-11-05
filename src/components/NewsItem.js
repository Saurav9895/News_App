import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://english.cdn.zeenews.com/sites/default/files/2023/10/30/1307476-fd-3.jpg": imageUrl} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{!description?"No Description":description}...</p>
                <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>

                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

