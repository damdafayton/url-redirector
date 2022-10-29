#Base Image node:12.18.4-alpine
FROM node:alpine

#Set PATH /app/node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

ENV PORT=3030

#Set working directory to /app
WORKDIR /app

COPY package.json .

RUN npm install 

COPY src ./src

EXPOSE 3030

#Start the app
CMD ["node", "./src/index.js"]