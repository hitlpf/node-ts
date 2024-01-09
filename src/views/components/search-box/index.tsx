import React, { useState } from 'react';

const SearchBox: React.FC = () => {
  const [inputValue, setInputValue] = useState('请输入');

  const changeHandle = async function (event: React.ChangeEvent) {
    setInputValue((event?.target as HTMLInputElement)?.value);
  };

  return (
    <div className='search-box'>
      <input
        type="text"
        value={inputValue} // 将 inputValue 状态绑定到输入框的 value 属性
        onChange={changeHandle} // 设置 onChange 事件处理函数
      />
      <p>输入的值是: {inputValue}</p> {/* 显示当前的 inputValue 状态 */}
    </div>
  );
};

export default SearchBox;
