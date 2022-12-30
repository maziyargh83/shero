import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Layout } from "~/components";
import styles from "./styles/app.css";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Shero",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background-light max-w-[100vw] overflow-x-hidden">
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
// let firstRender = true

// function PageLoadingMessage() {
//   const transition = useTransition()
//   const [words, setWords] = React.useState<Array<string>>([])
//   const [pendingPath, setPendingPath] = React.useState('')
//   const showLoader = useSpinDelay(Boolean(transition.state !== 'idle'), {
//     delay: 400,
//     minDuration: 1000,
//   })

//   React.useEffect(() => {
//     if (firstRender) return
//     if (transition.state === 'idle') return
//     if (transition.state === 'loading') setWords(LOADER_WORDS)
//     if (transition.state === 'submitting') setWords(ACTION_WORDS)

//     const interval = setInterval(() => {
//       setWords(([first, ...rest]) => [...rest, first] as Array<string>)
//     }, 2000)

//     return () => clearInterval(interval)
//   }, [pendingPath, transition.state])

//   React.useEffect(() => {
//     if (firstRender) return
//     if (transition.state === 'idle') return
//     setPendingPath(transition.location.pathname)
//   }, [transition])

//   React.useEffect(() => {
//     firstRender = false
//   }, [])

//   const action = words[0]

//   return (
//     <NotificationMessage position="bottom-right" visible={showLoader}>
//       <div className="flex w-64 items-center">
//         <motion.div
//           transition={{repeat: Infinity, duration: 2, ease: 'linear'}}
//           animate={{rotate: 360}}
//         >
//           {/* <TeamCircle size={48} team="UNKNOWN" /> */}
//         </motion.div>
//         <div className="ml-4 inline-grid">
//           <AnimatePresence>
//             <div className="col-start-1 row-start-1 flex overflow-hidden">
//               <motion.span
//                 key={action}
//                 initial={{y: 15, opacity: 0}}
//                 animate={{y: 0, opacity: 1}}
//                 exit={{y: -15, opacity: 0}}
//                 transition={{duration: 0.25}}
//                 className="flex-none"
//               >
//                 {action}
//               </motion.span>
//             </div>
//           </AnimatePresence>
//           <span className="text-secondary truncate">path: {pendingPath}</span>
//         </div>
//       </div>
//     </NotificationMessage>
//   )
// }
