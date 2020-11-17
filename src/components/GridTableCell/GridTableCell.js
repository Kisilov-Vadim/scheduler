import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

// redux
import { setLayouts, setModalIsOpened, setCurrentAppointment } from '../../store/actions';


export default function GridLayoutCell({ row, cell }) {
  const dispatch = useDispatch();
  // const layouts = useSelector(state => state.layouts);

  const handleClick = () => {
    const appointment = {
      i: uuidv4(),
      x: cell,
      y: row,
      w: 1,
      h: 1,
    }
    dispatch(setCurrentAppointment(appointment))
    dispatch(setModalIsOpened(true))
    // dispatch(setLayouts([...layouts, newApp]))
  }

  return (
    <td
      onClick={handleClick}
    >

    </td>
  )
}
