npm init --y
npm install typescript ts-node-dev express @types/express
tsc --init

# Install Express Async Errors to handle async errors (without using the next statement)
npm install express-async-errors --save
# Install Mongoose to be able to create to a MongoDB
npm install mongoose
# Install Mongoose types to pair it up with Typescript
npm install @types/mongoose
# Install Cookie Session to handle cookies. For Authentication we will use a JSON Web Token (JWT)
#  inside a Cookie. Also add the Cookie Session types for typescript support
npm install cookie-session @types/cookie-session
# Install JSON Web Token (JWT) library to encrypt JSON Web Tokens, Also add the Cookie Session types for typescript support
npm install jsonwebtoken @types/jsonwebtoken
# Generating the JWT secret in Kubernetes and store and use it from there as an environment variable (For Key/value pair: JWT_KEY=secretValue)
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=secretValue
# Get a list of all the secrets that exist
kubectl get secrets 
