/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'


const styledDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  font-family: 'Titillium Web', sans-serif;
`
const styledH1 = css`
  font-weight: 700;
`

class Description extends React.Component{

    render() {
        return(
            <div css={styledDiv}>
                <h1 css={styledH1}>This is Weather Forecast React app</h1>
                <h3>Please, enter your city in a form, and you will see the current weather</h3>
            </div>
        );
    };
};


export default Description