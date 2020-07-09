import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('seasons dropdown menu shows all options and fetches correct episodes and renders them', () => {
    // Arrange
        // render App and make sure dropdown menu is shown

    // Act
        // use userEvent not fireEvent
        // click on dropdown menu (and make sure options appear)
        // click on option and (make sure: 
            // api is called
            // correct episodes appear)

    // Assert
        // wait for the api call to finish
        // make sure dropdown menu options appear
        // make sure selecting season 
            // calls api
            // renders correct episodes
}); 