import React from 'react';
import Media from 'react-media'
import MainMenu from '../MainMenu/MainMenu'
import Button from '../Button/Button'
import Github from './github.svg'
import medicine from './medicine.svg'
import './home.css';

export default class Home extends React.Component<any, {}> {
  render() {
    return (
      <div className="main">
        <MainMenu/>
        <div className="home">
          <div className="left-row">
            <h1 className="main-title"> Essential Drugs &amp; Medicines <br/> List in Zimbabwe</h1>
            <Media query="(max-width: 780px)" render={() => <img className="medicine-illustration-sm" src={medicine} alt=""/>} />
              <div className="introduction">
                    This is the 7th Essential Medicines List and Standard Treatment Guidelines for the most common
                    health conditions in Zimbabwe. It is the product of the combined efforts by hundreds
                    of health workers in Zimbabwe.
              </div>
              <p className="start-reading">
                 <Button href="/#/chapters/1" type="a">
                    Start Reading
                 </Button>
              </p>
          </div>
          <Media query="(min-width: 1024px)" render={() => <img className="medicine-illustration" src={medicine} alt=""/>} />
        </div>
        <div className="github">
          <a href="https://github.com/michaeldera/edliz" className="github-link">
              <img src={Github} width="20" height="20" alt="GitHub Icon" />
          </a>
          <small>Maintained on GitHub by well meaning developers</small>    
         </div>
      </div>
    );
  }
}