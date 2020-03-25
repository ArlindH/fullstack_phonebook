# Fullstack Javascript Phonebook implementation

## Run for development
`cd devops && docker-compose up`

## Run in production
1-tier docker based architecture for production. Backend, frontend and database reside in the same server. NGINX configured as an ingress point to the server.
To run it in prod server: `cd devops && docker-compose -f docker-compose-prod.yaml up` 