const express = require('express');
const router = express.Router();
const webpush = require('web-push');

// Configuração das chaves de criptografia
const vapidKeys = webpush.generateVAPIDKeys();
const publicKey = 'BAXlFcRVPvzOHWmk6hseBY7gZp6CTuvJRBogCVYf9LKFwASLpQ0Ng_eCayKY3UkV6ArTlHSAfYBlmfMxRn9aryM';
const privateKey = vapidKeys.privateKey;

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);

const subscriptions = [
  {
    endpoint: 'https://example.com/subscription-endpoint-1',
    keys: {
      auth: 'BAXlFcRVPvzOHWmk6hseBY7gZp6CTuvJRBogCVYf9LKFwASLpQ0Ng-key-1',
      p256dh: 'BAXlFcRVPvzOHWmk6hseBY7gZp6CTuvJRBogCVYf9LKFwASLpQ0Ng_eCayKY3UkV6ArTlHSAfYBlmfMxRn9aryM'
    }
  },
  {
    endpoint: 'https://example.com/subscription-endpoint-2',
    keys: {
      auth: 'BAXlFcRVPvzOHWmk6hseBY7gZp6CTuvJRBogCVYf9LKFwASLpQ0Ng-key-2',
      p256dh: 'BAXlFcRVPvzOHWmk6hseBY7gZp6CTuvJRBogCVYf9LKFwASLpQ0Ng_eCayKY3UkV6ArTlHSAfYBlmfMxRn9aryM'
    }
  },
];

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

  res.status(200).json({ message: 'Notificações enviadas com sucesso!' + JSON.stringify(subscriptions) });
});
module.exports = router;
