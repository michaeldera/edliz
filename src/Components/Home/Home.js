import React from 'react'
import Media from 'react-media'
import {inject, observer} from 'mobx-react'
import {toJS} from 'mobx'
import MainMenu from '../MainMenu/MainMenu'
import RoundedBtn from '../RoundedBtn/RoundedBtn'
import WheelChair from './wheelchair.png'
import Github from './github.png'
import './home.css'

class Home extends React.Component {
    render() {
        const {toggleNavigationPanel, navigation} = toJS(this.props.EdlizStore)
        return (
            <div>
                <MainMenu toggle={toggleNavigationPanel} navigation={navigation} />
                <div className="home">
                    <div className="left-row">
                        <h1 className="main-title">
                            Essential Drugs & <br /> Medicines List in Zimbabwe
                        </h1>
                        <div className="edliz-intro">
                            This 7th essential medicines list and standard treatment guidelines for the most common
                            health conditions in Zimbabwe has been endorsed by the National Medicine & Therapeutics
                            Policy Advisory Committee. It is the product of many years of combined efforts by hundreds
                            of health workers at all levels of the health care system in Zimbabwe
                        </div>
                        <p className="start-reading">
                            <RoundedBtn href="/#/chapters/1" type="a">
                                Start Reading
                            </RoundedBtn>
                        </p>
                    </div>
                    <Media
                        query="(min-width: 1280px)"
                        render={() => <img className="people-wide" src={WheelChair} alt="" width="809" height="650" />}
                    />
                    <Media
                        query="(min-width: 1100px) and (max-width: 1280px)"
                        render={() => <img className="people-wide" src={WheelChair} alt="" width="607" height="488" />}
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
        )
    }
}

export default inject('EdlizStore')(observer(Home))
