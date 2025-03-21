import * as React from 'react';
import './style.css';
import Grid from './grid';
import dataList from './data.json';

function control(today: Date, limit: number) {
  let incorrectRows = 0; 
  const todayDate = today.getTime();

  dataList.forEach((item) => {
    const mailReceivedDate = new Date(item.mailReceivedDate).getTime();
    const solutionSentDate = item.solutionSentDate
      ? new Date(item.solutionSentDate).getTime()
      : todayDate; 

    const diffDays = Math.ceil(
      (solutionSentDate - mailReceivedDate) / (1000 * 60 * 60 * 24)
    ); 

    const isBackgroundColorRed = diffDays > limit; 

    if (isBackgroundColorRed && !item.isBackgroundColorRed) {
      incorrectRows++;
    }
    if (!isBackgroundColorRed && item.isBackgroundColorRed) {
      incorrectRows++;
    }
  });

  return incorrectRows;
}

export default function App() {
  const today = new Date('2021-10-06'); 
  const limit = 5; 
  const incorrectRowsCount = control(today, limit); 

  return (
    <div>
      <h1>Mail Takip Tablosu</h1>
      <p>Yanlış renkteki satır sayısı: {incorrectRowsCount}</p>
      <Grid source={dataList} />
    </div>
  );
}
