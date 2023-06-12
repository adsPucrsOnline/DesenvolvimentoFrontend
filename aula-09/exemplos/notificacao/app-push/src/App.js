import React, { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

// Configuração do Firebase
const firebaseConfig = {
  // Coloque aqui o objeto de configuração do Firebase que você recebeu ao criar seu projeto
  apiKey: "AIzaSyBPiVNT-o46ZwcoYMSvVcSTejgOYXKspRA",
  authDomain: "send-msg-exemplo.firebaseapp.com",
  projectId: "send-msg-exemplo",
  storageBucket: "send-msg-exemplo.appspot.com",
  messagingSenderId: "174129517195",
  appId: "1:174129517195:web:dc58b09c83a564f9be7a8e"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  useEffect(() => {
    const messaging = firebase.messaging();

    // Solicitar permissão para receber notificações push
    messaging
      .requestPermission()
      .then(() => {
        console.log('Permissão de notificação concedida.');

        // Obter o token do dispositivo para enviar notificações
        return messaging.getToken();
      })
      .then((token) => {
        console.log('Token do dispositivo:', token);

        // Enviar o token para o seu backend para associá-lo ao usuário
      })
      .catch((error) => {
        console.error('Erro ao solicitar permissão de notificação:', error);
      });

    // Tratar a chegada de uma notificação quando o aplicativo está em primeiro plano
    messaging.onMessage((payload) => {
      console.log('Notificação recebida:', payload);
    });
  }, []);

  return (
    <div>
      <h1>Exemplo de Notificações Push com Firebase</h1>
    </div>
  );
}

export default App;

