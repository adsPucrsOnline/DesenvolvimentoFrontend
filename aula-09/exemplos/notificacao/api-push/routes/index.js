const express = require('express');
const router = express.Router();
const webpush = require('web-push');

// Configuração das chaves de criptografia
const vapidKeys = webpush.generateVAPIDKeys();
const publicKey = vapidKeys.publicKey;
const privateKey = vapidKeys.privateKey;

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);

webpush.setVapidDetails('mailto:seuemail@example.com', publicKey, privateKey);

// Rota para registrar o endpoint de notificações
router.post('/api/subscribe', (req, res) => {
  const subscription = req.body;

  // Armazenar a subscription no seu banco de dados

  res.status(201).json({ message: 'Inscrição realizada com sucesso!' });
});

// Rota para enviar uma notificação para todos os usuários inscritos
router.post('/api/send-notification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Exemplo de Notificação',
      body: 'Esta é uma notificação de exemplo.',
      icon: 'https://example.com/notification-icon.png'
    }
  };

  // Buscar todas as subscriptions no seu banco de dados

  // Enviar a notificação para cada uma das subscriptions
  subscriptions.forEach(subscription => {
    webpush.sendNotification(subscription, JSON.stringify(notificationPayload))
      .catch(error => console.error(error));
  });

  res.status(200).json({ message: 'Notificações enviadas com sucesso!' });
});
module.exports = router;
