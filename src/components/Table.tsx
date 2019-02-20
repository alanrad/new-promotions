/*
 * Table Component
 * Components are purely presentational and are concerned with how things look
 * Have no dependencies on the rest of the app such as actions, resolvers or app state
 * Receive data and callbacks exclusively via props
 * When they do have their own state, it’s UI state rather than data
 */

import React, { Component } from 'react';
import * as ClassNames from 'classnames';
import { isEven, formatter } from '../utils/common';
import './styles/table.css';

interface ITableProps {
  headers: any;
  events: any;
  orderUpdated: (state: object) => void;
}

interface ITableStates {
  orders: any;
}

export class Table extends Component<ITableProps, ITableStates> {
  state = {
    orders: {},
  };

  modifyOrder = (id: number, value: number): void => {
    const temp = this.state.orders;
    temp[`${id}`] = value;
    this.setState({
      orders: temp,
    });
  };

  submitOrder = () => {
    this.props.orderUpdated(this.state.orders);
  };

  render() {
    const { headers, events } = this.props;
    return (
      <div className="events-viewer">
        <div className="header-row">
          {headers.map((item: string, index: number) => (
            <div className="column" key={index}>
              <div className="cell header">{item}</div>
            </div>
          ))}
        </div>
        {events.map(({ id, event, cost }, index: number) => (
          <div
            className={ClassNames({ row: true, alt: isEven(index) })}
            key={id}>
            <div className="column">
              <div className="cell">{event}</div>
            </div>
            <div className="column">
              <div className="cell">{formatter.format(cost)}</div>
            </div>
            <div className="column">
              <div className="cell">
                <input
                  className="input"
                  type="number"
                  onChange={e => {
                    this.modifyOrder(id, Number(e.target.value));
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="row footer">
          <div className="column" />
          <div className="column" />
          <div className="column">
            <div className="cell">
              <button className="button" onClick={this.submitOrder}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
