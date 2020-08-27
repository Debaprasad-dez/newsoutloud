import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles';


const infoCards = [
  { background: 'linear-gradient(90deg, #242424 0%, #242424 50%)', title: 'Latest News', text: 'Give me the latest news' },
  { background: 'linear-gradient(90deg, #242424 0%, #242424 50%)', title: 'News by Categories', info: 'Business Entertainment General Health Science Sports Technology', text: 'Give me the latest Technology news' },
  { background: 'linear-gradient(90deg, #242424 0%, #242424 50%)', title: 'News by Terms', info: 'Bitcoin PlayStation 5 Smartphones Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { background: 'linear-gradient(90deg, #242424 0%, #242424 50%)', title: 'News by Sources', info: 'CNN Wired BBC News Time IGN Buzzfeed ABC News...', text: 'Give me the news from CNN' },
];  


const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();
  
    if (!articles.length) {
      return (
        <Grow in>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                <div className={classes.card} style={{ background: infoCard.background }}>
                  <Typography className={classes.title} variant="h5" component="h5">{infoCard.title}</Typography>
                  {infoCard.info ? <Typography className={classes.info} variant="h6" component="h6"><br />{infoCard.info}</Typography> : null}
                  <Typography variant="h6" component="h6">Try saying <br /><b className={classes.speech}>{infoCard.text}</b> </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      );
    }
  
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
              <NewsCard activeArticle={activeArticle} i={i} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  };
  
  export default NewsCards;