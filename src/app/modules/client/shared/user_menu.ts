export const USER_MENU = [
  {
    text: 'HOME',
    link: '/client/homepage'
  },
  {
    text: 'FLOWER',
    link: '/client/flowers',
    items: [
        {
            text: 'List flowers',
            link: '/client/flowers'
        },
      {
        text: 'Latest flowers',
        link: '/client/flower/latest'
      },
      {
        text: 'Outstanding flowers',
        link: '/client/flower/outstanding'
      }
    ]
  },
  {
    text: 'BLOG',
    link: '/client/cart'
  },
  {
    text: 'ABOUT US',
    link: '/client/about',
  },
  {
    text: 'CONTACT',
    link: '/client/contact'
  }
];
