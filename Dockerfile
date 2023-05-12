FROM Ubuntu
COPY . /app/
WORKDIR app/
EXPOSE 3000
CMD [ "npm" , "start" ]