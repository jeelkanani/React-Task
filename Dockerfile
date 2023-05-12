FROM node:latest
COPY . /app
WORKDIR /app
EXPOSE 3000
RUN npm install
CMD [ "npm" , "start" ]