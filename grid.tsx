import * as React from 'react';

interface GridProps {
  source: {
    name: string;
    mailReceivedDate: string;
    solutionSentDate?: string;
    isBackgroundColorRed?: boolean;
  }[];
}

export default function Grid({ source }: GridProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mail Received Date</th>
          <th>Solution Sent Date</th>
        </tr>
      </thead>
      <tbody>
        {source.map((item, index) => {
          const backgroundColor = item.isBackgroundColorRed ? 'red' : 'transparent';
          return (
            <tr key={index} style={{ backgroundColor }}>
              <td>{item.name}</td>
              <td>{item.mailReceivedDate}</td>
              <td>{item.solutionSentDate ? item.solutionSentDate : 'Not Provided'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
