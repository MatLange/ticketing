# Specify a base image
FROM node:14-alpine

# Set the working directory (and create it if it doesn't exist)
WORKDIR /app

# copy the package.json file to the container
COPY ./package.json ./

# Install some dependencies
RUN npm install

# copy the rest of the files to the container
COPY ./ ./

# Command to run on container start
CMD ["npm", "start"]


