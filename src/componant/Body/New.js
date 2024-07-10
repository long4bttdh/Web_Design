import React, { useEffect, useState } from 'react';
import Content from './Content';

function New() {
    const Main = Content()

  return (
    <div className="New">
      <div className="">
        <p style={{ fontFamily: 'New York Extra Large', fontWeight: 'bold', fontSize: '32px', margin: '20px auto', textAlign: 'center' }}>
          What you read next?
        </p>
      </div>
      <div className="">
        {Main}
      </div>
    </div>
  );
}

export default New;
