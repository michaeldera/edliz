import * as React from 'react';
import { PrimaryButton } from '@fluentui/react';
import Media from 'react-media'
import MainMenu from '../MainMenu/MainMenu'
import Button from '../Button/Button'
import Github from './github.svg'
import medicine from './medicine.svg'
import styled from 'styled-components'
import {MainComponent} from '../Information/Information'

const HomeComponent = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    padding: 80px;
    align-items: center;
    margin-bottom: 30px;
    min-height: calc(100vh - 140px);
    @media (min-width: 1025px) {
        padding: 50px;
    }
    @media (max-width: 1024px) {
        padding: 60px 15px 15px;
    }
`

const Title = styled.h1`
    font-family: Muli, sans-serif;
    font-weight: 300;
    font-size: 38px;
    color: #333333;
    letter-spacing: 1.08px;
    line-height: 46px;
    @media (min-width: 1025px) {
        margin: 90px 0 30px 0px;
    }
    @media (max-width: 1024px) {
        font-size: 22px;
        line-height: 26px;
        margin: 30px auto 24px;
        text-align: center;
    }
`

const Introduction = styled.div`
    font-family: 'IBM Plex Serif', serif;
    max-width: 1040px;
    font-size: 18px;
    color: #666666;
    letter-spacing: 0.26px;
    line-height: 30px;
    margin: 40px auto;
    @media (max-width: 1024px) {
        font-size: 14px;
        color: #101010;
        line-height: 22px;
        margin: 50px auto 40px;
        padding: 0 20px;
        text-align: center;
    }
`
const GithubComponent = styled.div`
    display: flex;
    justify-items: baseline;
    margin: 0 0 150px 50px;
    text-align: right;
    img {
        margin-right: 6px;
    }
    small {
        color: #6c63ff;
        line-height: 20px;
        font-size: 14px;
        letter-spacing: 0.26px;
        margin: 0;
    }
    @media (max-width: 1024px) {
        display: flex;
        justify-items: baseline;
        margin: 0 10px 50px 10px;
        text-align: center;
        img {
            display: none;
        }
        small {
            font-size: 12px;
            text-align: center;
            letter-spacing: 0.26px;
            margin: 0 auto;
        }
    }
`
const MedicineSM = styled.img`
    display: none;
    @media (max-width: 1024px) {
        display: block;
        max-width: 60vw;
        margin: 40px auto;
        max-height: 20vh;
    }
`
const Medicine = styled.img`
    box-sizing: border-box;
    padding: 40px;
    max-width: 40vw;
    max-height: 40vh;
    margin-top: 10vh;
`

const Home: React.FC = () => {
    return (
        <MainComponent>
            <MainMenu />

            <HomeComponent>
                <div>
                    <Title>
                        Essential Drugs &amp; Medicines <br /> List in Zimbabwe
                    </Title>
                    <Media query="(max-width: 1024px)" render={() => <MedicineSM src={medicine} alt="" />} />
                    <Introduction>
                        This 7th essential medicines list and standard treatment guidelines for the most common health
                        conditions in Zimbabwe has been endorsed by the National Medicine & Therapeutics Policy Advisory
                        Committee. It is the product of many years of combined efforts by hundreds of health workers at
                        all levels of the health care system in Zimbabwe.
                    </Introduction>
                    <PrimaryButton href="/#/chapters/1" text="Start Reading"/>
                </div>
                <Media query="(min-width: 1025px)" render={() => <Medicine src={medicine} alt="" />} />
            </HomeComponent>
            <GithubComponent>
                <a href="https://github.com/michaeldera/edliz" className="github-link">
                    <img src={Github} width="20" height="20" alt="GitHub Icon" />
                </a>
                <small>Maintained on GitHub by well meaning developers</small>
            </GithubComponent>
        </MainComponent>
    )
}

export default Home
