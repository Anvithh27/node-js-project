# Use an official lightweight Node.js image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (helps Docker cache dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Cloud Run listens on port 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start"]