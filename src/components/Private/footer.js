import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import '../../styles/style.css';

class Footer extends Component{
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              @Donata
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
