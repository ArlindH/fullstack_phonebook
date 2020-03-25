# Fullstack Javascript Phonebook implementation

## Stack
Backend: node/express

Frontend: reactjs

Database: mongo

Containerized with docker for development and production.

## Run in development
`cd devops && docker-compose up`

## Run in production
1-tier docker based architecture for production. Backend, frontend and database reside in the same server. NGINX configured as an ingress point to the server.
 
`cd devops && docker-compose -f docker-compose-prod.yaml up -d` 
