import React from 'react';
import { List, Card, Image, Typography } from 'antd';

const { Title } = Typography;

interface ICar {
  image: string;
  model: string;
  price: string;
  location: string;
  condition: string;
}

const data1: ICar[] = [
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 1',
    price: '$20,000',
    location: 'City A',
    condition: 'New',
  },
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 2',
    price: '$15,000',
    location: 'City B',
    condition: 'Used',
  },
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 4',
    price: '$15,000',
    location: 'City B',
    condition: 'Used',
  },
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 4',
    price: '$15,000',
    location: 'City B',
    condition: 'Used',
  },
];

const data2: ICar[] = [
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 3',
    price: '$25,000',
    location: 'City C',
    condition: 'New',
  },
  {
    image: 'https://fastly.picsum.photos/id/715/200/200.jpg?hmac=eR-80S6YYIV9vV26EYLSVACDM5HWe94Oz2hx0icP5vI',
    model: 'Car Model 4',
    price: '$18,000',
    location: 'City D',
    condition: 'Used',
  },
];

const Landing = () => (
  <div>
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Title level={2}>Recommended For You</Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data1}
        renderItem={(car: ICar) => (
          <List.Item>
            <Card
              cover={<Image preview={false} alt={car.model} src={car.image} />}
              hoverable
            >
              <Card.Meta title={car.model} description={car.price} />
              <div>Location: {car.location}</div>
              <div>Condition: {car.condition}</div>
            </Card>
          </List.Item>
        )}
      />
    </div>
    <Title level={2}>Saved By You</Title>
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data2}
        renderItem={(car: ICar) => (
          <List.Item>
            <Card
              cover={<Image preview={false} alt={car.model} src={car.image} />}
              hoverable
            >
              <Card.Meta title={car.model} description={car.price} />
              <div>Location: {car.location}</div>
              <div>Condition: {car.condition}</div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Landing;
