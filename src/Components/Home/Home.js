import React from 'react';
import { Link } from "react-router-dom"
import Media from 'react-media'
import MainMenu from '../MainMenu/MainMenu'
import RoundedBtn from '../RoundedBtn/RoundedBtn'
import WheelChair from './home-wheelchair.png'
import Github from './github.svg'
import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <MainMenu/>
        <div className="home">
          <div className="left-row">
            <div className="main-title"> Essential Drugs &amp; Medicines <br/> List in Zimbabwe</div>
              <div className="edliz-intro">
                    This 7th essential medicines list and standard treatment guidelines for the most common
                    health conditions in Zimbabwe has been endorsed by the National Medicine &amp; Therapeutics
                    Policy Advisory Committee. It is the product of many years of combined efforts by hundreds
                    of health workers at all levels of the health care system in Zimbabwe.
              </div>
              <p className="start-reading">
                 <RoundedBtn href="/#/chapters/1" type="a">
                    Start Reading
                 </RoundedBtn>
              </p>
          </div>
          <Media
              query="(min-width: 1280px)"
              render={() => <img className="people-wide" src={WheelChair} alt="" width="809" height="650"/>}
          />
        </div>
        <div className="github">
          <a href="https://github.com/michaeldera/edliz" className="github-link">
              {' '}
              <img className="people-wide" src={Github} alt="" width="33" height="32" />
          </a>
            <p>
              This application was built and is maintained by a well meaning developers. The code is
              opensource and is available to fork, share and improve on github.
            </p>    
         </div>
      </div>
    );
  }
}