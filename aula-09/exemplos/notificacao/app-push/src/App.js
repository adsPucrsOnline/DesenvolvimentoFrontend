import React, { useState } from 'react';

function App() {
  const [subscription, setSubscription] = useState(null);

  const handleSubscribe = async () => {
    try {
      const permission = await Notification.requestPermission();
      
      if (permission !== 'granted') {
        throw new Error('Permissão de notificação não concedida');
      }
      
      const swRegistration = await navigator.serviceWorker.register('/service-worker.js');
      const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: '<sua_chave_publica>'
      });

      // Enviar a subscription para o seu backend
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscription)
      });

      setSubscription(subscription);
    } catch (error) {
      console.error('Erro ao se inscrever para notificações:', error);
    }
  };

  const handleSendNotification = async () => {
    try {
      await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Notificação enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
    }
  };

  return (
    <div>
      <h1>Exemplo de Notificações Push</h1>
      {subscription ? (
        <p>Você está inscrito para receber notificações push!</p>
      ) : (
        <button onClick={handleSubscribe}>Inscrever-se para notificações</button>
      )}
      <button onClick={handleSendNotification}>Enviar Notificação</button>
    </div>
  );
}

export default App;
