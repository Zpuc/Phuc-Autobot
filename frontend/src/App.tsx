import React from 'react';
import { ConfigProvider, Layout, Typography, Space, Button, Card, Row, Col, Badge } from 'antd';
import { RocketOutlined, ShoppingCartOutlined, AppstoreOutlined, PhoneOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

export const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e53935', // Gundam Red accent
          borderRadius: 6,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#141414',
            padding: '0 24px',
            borderBottom: '2px solid #e53935',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <RocketOutlined style={{ fontSize: 24, color: '#e53935' }} />
            <span style={{ color: '#fff', fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>
              GUNDAM AUTOBOT STORE
            </span>
          </div>

          <Space size="middle">
            <Button type="text" style={{ color: '#fff' }} icon={<AppstoreOutlined />}>
              Danh Mục Sản Phẩm
            </Button>
            <Button type="text" style={{ color: '#fff' }} icon={<PhoneOutlined />}>
              Báo Giá Theo Yêu Cầu
            </Button>
            <Badge count={0} showZero={false}>
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Giỏ Hàng
              </Button>
            </Badge>
          </Space>
        </Header>

        <Content style={{ padding: '32px 24px', maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <Card
            style={{
              marginBottom: 24,
              background: 'linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)',
              color: '#fff',
              borderRadius: 8,
              border: 'none',
            }}
          >
            <Title level={2} style={{ color: '#fff', marginBottom: 8 }}>
              Chào mừng đến với Gundam AUTOBOT Store
            </Title>
            <Paragraph style={{ color: '#bfbfbf', fontSize: 16 }}>
              Hệ thống tra cứu, báo giá và phân phối mô hình Gunpla chính hãng (Bandai, Daban, Motor Nuclear...).
              Đầy đủ các phân khúc HG, RG, MG, PG, Mega Size với giá cập nhật theo tỉ giá mới nhất.
            </Paragraph>
            <Space>
              <Button type="primary" size="large">
                Khám Phá Mô Hình
              </Button>
              <Button ghost size="large" style={{ color: '#fff', borderColor: '#fff' }}>
                Liên Hệ Nhận Báo Giá
              </Button>
            </Space>
          </Card>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable title="High Grade (HG 1/144)">
                <Text type="secondary">Đa dạng mẫu mã từ dòng UC, SEED đến Witch from Mercury.</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable title="Real Grade (RG 1/144)">
                <Text type="secondary">Khung xương Advanced MS Joint chi tiết cơ khí đỉnh cao.</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable title="Master Grade (MG 1/100)">
                <Text type="secondary">Tỉ lệ vàng 1/100, biên độ cử động hoàn hảo và decal phong phú.</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card hoverable title="Perfect Grade (PG 1/60)">
                <Text type="secondary">Siêu phẩm mô hình đỉnh cao với LED và chi tiết tinh xảo.</Text>
              </Card>
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: 'center', background: '#fff', borderTop: '1px solid #e8e8e8' }}>
          Gundam AUTOBOT Store ©{new Date().getFullYear()} - Hệ Thống Báo Giá & Quản Lý Cửa Hàng Mô Hình
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

