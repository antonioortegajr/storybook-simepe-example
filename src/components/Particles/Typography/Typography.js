import React from 'react';
import './typographyStyles.css';

import { useState } from 'react';

const Typography = (props) => {
  const [setLabel] = useState(''); // '' is the initial state value
  
    return (
      <div>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>Paragraph</p>
      </div>

    );
}

export default Typography