import React from 'react';
import { Row , Card, Col,Typography} from 'antd';
const { Title } = Typography;
const Header = () => {
  return (
    <div>
        <Row justify="center">
          <Col span={24}>
            <Card style={{ height: 90 }}>
              <Title level={2}>CRUD application</Title>
            </Card>
          </Col>
        </Row>
      
    </div>
  )
}

export default Header