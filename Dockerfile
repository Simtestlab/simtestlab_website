# Stage 1: Build React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Setup Express server
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the build from the previous stage
COPY --from=build /app/build ./build

# Copy the server files and the .env file
COPY server.js ./
COPY .env ./

# Expose the port the app runs on
EXPOSE 3000
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
