import { Button, Progress, Spin } from 'antd';
import React, { useState } from 'react'

function AntSpain() {
    const [loading, setLoading]=useState(false);
    
  return (
    <div>
        <Spin spinning={loading}></Spin>
        <br/>
         <Button type='primary'onClick={()=>{setLoading(preValue=>!preValue)}}>Toggle Spinning</Button>
         
         <Spin spinning={loading}>
         <br></br>
            <p style={{width:'50%',textAlign:'center',marginLeft:'25%'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium 
              blanditiis repellat cumque adipisci minus nihil explicabo ipsum, quidem illo ullam
              commodi, soluta eum expedita facere quam culpa magni quibusdam!</p>   
         </Spin>
         <br/>
         <br/>
        <div>
        <Progress percent={55} type='line' strokeColor={'red'} style={{width:'50%'}}/><br></br>
         <Progress percent={70} type='circle' strokeColor={{'0%': '#108ee9',
          '100%': '#87d068','0%': '#108ee9'}} strokeWidth={10} status='active'/>
         <Progress percent={33} type='circle' strokeColor={'success'} strokeWidth={10} status='success'/>
         <Progress percent={33} type='circle' strokeColor={'red'} strokeWidth={10} status='exception'/>
         <br></br>
         <Progress percent={55} type='line' strokeColor={'red'} status='success' style={{width:'50%'}}/>
         <Progress percent={55} type='line'  status='success'  style={{width:'50%'}}/>
         <Progress percent={55} type='line'  steps={3} style={{width:'50%'}}/>
        </div>
    </div>
  )
}

export default AntSpain;