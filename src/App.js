import React,{useState,useEffect} from 'react';
import NewsCards from './components/NewsCards/NewsCards';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import usestyles from './styles.js';
import logo from './images/logo.png';


const alankey= '7b2a8be0eabe0348f730989f74e067522e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);
    const classes=usestyles(); 
    useEffect(()=>{
        alanBtn({
            key: alankey,
            onCommand:({command,articles, number})=>{
                if(command==='newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command==='highlight'){
                    setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
                } else if(command==='open'){
                    const parsedNumber= number.length > 2 ? wordsToNumbers(number,{fuzzy:true}):number;
                    const article=articles[parsedNumber-1];

                    if(parsedNumber>20){
                        alanBtn().playText('Please try that again.')
                    } else if(article){
                        window.open(article.url,'_blank');
                        alanBtn().playText('opening...')
                    }

                    
                }
            }
        })
    },[])
    return (
        <div className={classes.body}>
        <div className={classes.logoContainer}>
        <img src={logo} alt="alan logo" className={classes.alanLogo}/>
        </div>
            
            <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
        <div className={classes.bottom}>
        <p>This App was created by <a className={classes.hyperlink} href="https://debaprasad-dez.github.io/myweb/">Debaprasad</a></p>
        <p>Voice assistant used <a className={classes.hyperlink} href="https://alan.app/">alan.app</a></p>
        <p><a className={classes.hyperlink} href="https://github.com/Debaprasad-dez">Github</a></p>
        <p><a className={classes.hyperlink} href="https://www.linkedin.com/in/debaprasad-paul-a03421138/">Linkedin</a></p>
        <p><a className={classes.hyperlink} href="https://www.instagram.com/_ajatashatruue_/">Instagram</a></p>
        <p><a className={classes.hyperlink} href="https://www.behance.net/debaprasadpaul">Behance</a></p>
        </div>
        </div>
        
    )
}

export default App;