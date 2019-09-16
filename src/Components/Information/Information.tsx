import React from 'react'
import {inject, observer} from 'mobx-react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './information.css'
import {book} from '../../data/data'
import MainMenu from '../MainMenu/MainMenu'
import Button from '../Button/Button'
import {IMobxStore} from '../../App'
import styled from 'styled-components'

export const MainComponent = styled.div`
    text-align: left;
    background-color: #ffffff;
    min-height: 80vh;
`
const MainInformation = styled(MainComponent)`
    li a {
        color: #3c8eff;
        display: inline-block;
        border-bottom: 1px dotted;
    }
`
const scrollToTop = () => {
    scroll.scrollToTop()
}

const InformationComponent = styled.div`
    margin: 30px 30px;
    text-align: left;
`

const SectionHeader = styled.div`
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    margin: 130px 0 30px 0px;
    font-size: 25px;
    color: #101010;
    letter-spacing: 1.08px;
    @media (min-width: 1025px) { {
        margin: 60px 0 30px 0px;
    }
`

const SectionLink = styled(Link)`
    cursor: pointer;
`

const Information: React.FC<IMobxStore> = ({EdlizStore}) => {
    return (
        <MainInformation>
            <MainMenu />
            <InformationComponent>
                <SectionHeader>Jump to Section</SectionHeader>
                <div>
                    <ul>
                        {book.contents.pre.map((elem) => (
                            <li key={elem.short_title}>
                                <SectionLink
                                    activeClass="active"
                                    to={elem.short_title}
                                    spy
                                    smooth
                                    offset={-70}
                                    duration={500}
                                >
                                    {elem.short_title}
                                </SectionLink>
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
            </InformationComponent>
        </MainInformation>
    )
}

export default inject('EdlizStore')(observer(Information))
