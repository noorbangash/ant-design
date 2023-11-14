import React, { useState } from 'react';
import{Button} from 'antd';
import{PoweroffOutlined} from '@ant-design/icons';
import './AntBtn.css'

function AntBtn() {
    const[loading,setLoading]=useState(false)

    const onButtonClick =(e)=>{
       setLoading(true);
       setTimeout(()  => {
        setLoading(false)
       },2000);
    }
  return (
    <div>
        <Button type='primary' onClick={onButtonClick} loading={loading} icon={<PoweroffOutlined/>} className='mybtn'>My First Button</Button>
         <br></br>
         <Button block className='btn'>Click Me</Button>
        
    </div>
  )
}

export default AntBtn;