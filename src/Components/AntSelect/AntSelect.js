import { Select } from 'antd';
import React from 'react'


function AntSelect() {

    const fruits=['Banana','Apple','Cherry','Mango','Orange']
  return (
    <div>
    <p>Which is Your favorite fruit</p>
        <Select placeholder='Select Fruit' style={{width:'50%'}}>
              {fruits.map((fruit,index)=>{
                 return <Select.Option key={index} value={index}> {fruit} </Select.Option>
              })}
        </Select>
        <p>What are Your favorite fruit</p>
        <Select mode='multiple' maxTagCount={2} allowClear placeholder='Select Fruit' style={{width:'50%'}}>
              {fruits.map((fruit,index)=>{
                 return <Select.Option key={index} value={index}> {fruit} </Select.Option>
              })}
        </Select>
    </div>
  )
}

export default AntSelect;