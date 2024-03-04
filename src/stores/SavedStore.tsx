import { create } from "zustand"
import { Tweet } from "../types/Tweets"
import { createJSONStorage, persist } from "zustand/middleware"

export type savedTweetType = {
        tweet:Tweet,
}

export type TweetStateType = {
    savedTweets : savedTweetType[]
    setSavedTweets: (savedTweets:savedTweetType[]) => void;
}

export const useSavedTweets = create<TweetStateType>()(persist((set) => ({
    savedTweets:[],
    setSavedTweets: (savedTweets) => set({savedTweets}),
}),
{name: 'saved-storage',
    storage: createJSONStorage(() => localStorage),},
  )
)
export default useSavedTweets