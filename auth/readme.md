npm init --y
npm install typescript ts-node-dev express @types/express
tsc --init

# Install Express Async Errors to handle async errors (without using the next statement)
npm install express-async-errors --save
# Install Mongoose to be able to create to a MongoDB
npm install mongoose
# Install Mongoose types to pair it up with Typescript
npm install @types/mongoose