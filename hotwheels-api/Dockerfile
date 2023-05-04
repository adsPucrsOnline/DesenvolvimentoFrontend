# Use a imagem oficial do Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o código fonte para o diretório de trabalho
COPY . /app

# Instale as dependências do Node.js
RUN npm install

# Expõe a porta 3000 para acesso externo
EXPOSE 5000

# Inicie a aplicação com o comando "node app.js" quando o container for executado
CMD ["node", "./bin/www"]
