import React from 'react';
import Media from 'react-media'
import MainMenu from '../MainMenu/MainMenu'
import Button from '../Button/Button'
import Github from './github.svg'
import medicine from './medicine.svg'
import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <MainMenu/>
        <div className="home">
          <div className="left-row">
            <h1 className="main-title"> Essential Drugs &amp; Medicines <br/> List in Zimbabwe</h1>
            <Media query="(max-width: 780px)" render={() => <img className="medicine-illustration-sm" src={medicine} alt=""/>} />
              <div className="introduction">
                    This 7th essential medicines list and standard treatment guidelines for the most common
                    health conditions in Zimbabwe has been endorsed by the National Medicine &amp; Therapeutics
                    Policy Advisory Committee. It is the product of many years of combined efforts by hundreds
                    of health workers at all levels of the health care system in Zimbabwe.
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
              <img src={Github} alt="" width="20" height="20" alt="GitHub Icon" />
          </a>
          <small> Maintained on GitHub by well meaning developers</small>    
         </div>
      </div>
    );
  }
}