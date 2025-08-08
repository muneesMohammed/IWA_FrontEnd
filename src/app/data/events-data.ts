// src/app/data/events-data.ts
export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  points: string[];
  categories: string[];
}

export const EVENTS: EventItem[] = [
  {
    id: '1',
    title: 'Project Management In The Voluntary Sector',
    date: '24th June 2020',
    location: 'NY, London',
    image: 'assets/img/event/e1.jpg',
    description: 'Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['water', 'proevent']
  },
  {
    id: '2',
    title: '10 Ways To Help Others That Will Lead You',
    date: '24th AUG 2020',
    location: 'NY, London',
    image: 'assets/img/event/e2.jpg',
    description: '100% funds water projects.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['trending', 'water']
  },
  {
    id: '3',
    title: 'Charity Program In The Dhaka',
    date: '15th May 2021',
    location: 'Mirpur, Dhaka',
    image: 'assets/img/event/e6.jpg',
    description: 'Empowering communities through clean water access.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['trending', 'water']
  },
    {
    id: '4',
    title: 'Helping The Church To Serve Others',
    date: '24th July 2021',
    location: 'NY, London',
    image: 'assets/img/event/e3.jpg',
    description: 'Empowering communities through clean water access.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['trending', 'water']
  },
      {
    id: '5',
    title: 'Rebuilding Collapse Primary School',
    date: '14th July 2021',
    location: 'NY, London',
    image: 'assets/img/event/e4.jpg',
    description: 'Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['trending', 'water']
  },
        {
    id: '6',
    title: 'Changing Leadership In A Changing World',
    date: '28th Nov 2021<',
    location: 'NY, London',
    image: 'assets/img/event/e5.jpg',
    description: 'Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.',
    points: ['A place in history', 'It’s about impact, goodness', 'More goodness in the world', 'The world we live'],
    categories: ['trending', 'water']
  }
];










    

