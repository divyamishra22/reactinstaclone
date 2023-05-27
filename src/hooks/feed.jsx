import { createContext,  useState } from 'react';
import api from '../api';

const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feeds, setFeeds] = useState([]);
}
