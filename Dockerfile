# Use the official Node.js image with the desired version
FROM node:18.19.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Expose the port on which the Nest.js application will listen
EXPOSE 3000

# Command to run the Nest.js application
CMD ["node", "dist/main"]
