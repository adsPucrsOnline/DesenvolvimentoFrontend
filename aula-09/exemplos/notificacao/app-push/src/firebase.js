import { initializeApp } from 'firebase/app';
import { getMessaging, onMessage, getToken } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyBPiVNT-o46ZwcoYMSvVcSTejgOYXKspRA",
  authDomain: "send-msg-exemplo.firebaseapp.com",
  projectId: "send-msg-exemplo",
  storageBucket: "send-msg-exemplo.appspot.com",
  messagingSenderId: "174129517195",
  appId: "1:174129517195:web:dc58b09c83a564f9be7a8e"
};
const REPLACE_WITH_YOUR_VAPID_KEY = 'BDm_ADJH8wb_VeXMi_kcp-9p8dptLBnGPY4YciPfv347U40BUx-qSuyL0gtMwPqYc9aw9oIjNU-SMtrsxpO8L4A'
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

initializeApp(firebaseConfig);

export const requestForToken = async (setTokenFound) => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: REPLACE_WITH_YOUR_VAPID_KEY });
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });