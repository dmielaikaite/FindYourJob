import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/news.js';

class OneNewComp extends Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    const url = "http://127.0.0.1:5000/api/getNews";
    this.props.dispatch(actions.getAllNews(url));
  }

  render() {
    console.log(this.props.allNews);
    return (
      <div>
        {
          this.props.allNews.map(function(item) {
            return <div className="oneNewComponent" key={item[0]}>
              <div className="newTitle">{item[1]}</div>
              <div className="newDescription">{item[2]}</div>
              <div className="newMainInfo">
                <div id="newTopic">{item[3]}</div>
                <div>{item[4]}</div>
              </div>
            </div>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allNews: state.news,
    newsHasErrored: state.newsHasRerrored
  }
}

export default connect(mapStateToProps)(OneNewComp);
