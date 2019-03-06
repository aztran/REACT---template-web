import React, { Component } from 'react';

import { Tabs, Row, Col } from 'antd';

import visa from '../../../assets/img/visa.png';
import masterCard from '../../../assets/img/mastercard.png';
import jcb from '../../../assets/img/jcb.png';
import amex from '../../../assets/img/amex.png';

import './Payment.scss';

const TabPane = Tabs.TabPane;



class Payment extends Component {
  
  render() {

    function callback(key) {
      console.log(key);
    }
    const style = {
      paddingRight: '12px',
    }
    return (
      <div className="panel-payment">
        <div className="panel-payment__header">
          Please Select your Payment Method
        </div>
        <div className="panel-payment__header--bottom">
          Total Be Paid by Agent
          <h1>IDR 11,450,000,-</h1>
        </div>
        <div className="panel-payment__content">
          <p>You will be redirect to external page when you click on the confirm trip button.</p>
          <p>The methods of payment available will exclude</p>

          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Credit Card" key="1" className="tab-content">
              <Row className="panel__item padding-content">
                <Col span={16}>
                  <div className="panel__item--column">
                    <label>
                      Card Holder Name
                    </label>
                    <input type="text" />
                  </div>
                  <div className="panel__item--column">
                    <label>
                      Card Number
                    </label>
                    <input type="text" />
                  </div>
                  <Row>
                    <Col span={12} style={style}>
                      <div className="panel__item--column">
                        <label>
                          Expired Date
                        </label>
                        <input type="date" />
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="panel__item--column">
                        <label>
                          CCV COde
                        </label>
                        <input type="text" />
                      </div>
                    </Col>
                  </Row>
                  <div className="panel__item--column">
                    <label>
                      Card Issuer
                    </label>
                    <input type="text" />
                  </div>
                  <div className="panel__item--column">
                    <label>
                      Card Issuer Country
                    </label>
                    <input type="text" />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="panel__item--column">
                    <div className="panel-payment__logo">
                      <img src={visa} alt="visa"/>
                      <img src={masterCard} alt="mastercard"/>
                      <img src={jcb} alt="jcb"/>
                      <img src={amex} alt="amex"/>
                    </div>
                  </div>

                </Col>
              </Row>
              <Row className="panel__item--color padding-content">
                <Col span={16}>
                  <div className="panel__item--apply">
                    <label>
                      Voucher Apply
                    </label>
                    <input type="text" />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Internet Banking" key="2">Internet Banking</TabPane>
            <TabPane tab="Debit Card" key="3">Debit Card</TabPane>
            <TabPane tab="Other Payment" key="4">Other Payment</TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}


export default Payment;