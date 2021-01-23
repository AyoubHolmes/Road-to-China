FROM ubuntu:latest

RUN apt update
RUN apt install nodejs -y
RUN apt install npm -y 
RUN apt install curl -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN apt update
RUN apt install yarn -y
RUN apt install wget 
RUN apt remove cmdtest -y
RUN apt remove yarn -y
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install yarn -y
ADD ./App /App

