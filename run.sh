#!/bin/env sh

# Set environment to development
export NODE_ENV=development

# Install dependencies
npm install

# Compile
npm run compile

# Change environment to production
export NODE_ENV=production

# Run the server
npm start