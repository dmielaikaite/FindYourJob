import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Image, Grid, Row, Col} from 'react-bootstrap';

import '../../styles/headerStyle.css';

class Header extends Component{

  constructor(props){
    super(props)
    this.state={}
    };

  render() {
      return (
        <nav className="navbar">
          <Grid>
            <Row>
              <Col xs={12} md={3}>
                <a className="navbar-brand" href="/private">Nature</a>
              </Col>
              <Col xs={12} md={6}>
                <div className="contentOfMiddle">
                  <Image src={'/src/assets/coverPhoto.jpg'} responsive thumbnail bsClass="userProfilePicture"/>
                  <div>
                    User email address
                  </div>
                </div>
              </Col>
              <Col xs={12} md={3}>
                <ul className="navbar-nav" >
                  <li className="nav-item">
                    <button className="newsButton btn-block" type="submit">Latest News</button>
                  </li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </nav>
      );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    };
};

export default connect(mapStateToProps)(Header);
