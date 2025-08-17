export interface EventDetail {
  eventId: string; // foreign key linking to EVENTS.id
  bannerImage: string;
  mainImage: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  gallery: string[];
  address: string;
  email: string;
  phone: string;
  guests: {
    name: string;
    role: string;
    image: string;
  }[];
  mapEmbedUrl: string;
}

export const EVENT_DETAILS: EventDetail[] = [
  {
    eventId: '1',
    bannerImage: 'assets/img/page-banner.jpg',
    mainImage: 'assets/img/event-details.jpg',
    content: [
      'This website is part of Mitsubishi Powers continuous efforts to improve communications with existing and potential customers and other interested parties globally.Aligned with that business purpose and for most effective utilization.',
      'The language, at its very core, emphasised extensively on code readability. With its concise and expressive syntax, it allowed developers to express ideas and concepts without writing tons of lines code (as would be the case in lower-level languages like C or Java). Its simplicity a given, Python seamlessly integrates with other programming languages (like offloading CPU-intensive tasks to C/C++), making it an added bonus to polyglot developers.',
      'Among the major reasons why Python is “slow”, it really boils down to 2 — Python is interpreted as opposed to compiled, ultimately leading to slower execution times; and the fact that it is dynamically typed (data types of variables are automatically inferred by Python during execution). Take, for example, TensorFlow, a Machine Learning library available in Python. These libraries were actually written in C++ and made available in Python, sort of forming a Python “wrapper” around the C++ implementation. The same goes for Numpy and, to an extent, even Caer. One of the major reasons for Python’s slowness is the presence of GIL (Global Interpreter Lock) which allows only one thread to execute at a time. While this boosts the performance of single threading, it places a limitation on parallelism where developers have to implement multiprocessing programs as opposed to multi-threaded ones, to improve speeds.'
    ],
    quote: {
      text: 'One of the main driving points behind Python’s meteoric growth.',
      author: 'Miranda H.',
      role: 'Founder'
    },
    gallery: [
      'assets/img/event/OIP.webp',
      'assets/img/event/eventd1.jpg',
      'assets/img/event/eventd2.jpg'
    ],
    address: '12/A, Miranda Halim City Town Hall, NYC',
    email: 'info@webmail.com',
    phone: '908-098-098-09',
    guests: [
      { name: 'Kinlon K. Karlo', role: 'Speaker', image: 'assets/img/event/guest1.jpg' },
      { name: 'Salman Khan', role: 'Actor', image: 'assets/img/event/guest2.jpg' },
      { name: 'Joy Roy', role: 'Speaker', image: 'assets/img/event/guest3.jpg' },
      { name: 'Ismail IRF', role: 'Actor', image: 'assets/img/event/guest4.jpg' }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!...'
  },
  {
    eventId: '2',
    bannerImage: 'assets/img/page-banner.jpg',
    mainImage: 'assets/img/event-details.jpg',
    content: [
      'Event 2 intro text...',
      'Detailed description paragraph 2...',
      'Extra background information paragraph 3...'
    ],
    quote: {
      text: 'Helping others creates a ripple of kindness.',
      author: 'John Doe',
      role: 'Organizer'
    },
    gallery: [
      'assets/img/event/eventd1.jpg',
      'assets/img/event/eventd2.jpg'
    ],
    address: 'Central Park, NYC',
    email: 'contact@event2.com',
    phone: '123-456-7890',
    guests: [
      { name: 'Jane Smith', role: 'Speaker', image: 'assets/img/event/guest1.jpg' },
      { name: 'Mark Lee', role: 'Musician', image: 'assets/img/event/guest2.jpg' }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?...'
  }
  // add more for events 3, 4, 5, 6...
];
