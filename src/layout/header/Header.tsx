import React from 'react';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import PageHeader from 'antd/lib/page-header';
import { Button, Input } from 'antd';
import {
  HeartOutlined,
  MessageOutlined,
  BellOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const Header = () => (
  <AntdHeader style={{ backgroundColor: 'transparent' }}>
    <PageHeader
      title="NFT Cars"
      extra={[<Input.Search
        placeholder="Used Volkswagon Golf..."
        style={{ width: 300 }}
        enterButton={<SearchOutlined />}
      />,
      <div className="w-8" />,
      <Button type="primary" icon={<HeartOutlined />} />,
      <Button type="primary" icon={<MessageOutlined />} />,
      <Button type="primary" icon={<BellOutlined />} />,
      <Button type="primary" icon={<UserOutlined />} />,
      ]}
    />
  </AntdHeader>
);

export { Header };
