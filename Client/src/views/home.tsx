import * as React from 'react';
import { PrimaryButton, Text, Stack, IStackTokens, Image } from '@fluentui/react';
import { logo } from '../assets';

export const Home = () => {

    const stackTokens: IStackTokens = {
        childrenGap: 40,
        padding: '10vw'
    } 
    const imageStyle : React.CSSProperties = {
        width: 'min(200px, 60%)',
        paddingTop: 20,
        paddingBottom: 20
    }

    return (
        <Stack tokens={stackTokens}>
            <Text variant="xxLarge" block>Essential Drugs and Medicines List in Zimbabwe</Text>
            <Image src={logo} alt="Artwork" style={imageStyle}/>
            <Text block>This 7th essential medicines list and standard treatment guidelines for the most common health conditions in Zimbabwe has been endorsed by the National Medicine & Therapeutics Policy Advisory Committee. It is the product of many years of combined efforts by hundreds of health workers at all levels of the health care system in Zimbabwe.</Text>
            <Stack horizontal>
                <PrimaryButton href="/#/chapters/1" text="Start Reading" />
            </Stack>
        </Stack>
    )
}
