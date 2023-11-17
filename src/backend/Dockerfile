# Use the official Node.js image as the base image
FROM node:18.15

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./
    
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Command to start the application
CMD ["npm" , "run", "start:dev"]