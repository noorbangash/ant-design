import React from "react";
import { Input } from "antd";
import "./Antinput.css";
import { UserOutlined } from "@ant-design/icons";

function Antinput() {
  return (
  
    <div>
      <Input
        type="text"
        placeholder="Enter Name"
        maxLength={12}
        className="my-input"
        prefix={<UserOutlined />}
        allowClear
      ></Input>
      </div>
          
  
  );
}

export default Antinput;
