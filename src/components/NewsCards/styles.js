import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    title:{
        fontWeight: '800',
        fontFamily: 'Montserrat,sansserif',
        marginBottom: '0',
        fontStyle: 'italic',
        textTransform: 'uppercase'
    },
    speech:{
        fontFamily: 'Montserrat,sansserif',
        color: '#9500ff',
        fontWeight: '400',
    },
    info:{
        marginBottom: '2vh',
        color: '#00e4ff',
        fontFamily: 'Montserrat,sansserif',
    },
    container:{
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'left',
        width: '100%',
        height: 'auto',
        padding: '10%',
        borderRadius:20,
        borderBottom: '10px solid white',
        color: 'white'
    },
    infoCard:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
    }
})

