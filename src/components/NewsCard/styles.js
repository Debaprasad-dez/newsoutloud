import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
media:{
    height: 200,
},
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid #4DD0E1',
    borderRadius: '15px',
    boxShadow: '0px 0px 10px 	rgb(255, 255, 255,0.4)',
  },
  activeCard: {
    borderBottom: '10px solid red',
    transform: 'translate(0px, -10px)',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});