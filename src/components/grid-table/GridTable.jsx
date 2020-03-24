import React from 'react';
import { TableHeader } from "./table-header";

import style from './style.module.css';

export const GridTable = () => {
  const {
    table,
    amountHeader,
    amount,
    inn,
    kpp,
    blank,
    blank2,
    blank3,
    blank4,
    blank5,
    blank6,
    blank7,
    blank8,
    blank9,
    blank10,
    blank11,
    blank12,
    blank13,
    blank14,
    blank15,
    amountHint,
    payer,
    payerRequisites1,
    payerRequisites2,
    payeeBank,
    payeeInnKpp,
    payeeRequisites,
    payee,
    cell20,
    cell104,
    cell105,
    cell106,
    cell107,
    cell108,
    cell109,
  } = style;
  return (
    <>
    <TableHeader />
    <div className={table}>
      <div className={amountHeader}></div>
      <div className={amount}></div>
      <div className={inn}></div>
      <div className={kpp}></div>
      <div className={amountHint}>Сумма</div>
      <div className={payer}></div>
      <div className={payerRequisites1}></div>
      <div className={payerRequisites2}></div>
      <div className={payeeBank}></div>
      <div className={payeeInnKpp}></div>
      <div className={payeeRequisites}></div>
      <div className={payee}></div>
      <div className={blank}></div>
      <div className={blank2}></div>
      <div className={blank3}></div>
      <div className={blank4}></div>
      <div className={blank5}></div>
      <div className={blank6}></div>
      <div className={blank7}></div>
      <div className={blank8}></div>
      <div className={blank9}></div>
      <div className={blank10}></div>
      <div className={cell20}>20</div>
      <div className={cell104}>104</div>
      <div className={cell105}>105</div>
      <div className={cell106}>106</div>
      <div className={cell107}>107</div>
      <div className={cell108}>108</div>
      <div className={cell109}>109</div>
      <div className={blank11}></div>
      <div className={blank12}></div>
      <div className={blank13}></div>
      <div className={blank14}></div>
      <div className={blank15}></div>
    </div>
    </>
  );
};
