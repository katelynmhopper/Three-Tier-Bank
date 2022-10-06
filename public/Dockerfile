FROM node:12

ENV PORT 127.0.0.1:8080; 

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Installing dependencies
COPY package*.json /usr/src/app
RUN npm install

#Copying source files
COPY . /usr/src/app

#Building app
RUN npm http-server
EXPOSE 8080

#Running the app
CMD "npm" "run" "dev"