import {atom, selector } from 'recoil'
import axios from 'axios'

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async()=>{
         const response = await axios.get('https://sum-server.100xdevs.com/notifications')
         return response.data
        }
    })
})

export const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get: ({get})=>{
        const allNotificationCounts = get(notifications)
        return allNotificationCounts.network + 
        allNotificationCounts.jobs + 
        allNotificationCounts.messages + 
        allNotificationCounts.notifications
    }
})

// export const networkAtom = atom({
//     default: 110,
//     key: "networkAtom"
// })

// export const jobsAtom = atom({
//     default: 0,
//     key: "jobsAtom"
// })

// export const notificationAtom = atom({
//     default: 12,
//     key: "notificationAtom"
// })

// export const messagingAtom = atom({
//     default: 0,
//     key: "messagingAtom"
// })

// export const totalNotificationCount = selector({
//     key: "totalNotificationCount",
//     get: ({get})=>{
//         const netWorkNotificationCount = get(networkAtom)
//         const jobsNotificationCount = get(jobsAtom)
//         const NotificationCount = get(notificationAtom)
//         const messagingNotificationCount = get(messagingAtom)
//         return netWorkNotificationCount + jobsNotificationCount + NotificationCount + messagingNotificationCount
//     }
// })