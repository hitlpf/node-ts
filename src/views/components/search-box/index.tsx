import React, { useState } from 'react';
import axios from 'axios';

const SearchBox: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const changeHandle = async function (event: React.ChangeEvent) {
    setInputValue((event?.target as HTMLInputElement)?.value);
  };

  const clickHandle = async function () {
    const data = await axios.get(`/getInfo?key=${inputValue}`);
    console.log(data.data.info);
    setNewValue(data.data.info);
  };

  return (
    <div className='search-box'>
      <input
        type="text"
        value={inputValue} // 将 inputValue 状态绑定到输入框的 value 属性
        onChange={changeHandle} // 设置 onChange 事件处理函数
        placeholder="请输入"
      />
      <p>返回的值是: {newValue}</p>
      <span className='button' onClick={clickHandle}>提交</span>
    </div>
  );
};

export default SearchBox;
