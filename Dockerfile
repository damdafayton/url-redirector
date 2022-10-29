#Base Image node:12.18.4-alpine
FROM node:12.18.4-alpine

ENV PORT=3030

#Set working directory to /app
WORKDIR /app


#Set PATH /app/node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY src ./src

RUN npm install 

EXPOSE 3030

#Start the app
CMD ["npm", "start"]