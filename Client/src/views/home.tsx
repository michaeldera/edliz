import * as React from 'react';
import { PrimaryButton, Text, Stack } from '@fluentui/react';

export const Home = () => {
    return (
        <Stack>
                    <Text variant="mega" block>Essential Drugs and Medicines List in Zimbabwe</Text>
                    <Text block>This 7th essential medicines list and standard treatment guidelines for the most common health conditions in Zimbabwe has been endorsed by the National Medicine & Therapeutics Policy Advisory Committee. It is the product of many years of combined efforts by hundreds of health workers at all levels of the health care system in Zimbabwe. </Text>
                    <PrimaryButton href="/#/chapters/1" text="Start Reading"/>

            <small>Maintained on GitHub by well meaning developers</small>
        </Stack>
    )
}
