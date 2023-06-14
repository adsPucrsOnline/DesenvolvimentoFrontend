import { getMessaging, onMessage, getToken } from "firebase/messaging"
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBPiVNT-o46ZwcoYMSvVcSTejgOYXKspRA",
  authDomain: "send-msg-exemplo.firebaseapp.com",
  projectId: "send-msg-exemplo",
  storageBucket: "send-msg-exemplo.appspot.com",
  messagingSenderId: "174129517195",
  appId: "1:174129517195:web:dc58b09c83a564f9be7a8e"
};
const GENERATED_MESSAGING_KEY = 'BFYGvFvo1g39jY4KnFETxCR5NkldpOvh2BmEzblAbXHsKVB_GLSPeyeuLr39eUZbHh89ZT7MHq8DI54nkGRTpAg'
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

initializeApp(firebaseConfig);

export const getTokenMsg = (setTokenFound) => {
  return getToken(messaging, {vapidKey: GENERATED_MESSAGING_KEY}).then((currentToken) => {
    if (currentToken) {
      console.log('Token para o Cliente: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('Nenhum token de registro disponível. Solicitar permissão para gerar um.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('Ocorreu um erro ao recuperar o token ', err);
    // catch error while creating client token
  });
}