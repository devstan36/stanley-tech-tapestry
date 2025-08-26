FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Expose Vite preview port
EXPOSE 4173

# Start the Vite preview server
CMD ["npm", "run", "preview"]