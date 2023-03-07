import React,{ useState ,useEffect} from 'react';
import { Row , Col,Table, Button, Modal, Form, Input } from 'antd';
import db from '../Firebase';
const Home = () => {  
//  database from table
 const [data , setdata] = useState([]);
 const [loading, setLoading] = useState(true);
 const Collection = db.collection('cloudfirestore');
 const [visible, setVisible] = useState(false);
 const [editingId, setEditingId] = useState(null);
const [form] = Form.useForm();
 const fetchData = async () => {
    setLoading(true);
    const response = await Collection.get();
    setdata(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setLoading(false);
}
useEffect(() => {
    fetchData();
  }, []);
console.log(data);

const handleDelete = async (id) => {
    await Collection.doc(id).delete();
    fetchData();
  };
const handleEdit = (record) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setVisible(false);
    form.resetFields();
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      await Collection.doc(editingId).update(values);
      fetchData();
      handleCancel();
    } catch (error) {
      console.log(error);
    }
  };
const columns = [
    {
    
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Number',
      dataIndex: 'mobilenumber',
      key: 'mobilenumber',
    },
    {
        title: 'operation',
        dataIndex: 'id', 
        render: (text, record) => (
            <><Button onClick={() => handleEdit(record)}>Edit</Button>
            <Button onClick={() => handleDelete(record.id)}>Delete</Button></>
            
          ),
         
         
      },
  ];
  return (
    <div>
      <h1>Table</h1>
     
        <Table dataSource={data} columns={columns} loading={loading} />
        <Modal
        visible={visible}
        title={editingId ? "Edit item" : "Create new item"}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="mobilenumber"
            label="Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Row justify="center">
        <Col span={24} offset={21} justify="center">
        <Button type="primary" href='/add'>Add details</Button>
        </Col>
        </Row>
    </div>
  );
};

export default Home;



