import React, { useState, useEffect } from 'react';
import './index.scss';
import { getHours } from './Utilits/functions';
import { useDispatch } from 'react-redux';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';

// components
import SchedulerDay from './components/SchedulerDay/SchedulerDay';
import GridLayout from './components/GridLayout/GridLayout';

// redux
import { setLayouts } from './store/actions';
import GridTable from './components/GridTable/GridTable';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';

const rooms = [
  1, 2, 3, 4, 5, 6
];

const days = [
  1, 2, 3, 4, 5, 6
]

function App() {
  const [hours] = useState(getHours(10, 18));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setLayouts(
        data.map((prop) => ({ ...prop, w: 1, h: 1 }))
      )
    )
  }, [])

  return (
    <div className="scheduler">
      <div className="scheduler__header">
        <div></div>
        <div>
          <table>
            <tbody>
              <tr>
                {
                  rooms.map(item => (<td key={item}>{item}</td>))
                }
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="scheduler__body">
        <div className="scheduler__dayBar">
          {
            days.map((item, index) => (
              <SchedulerDay 
                day={item}
                hours={hours}
                key={uuidv4()}
              />
            ))
          }
        </div>
        <div className="scheduler__appointments">
          <GridTable days={days} hours={hours} />
          <GridLayout />
        </div>
      </div>
      <AppointmentForm />
    </div>
  );
}

export default App;
