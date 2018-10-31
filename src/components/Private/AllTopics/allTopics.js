import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Thumbnail, Grid, Row, Col, Link} from 'react-bootstrap';

import * as actions from '../../../actions/news.js';

import '../../../styles/latestNewsThread.css';


class AllTopics extends Component{

  constructor(props){
    super(props);
    this.state = {}
    this.getOneTopicFeed = this.getOneTopicFeed.bind(this);
  }

  componentDidMount(){
    const url = "http://127.0.0.1:5000/api/getNewsTopics";
    this.props.dispatch(actions.getAllTopics(url));
  }

  getOneTopicFeed(e){
    console.log('button was clicked',e);
  }

  render() {
    return (
      <div>
        <Grid>
        {
          this.props.allTopics.map(function(item) {
            return <div key={item[0]} show="false">
                  <Col xs={8} md={4}>
                    <div className="topicImageTitle">{item[0]}</div>
                     <Thumbnail href={item[0]}
                                alt="171x180"
                                src={'/src/assets/topics/' + item[0] + '.jpg'}
                                />
                  </Col>
              </div>
          })
        }
        </Grid>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return{
    allTopics: state.topics,
  }
}

export default connect(mapStateToProps)(AllTopics);
