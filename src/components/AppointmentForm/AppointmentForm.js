import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TextField } from '@material-ui/core';

// redux
import { setLayouts, setModalIsOpened } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AppointmentForm() {
  const [formData, setFormData] = useState({});

  // --
  const classes = useStyles();
  const open = useSelector(state => state.modalIsOpened);
  const layouts = useSelector(state => state.layouts);
  const appointment = useSelector(state => state.currentAppointment);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value}))
  };

  const handleClose = () => {
    dispatch(setModalIsOpened(false));
  };

  const handleSave = () => {
    if (!appointment.title) {
      dispatch(setLayouts([...layouts, {...appointment, ...formData}]));
      dispatch(setModalIsOpened(false));
    }
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Button autoFocus color="inherit" onClick={handleSave}>
              Зберегти
            </Button>
          </Toolbar>
        </AppBar>
        <List style={{ padding: '30px' }}>
          <TextField
            label="Title"
            variant="outlined"
            onChange={(e) => handleChange(e)}
            name="title"
          />
        </List>
      </Dialog>
    </div>
  )
}
