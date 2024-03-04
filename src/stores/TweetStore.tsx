import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Tweet } from '../types/Tweets'

export type TweetStoreType = {
    tweets:Tweet[]
    setTweets:(tweets:Tweet[])=>void
  }
  export const useTweetStore = create<TweetStoreType>()(persist(
    (set) => ({
        tweets:[],
        setTweets: (tweets) => set({tweets}),
      }),
    {name: 'tweet-storage',
    storage: createJSONStorage(() => localStorage),},
  ))
export default useTweetStore