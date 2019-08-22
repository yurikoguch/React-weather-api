/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const style = css`
  height: 40px;
  font-size: 20px;
  border: none;
  font-family: 'Titillium Web', sans-serif;
 
`


class Form extends React.Component {

    render() {

        return (
            <div>
                <form className={'d-flex justify-content-center align-items-center'} onSubmit={this.props.weatherMethod}>
                    <input css={style}  type={'text'} name={'city'} placeholder={'City'}/>
                    <Button css={style} type={'submit'} variant="info">Get</Button>
                </form>
            </div>
        );
    };
};



export default Form