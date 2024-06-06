FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
RUN npm run build
COPY . .
EXPOSE 3000

CMD npm start
