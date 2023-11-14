import { Table } from 'antd';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import React from 'react'

function AntTable() {
    const data= [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'key',
          render:name =>{
            return <a>{name}</a>
            
          }
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'key',
          sorter:(a,b) =>a.age - b.age
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'key',
        },
        {
          title: 'Graduated',
          key: 'key',
          render: payload =>{
            return <p>{payload.age >20? 'true':'false'}</p>
          }

        },
      ];
  return (
    <div>
        <Table dataSource={data}
         columns={columns} >
       
        </Table>
    </div>
  )
}

export default AntTable;