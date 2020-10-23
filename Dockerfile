FROM node:14.14.0-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
CMD ["yarn", "start"]


# FROM node:alpine

# WORKDIR /app

# COPY package.json /app/package.json
# COPY yarn.lock /app/yarn.lock
# # since we are using local files and not copying them to docker
# # add the container's node_modules folder to docker's $PATH
# # so that it can find and watch it's dependencies
# ENV PATH /app/node_modules/.bin:$PATH
# # install and cache dependencies
# # n/b: these dependencies are installed inside docker
# # it runs the command "yarn" which is an equivalent of "yarn add"
# RUN yarn
# # start the container
# CMD ["yarn", "start"]
