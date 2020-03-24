import React from 'react';

import style from './style.module.css';

export const TableHeader = () => {
  const {
    table,
    underLine1,
    empty1,
    underLine2,
    empty2,
    empty3,
    bordered,
    paymentOrder,
    underLine3,
    empty4,
    underLine4,
    empty5,
    cell101
  } = style;
  return (
    <div className={table}>
      <div className={underLine1}></div>
      <div className={empty1}></div>
      <div className={underLine2}></div>
      <div className={empty2}></div>
      <div className={empty3}></div>
      <div className={bordered}></div>
      <div className={paymentOrder}>Платёжное поручение</div>
      <div className={underLine3}></div>
      <div className={empty4}></div>
      <div className={underLine4}></div>
      <div className={empty5}></div>
      <div className={cell101}>101</div>
    </div>
  );
};
