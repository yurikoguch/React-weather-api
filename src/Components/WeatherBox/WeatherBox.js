/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

const styledDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  height: 50%;
  font-family: 'Titillium Web', sans-serif;
  font-size 20px;
`

class WeatherBox extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&
                <div css={styledDiv}>
                    <p>City: {this.props.city}</p>
                    <p>Temperature: {this.props.temp} degrees Celsius</p>
                    <p>Country: {this.props.country}</p>
                    <p>Pressure: {this.props.pressure}</p>
                    <p>Humidity: {this.props.humidity}</p>
                </div>
                }
                <p>{this.props.error}</p>
            </div>
        );
    };
};

export default WeatherBox;