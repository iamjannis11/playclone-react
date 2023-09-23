import images from "./images";

import {
  LiaUserEditSolid,
  LiaStickyNote,
  LiaBookmark,
  LiaUserTagSolid,
  LiaIdCardSolid,
  LiaAddressBook,
} from "react-icons/lia";

const previewCard = [
  {
    imgUrl: images.preview1,
    title: "How to grow 100+ million viewers monthly listeners?",
  },

  {
    imgUrl: images.preview2,
    title: "80's 90's vibes, An Alt Pop Journey",
  },

  {
    imgUrl: images.preview3,
    title: "Use ChatGPT to for artists and musicians",
  },

  {
    imgUrl: images.preview4,
    title: "Reasons to promote your songs in TikTok, upload in shorts",
  },

  {
    imgUrl: images.preview5,
    title: "Become a consistent to get a hold for TikTok Trends",
  },
];

const teamData = [
  {
    userIcon: <LiaUserEditSolid className="user-icon" />,
    title: "For Artists - Spotify Campaigns",
    subtitle: "Frequently asked questions by artists",
    viewer: "By Steve and 1 other",
    views: "48 articles",
  },
  {
    userIcon: <LiaStickyNote className="user-icon" />,
    title: "For Artists - Tiktok Campaigns",
    subtitle: "Helpful info for running Tiktok campaigns",
    viewer: "By Steve and 2 other",
    views: "13 articles",
  },
  {
    userIcon: <LiaBookmark className="user-icon" />,
    title: "For Playlist Curators",
    subtitle: "Frequently asked questions by playlist owners",
    viewer: "By Ludo and 1 other",
    views: "17 articles",
  },
  {
    userIcon: <LiaUserTagSolid className="user-icon" />,
    title: "Cutator Tips",
    subtitle: "Some tips and tricks for our playlist owners",
    viewer: "By Steve and 2 other",
    views: "4 articles",
  },
  {
    userIcon: <LiaIdCardSolid className="user-icon" />,
    title: "Affiliate & Referral Program",
    subtitle: "Tips and info for affiliates",
    viewer: "By Steve and 3 other",
    views: "2 articles",
  },
  {
    userIcon: <LiaAddressBook className="user-icon" />,
    title: "General Questions",
    subtitle: "Questions related to any account type, so artists",
    viewer: "By Ludo and 1 other",
    views: "4 articles",
  },
];

const articlePost = [
  {
    photo: images.article1,
    subtilte: "blog posts for artists",
    title:
      "4 Things Every Artist Needs To Know About Spotify's Recommendation Algorithm",
    description:
      "Music streaming platforms have become integral to our lives in today's digital age. Among them, Spotify stands out as a frontrunner, capturing the hearts of millions of users worldwide. One of the key factors behind Spotify's immense popularity is its remarkable ability to recommend music...",
    date: "Aug 4, 2023",
    duration: "4 min read",
  },
  {
    photo: images.article2,
    subtilte: "blog posts for artists",
    title:
      "Should you be making AI-Music? Why Human Curators Resist the Rise of AI",
    description:
      "Reshaping the Melody The world-shaking advancements in Artificial Intelligence (AI) have had a significant impact on various industries, including television, film, medicine, and notably, the music industry. Throughout history, the music industry has been at the forefront of embracing...",
    date: "Jul 21, 2023",
    duration: "6 min read",
  },
  {
    photo: images.article3,
    subtilte: "blog posts for artists",
    title: "How did Peso Pluma grow to 50 million monthly listeners?",
    description:
      "In the ever-changing world of music, few artists possess the ability to capture global audiences and shape the direction of a genre. One artist making waves in this year's music scene is 24-year-old Peso Pluma. With his blend of traditional and contemporary genres, he is a trailblazer in the...",
    date: "Jul 14, 2023",
    duration: "4 min read",
  },
  {
    photo: images.article4,
    subtilte: "blog posts for artists",
    title:
      "How to Get Your Song Trending on TikTok’s #NewMusic Hub: The Secret to Blowing Up",
    description:
      "TikTok’s #NewMusic feature recently launched as the official hub for music discovery on the platform. This is huge for independent artists as TikTok has become the most influential tool in...",
    date: "Jul 7, 2023",
    duration: "4 min read",
  },
  {
    photo: images.article5,
    subtilte: "Artist Interviews",
    title:
      "Eighty Ninety: From '808s and Telecasters' to Organic Vibes - An Alt-Pop Journey",
    description:
      "Hometown: New York City Currently Based In: New York City Favorite Hobby: Abner: Yoga // Harper: Doomscrolling Memes Favorite Artist(s): Tom Petty, Sparklehorse, Taylor Swift, Chet Baker,...",
    date: "Jul 27, 2023",
    duration: "4 min read",
  },
  {
    photo: images.article6,
    subtilte: "Music Marketing",
    title: "5 Ways to use ChatGPT for artists and musicians",
    description:
      "Scared by how fast everything with AI is moving? Welcome to the club…but if you can push past this initial state of overwhelm, you’ll find some glorious opportunities for artificial intelligence to support your music career. Using AI chatbots like Chat GPT as your on-call writing buddy or...",
    date: "May 9, 2023",
    duration: "3 min read",
  },
  {
    photo: images.article7,
    subtilte: "Blog Posts for Creators",
    title: "TikTok Earnings Money Calculator for Influencers",
    description:
      "TikTok Creator Payment Calculator Video Views: Payment Per 1000 Views: Calculate",
    date: "Feb 11, 2023",
    duration: "2 min read",
  },
];

export default { previewCard, teamData, articlePost };
