import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';

const ButtonReadMore = ({title}) => {
    return (
        <button className="btn all-button about-button ">
              {title}{" "}
              {
                <ArrowNarrowRightIcon className="arrow-icon"></ArrowNarrowRightIcon>
              }
            </button>
    );
};

export default ButtonReadMore;