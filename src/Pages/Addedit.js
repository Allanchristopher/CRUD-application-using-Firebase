import React,{useState} from 'react';
import db from '../Firebase';

import {
    Button,
    Form,
    Input,
    Space
  } from "antd";
  
const Addedit = () => {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [number,setnumber] = useState("");
    const onFinish = (values) => {
       
      setname(values.name);
      setemail(values.email);
      setnumber(values.mobilenumber);
      console.log("Success:", values);
      var a ={
         name: values.name,
         email: values.email,
         mobilenumber: values.mobilenumber,
      }
      
       console.log(a);
     const users= db
      .collection("cloudfirestore")
      .add(a)
      .then(() =>{
        alert('form submitted');
      })
      .catch((error)=>{
        alert (error.message); 
      })
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    console.log(name);
    console.log(email);
    console.log(number);
  
  return (
    <div><Form
    name="basic"
    labelCol={{
      span: 10,
    }}
    wrapperCol={{
      span: 6,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="name"
      name="name"
      rules={[
        {
          required: true,
          message: "Please enter the username!",
        },
      ]}
      hasFeedback
    >
      <Input />
    </Form.Item>
    <Form.Item
    name="email"
    label="E-mail"
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please enter the E-mail!',
      },
    ]}
    hasFeedback
  >
    <Input />
  </Form.Item>
  <Form.Item
      label="Mobile number"
      name="mobilenumber"
      rules={[
        {
          required: true,
          message: "Please enter the mobile number!",
        },
      ]}
      hasFeedback
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      wrapperCol={{
        offset: 11,
        span: 24,
      }}
    >
        <Space> <Button type="primary" htmlType="submit" >
        Submit
      </Button>
      <Button htmlType="reset" >
          Reset
        </Button>
      <Button type="primary" href='/' >
       Go Home
      </Button></Space>
     
    </Form.Item>
  </Form></div>
  )
}

export default Addedit