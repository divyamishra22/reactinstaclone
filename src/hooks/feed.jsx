import { createContext,  useState } from 'react';
import api from '../api';

const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feeds, setFeeds] = useState([]);

  async function getfeed() {
    fetch(`http://localhost:3000/feed`, {
      method: "get",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      })
    .then(res => res.json())
      .then(data => {
       console.log(data)
       setFeed(data);
       
  })
  }
}
