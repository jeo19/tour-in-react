import React from 'react';
import Joyride from 'react-joyride';
const TOUR_STEPS = [
    {
        target: '.tour_logo',
        content: "This is our tour's logo",
    },
    {
        target: '.tour-cart',
        content: "View the cart you've added here",
    },
    {
        target: '.tour-contact',
        content: 'Contact the developer',
    },
    {
        target: '.tour-policy',
        content: 'We accept returns after 14 days max',
    },
];
const Tour = () => {
    return (
        <>
            <Joyride
                steps={TOUR_STEPS}
                continuous={true}
                showSkipButton={true}
                locale={{ last: 'End tour', skip: 'Close tour' }}
            />
        </>
    );
};
