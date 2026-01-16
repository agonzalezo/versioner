### --- Builder Stage ---
FROM node:lts-alpine3.23 AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

### --- Runtime Stage ---
FROM node:lts-alpine3.23
ENV NODE_ENV=production
RUN apk add --no-cache dumb-init
WORKDIR /app
COPY --from=builder --chown=node:node /build/node_modules ./node_modules
COPY --chown=node:node package*.json ./
COPY --chown=node:node src ./src
USER node
EXPOSE 3000

## --- Healthcheck ---
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=2 \
    CMD node -e "require('http').get('http://localhost:3000/', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

## --- EntryPoint Startup ---
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/server.js"]