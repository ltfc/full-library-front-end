/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Footer2 from './Footer2';

import {
  Footer20DataSource,
} from './data.source';
import './antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Footer2 dataSource={Footer20DataSource} isMobile={this.state.isMobile} />
      </div>
    );
  }
}

export default Layout;
