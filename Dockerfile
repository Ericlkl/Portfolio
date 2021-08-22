FROM node:16-alpine

WORKDIR /app

COPY ./package.json /app

RUN npm install --legacy-peer-deps

# it is okay to skip, since we are going to use bind mount
# COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
