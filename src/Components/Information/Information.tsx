import React from 'react'
import {inject, observer} from 'mobx-react'
import {toJS} from 'mobx/lib/mobx'
import {Link, animateScroll as scroll} from 'react-scroll'
import './information.css'
import {book} from '../../Data/data'
import MainMenu from '../MainMenu/MainMenu'
import Button from '../Button/Button'
import { IMobxStore } from '../../App';

const scrollToTop = () => {
    scroll.scrollToTop()
}

const Information: React.FC<IMobxStore> = ({EdlizStore}) => {
    
        const {toggleNavigationPanel, navigation} = toJS(EdlizStore!)

        return (
            <div className="main">
                <MainMenu/>
                <div className="information">
                    <div className="jump">Jump to Section</div>
                    <div>
                        <ul>
                            {book.contents.pre.map((elem) => (
                                <li key={elem.short_title}>
                                    {/* <a href='javascript:;' onClick={() => this.scrollTo(elem.short_title)}>{elem.short_title}</a> */}
                                    <Link
                                        activeClass="active"
                                        className="link"
                                        to={elem.short_title}
                                        spy
                                        smooth
                                        offset={-70}
                                        duration={500}
                                    >
                                        {elem.short_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {book.contents.pre.map((elem) => (
                        <section className={elem.short_title} key={elem.short_title}>
                            {elem.content}
                            <br />
                            <Button onClick={scrollToTop} type="button">
                            Back to top
                            </Button>
                        </section>
                    ))}
                </div>
            </div>
        )
    }


export default inject('EdlizStore')(observer(Information))
