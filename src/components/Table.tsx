import React, { FC } from 'react';
import './styles/events.css';

interface ITableProps {
  headers: any;
  events: any;
}

export const Table: FC<ITableProps> = ({ headers }) => (
  <div className="events-viewer">
    <div className="header-row">
      {headers.map((item, index) => (
        <div className="column" key={index}>
          <div className="cell header">{item}</div>
        </div>
      ))}
    </div>
    <div className="row">
      <div className="column">
        <div className="cell">Column One</div>
      </div>
      <div className="column">
        <div className="cell">Column Two</div>
      </div>
      <div className="column">
        <div className="cell">
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
    <div className="row alt">
      <div className="column">
        <div className="cell">Column One</div>
      </div>
      <div className="column">
        <div className="cell">Column Two</div>
      </div>
      <div className="column">
        <div className="cell">
          <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
