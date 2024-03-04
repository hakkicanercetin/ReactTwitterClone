import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { User } from '../types/User'

export type UserStoreType = {
    users:User[]
    setUsers:(users:User[])=>void
  }
  export const useUserStore = create<UserStoreType>()(persist(
    (set) => ({
        users:[],
        setUsers: (users) => set({users}),
      }),
    {name: 'user-storage',
    storage: createJSONStorage(() => localStorage),},
  ))
export default useUserStore