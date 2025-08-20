# Stage 1: Build React app
FROM node:20 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy the built React app to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy the updated full nginx.conf with global settings (including pid directive)
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port your app listens on (8080)
EXPOSE 8080

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

