import React from 'react';
import {render, waitFor} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {fetchShow as mockFetchShow} from './api/fetchShow';
import App from './App';

//mock out fetchShow with jest
jest.mock('./api/fetchShow');

test('loading message renders before api call', () => {
    const {getByText} = render(<App />);
    const loading = getByText(/fetching data.../i);

    expect(loading).toEqual(/fetching data.../i);
});

test('seasons dropdown menu shows all options and fetches correct episodes and renders them', async () => {
    // Arrange
    // render App and make sure fetching data element is shown
    // render App and make sure dropdown menu is shown
    mockFetchShow.mockResolvedValueOnce(episodes);
    const {getByText, findAllByRole, findByRole, getAllByTestId} = render(<App />);
    const dropdown = getByText(/select a season/i);

    // Act
    // use userEvent not fireEvent
    // click on dropdown menu (and make sure options appear)
    // click on option and (make sure: 
    // * api is called
    // * correct episodes appear)
    userEvent.click(dropdown);
    await findAllByRole("option", {name: /season/i});
    userEvent.click(findByRole("option", {name: /season 1/i}));

    // Assert
    // wait for the api call to finish
    // make sure dropdown menu options appear
    // make sure selecting season 
    // * calls api
    // * renders correct episodes
    await waitFor(() => {
        expect(getAllByTestId("episode")).toHaveLength(3);
    })
}); 


//mock data

const episodes = {data: [
    {
        id: 553946,
        url: 'http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers',
        name: 'Chapter One: The Vanishing of Will Byers',
        season: 1,
        number: 1,
        airdate: '2016-07-15',
        airtime: '',
        airstamp: '2016-07-15T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg'
        },
        summary: '<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy\'s friends conduct their own search, and meet a mysterious girl in the forest.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/553946'
          }
        }
    },
    {
        id: 578663,
        url: 'http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street',
        name: 'Chapter Two: The Weirdo on Maple Street',
        season: 1,
        number: 2,
        airdate: '2016-07-15',
        airtime: '',
        airstamp: '2016-07-15T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg'
        },
        summary: '<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/578663'
          }
        }
    },
    {
        id: 578664,
        url: 'http://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly',
        name: 'Chapter Three: Holly, Jolly',
        season: 1,
        number: 3,
        airdate: '2016-07-15',
        airtime: '',
        airstamp: '2016-07-15T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg'
        },
        summary: '<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/578664'
          }
        }
    },
    {
        id: 909340,
        url: 'http://www.tvmaze.com/episodes/909340/stranger-things-2x01-chapter-one-madmax',
        name: 'Chapter One: MADMAX',
        season: 2,
        number: 1,
        airdate: '2017-10-27',
        airtime: '',
        airstamp: '2017-10-27T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg'
        },
        summary: '<p>One year after the events with the Upside Down and the Demogorgon, Will meets with a government doctor. The boys discover that there\'s a new player in town, and Jim pays a visit to El.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/909340'
          }
        }
    },
    {
        id: 909342,
        url: 'http://www.tvmaze.com/episodes/909342/stranger-things-2x02-chapter-two-trick-or-treat-freak',
        name: 'Chapter Two: Trick or Treat, Freak',
        season: 2,
        number: 2,
        airdate: '2017-10-27',
        airtime: '',
        airstamp: '2017-10-27T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/332034.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/332034.jpg'
        },
        summary: '<p>The boys go trick-or-treating on Halloween, and Will has another vision. Meanwhile, El relieves the days following her escape from the Upside Down, and Dustin finds something in the garbage can.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/909342'
          }
        }
    },
    {
        id: 909343,
        url: 'http://www.tvmaze.com/episodes/909343/stranger-things-2x03-chapter-three-the-pollywog',
        name: 'Chapter Three: The Pollywog',
        season: 2,
        number: 3,
        airdate: '2017-10-27',
        airtime: '',
        airstamp: '2017-10-27T12:00:00+00:00',
        runtime: 60,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/132/332039.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/132/332039.jpg'
        },
        summary: '<p>Dustin takes in a stray and calls it D\'Artagnan. However, his plans to show it to Mr. Clarke don\'t go as intended. Meanwhile, Max tries to convince Mike to let her join the group, El sneaks out to pay her friends a visit, and Will decides to take a stand and face his fears.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/909343'
          }
        }
    },
    {
        id: 1576469,
        url: 'http://www.tvmaze.com/episodes/1576469/stranger-things-3x01-chapter-one-suzie-do-you-copy',
        name: 'Chapter One: Suzie, Do You Copy?',
        season: 3,
        number: 1,
        airdate: '2019-07-04',
        airtime: '',
        airstamp: '2019-07-04T12:00:00+00:00',
        runtime: 51,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg'
        },
        summary: '<p>Things change over the summer: Jonathan, Nancy, Steve, and Billy get jobs; Dustin goes to science camp; El and Mike become an item; Lucas and Max almost become an item. Meanwhile, mysterious power outages plague Hawkins and rats start exploding.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/1576469'
          }
        }
    },
    {
        id: 1576470,
        url: 'http://www.tvmaze.com/episodes/1576470/stranger-things-3x02-chapter-two-the-mall-rats',
        name: 'Chapter Two: The Mall Rats',
        season: 3,
        number: 2,
        airdate: '2019-07-04',
        airtime: '',
        airstamp: '2019-07-04T12:00:00+00:00',
        runtime: 50,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/204/511261.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/204/511261.jpg'
        },
        summary: '<p>While El and Max go shopping, Nancy and Wheeler follow up on the exploding rats. Billy takes a coworker on a field trip, and Joyce blows off dinner with Jim to meet with Mr. Clarke.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/1576470'
          }
        }
    },
    {
        id: 1576471,
        url: 'http://www.tvmaze.com/episodes/1576471/stranger-things-3x03-chapter-three-the-case-of-the-missing-lifeguard',
        name: 'Chapter Three: The Case of the Missing Lifeguard',
        season: 3,
        number: 3,
        airdate: '2019-07-04',
        airtime: '',
        airstamp: '2019-07-04T12:00:00+00:00',
        runtime: 50,
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/204/511286.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/204/511286.jpg'
        },
        summary: '<p>El goes astrally projecting and discovers that Billy has done something with Heather. While the girls try to find the missing lifeguard, Will tries to get Mike and Lucas interested in D&amp;D. Dustin and Steve spy on the mall shops, and Robin tries to decipher the Russian message.</p>',
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/1576471'
          }
        }
    },
    {
        id: 1752754,
        url: 'http://www.tvmaze.com/episodes/1752754/stranger-things-4x01-chapter-one-the-hellfire-club',
        name: 'Chapter One: The Hellfire Club',
        season: 4,
        number: 1,
        airdate: '',
        airtime: '',
        airstamp: null,
        runtime: 60,
        image: null,
        summary: null,
        _links: {
          self: {
            href: 'http://api.tvmaze.com/episodes/1752754'
          }
        }
    }
]};