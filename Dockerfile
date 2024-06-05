FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npmmirror.com
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run build && npm start
