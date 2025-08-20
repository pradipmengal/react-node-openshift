# Use a minimal base image
FROM node:20-alpine

WORKDIR /app

# Install production deps only
COPY package*.json ./
RUN npm install --omit=dev

# Copy source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
