import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

 const Cards=({data:{confirmed, recovered, deaths, lastUpdate}}) =>{
   if(!confirmed){
       return 'Loading..';
   }
    return(
        <div className={styles.container}>
            <Grid container spacing={6} justify={"center"} >
                <Grid item component={Card} xs={4} md={4} classname={cx(styles.card, styles.infected)}>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">No active cases</Typography>
                </Grid>
                <Grid item component={Card} xs={4} md={4} classname={cx(styles.card, styles.recovered)}>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">No recovered cases</Typography>
                </Grid>
                <Grid item component={Card} xs={4} md={4} classname={cx(styles.card, styles.deaths)}>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} separator=","/>
                    </Typography>
                    <Typography color="textSecondary" >
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">No deaths</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
