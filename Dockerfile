# use node as the base images
FROM node

# Setting /app as the working directory
WORKDIR /app
# Copy all the files to /app
COPY . /app

# install concurrently in order to run both project at the same time
RUN npm install

RUN npm run client-install

RUN npm run server-install

RUN npm run client-build

RUN npm run server-build

EXPOSE 5000

CMD npm run server