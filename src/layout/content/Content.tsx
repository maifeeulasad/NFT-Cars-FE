import React from 'react';

import { Content as AntdContent } from 'antd/lib/layout/layout';

interface IPropsContent {
  children: any;
}

class Content extends React.Component<IPropsContent> {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{ width: '67%', margin: '40px' }}>
          <AntdContent>{this.props.children}</AntdContent>
        </div>
      </div>
    );
  }
}

export { Content };
