import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

import Header from '../header.js';
import Footer from '../footer.js';

class TopicPage extends Component{

  constructor(props){
    super(props);
    this.state = {}
  }

  componentWillMount() {
    // console.log();
    // this.props.router.push('/books/bookdetail');
    console.log('componentwillMount', this.props);
    <Redirect to={this.props.match.url} />
  }

  render(){
    return (
      <div>
        {/* <Header/> */}
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              {this.props.match.params.topic} only one topic content
              {/* <Redirect to={this.props.match.url} />; */}
            </Col>
          </Row>
        </Grid>
      <Footer/>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    allState: state
  }
}

export default connect(mapStateToProps)(TopicPage);
