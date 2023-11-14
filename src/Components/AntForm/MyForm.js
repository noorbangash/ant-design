import { Button, DatePicker, Form, Input, TimePicker, message } from 'antd';
import React from 'react';
import '../../App.css'

function MyForm() {
    const onFinish =(e)=>{
       console.log(e)
       setTimeout(() => {
        message.success('Login Success')
       },2000);
    }
    
  return (
    <div className='App'>
        <Form onFinish={onFinish}>
            <Form.Item label='User Name' name='usename'>
          
             <Input placeholder='Enter Your Name' required></Input>
            </Form.Item>
            <Form.Item label='Password' name='password'>
             <Input.Password placeholder='Enter Your Password' required></Input.Password>
            </Form.Item>
            <Form.Item>
             <Button  type='primary' htmlType='submit'>Log In </Button>
            </Form.Item>
        </Form>
         <div style={{marginTop:"5rem"}}>
         <DatePicker/>
         <br></br>
         <DatePicker.RangePicker/>
         <TimePicker/>
         </div>
       
    </div>
  )
}

export default MyForm;