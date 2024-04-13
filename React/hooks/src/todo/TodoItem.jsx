/* eslint-disable react/prop-types */
import { List, Button } from 'antd';
// import { useState } from 'react';
// 子组件
const TotoItem = (props) => {
  const getIndex = (index) => {
    // console.log(index);
    props.handleDelete(index)
  }

  return (
    <div>
      <List bordered dataSource={props.data} renderItem={(item,index) => (
          <List.Item>
            {item}<Button shape="round" style={{float:'right'}} onClick={() => getIndex(index)}>x</Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TotoItem;