import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {  notifications, totalNotificationCount } from './atoms'

function App() {

  return <div>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </div>
}

function MainApp() {
  const notificationCounts = useRecoilValue(notifications)
  // const networkNotificationCount = useRecoilValue(networkAtom)
  // const jobsNotificationCount  = useRecoilValue(jobsAtom)
  // const notificationCount  = useRecoilValue(notificationAtom)
  // const messagingNotificationCount   = useRecoilValue(messagingAtom)
 const totNotificationCount = useRecoilValue(totalNotificationCount)
//  const totNotificationCount = useRecoilValue(totalNotificationCount)

  // const totalNotificationCount = useMemo(()=>{
  //  return networkNotificationCount + jobsNotificationCount + notificationCount + messagingNotificationCount
  // }, [networkNotificationCount, jobsNotificationCount, notificationCount, messagingNotificationCount])

  return <div>
 <button>Home</button>
 <button>My Network ({notificationCounts.network >=100 ? "99+" : notificationCounts.network})</button>
 <button>Jobs ({notificationCounts.jobs})</button>
 <button>Messaging ({notificationCounts.messages})</button>
 <button>Notifications ({notificationCounts.notification})</button>
 <button>Me ({totNotificationCount})</button>
  </div>
}

export default App
