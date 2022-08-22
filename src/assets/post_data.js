const postData = [
  {
    id: 1,
    title: "Boost your conversion rate without ",
    author: "Learn with sumit",
    category: "Boost",
    images: {
      author_image: "https://avatars.githubusercontent.com/u/73503432?v=4",
      post_image:
        "https://images.unsplash.com/photo-1623241537560-76cdd5c512ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    meta_data: {
      datetime: "11 Jul, 2022",
      read: 7,
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    author: "Michael Sch 2",
    category: "SEO",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1661105714~exp=1661106314~hmac=b6a8a6436a00fc03f79bc162dfb6e416673f37243d3c1824aedc2fb16bac739b",
      post_image:
        "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    meta_data: {
      datetime: "12 Jul, 2022",
      read: 5,
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    author: "Bradon Shahi",
    category: "UI/UX",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-gangster-mafia-character-smoking_23-2148474614.jpg?w=740&t=st=1661105853~exp=1661106453~hmac=571f44c8ad224b89073f080131c61ddef434d63b8e424e1aecad90e0b4bc81c8",
      post_image:
        "https://images.unsplash.com/photo-1567336144580-e439f43b680a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
    },
    meta_data: {
      datetime: "13 Jul, 2022",
      read: 3,
    },
  },
  {
    id: 4,
    title: "How to oraganize your post for easy access",
    author: "Bruce Lee ",
    category: "UI/UX",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-gangster-mafia-character-smoking_23-2148474614.jpg?w=740&t=st=1661105853~exp=1661106453~hmac=571f44c8ad224b89073f080131c61ddef434d63b8e424e1aecad90e0b4bc81c8",
      post_image:
        "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80",
    },
    meta_data: {
      datetime: "14 Jul, 2022",
      read: 6,
    },
  },
  {
    id: 5,
    title: "How to use search engine optimization to drive sales",
    author: "Michael Sch",
    category: "SEO",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1661105714~exp=1661106314~hmac=b6a8a6436a00fc03f79bc162dfb6e416673f37243d3c1824aedc2fb16bac739b",
      post_image:
        "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    meta_data: {
      datetime: "15 Jul, 2022",
      read: 9,
    },
  },
  {
    id: 6,
    title: "Boost your conversion rate within one hour",
    author: "Bruce Lee",
    category: "Boost",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1661101585~exp=1661102185~hmac=fed380dfb000d385580f65a98522ed16c0e820188a0acb654f382ec59230da9a",
      post_image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    meta_data: {
      datetime: "16 Jul, 2022",
      read: 11,
    },
  },
  {
    id: 7,
    title: "How to design a better UI for the users",
    author: "Bradon Shahi",
    category: "UI/UX",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-gangster-mafia-character-smoking_23-2148474614.jpg?w=740&t=st=1661105853~exp=1661106453~hmac=571f44c8ad224b89073f080131c61ddef434d63b8e424e1aecad90e0b4bc81c8",
      post_image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    meta_data: {
      datetime: "17 Jul, 2022",
      read: 15,
    },
  },
  {
    id: 8,
    title: "Ninja technic for boosting conversion rate ",
    author: "Bruce Lee",
    category: "Boost",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1661101585~exp=1661102185~hmac=fed380dfb000d385580f65a98522ed16c0e820188a0acb654f382ec59230da9a",
      post_image:
        "https://images.unsplash.com/photo-1565377024937-5e947136c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    },
    meta_data: {
      datetime: "18 Jul, 2022",
      read: 11,
    },
  },
  {
    id: 9,
    title: "Top 10 way to index articles quickly",
    author: "Michael Sch",
    category: "SEO",
    images: {
      author_image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=740&t=st=1661105714~exp=1661106314~hmac=b6a8a6436a00fc03f79bc162dfb6e416673f37243d3c1824aedc2fb16bac739b",
      post_image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
    },
    meta_data: {
      datetime: "19 Jul, 2022",
      read: 11,
    },
  },
];
export default postData;
