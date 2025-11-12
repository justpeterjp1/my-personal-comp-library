# Use a Node.js image suitable for development
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies (including dev dependencies like Tailwind/Vite)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Vite runs on (default is 5173)
EXPOSE 5173

# Run the development server
# You typically use the dev script defined in package.json
CMD ["npm", "run", "dev"]