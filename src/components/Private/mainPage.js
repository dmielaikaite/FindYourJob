import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from './header.js';
// import LatestNews from './LatestNews/latestNews.js';
// import Topics from './LatestNews/topics.js';
import Footer from './footer.js';
import AllTopics from './AllTopics/allTopics.js';
import TopicPage from './OneTopic/topicPage.js';

class MainPage extends Component{
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <AllTopics/>
              {/* <TopicPage/> */}
            </Col>
            {/* <Col xs={12} md={9}>
              <LatestNews/>
            </Col>
            <Col xs={12} md={3}>
              <Topics/>
            </Col> */}
          </Row>
        </Grid>
      <Footer/>
      </div>
    );
  }
}

export default MainPage;
