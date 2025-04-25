# Etapa de construção (build)
FROM node:18-alpine AS builder

WORKDIR /app

# Instala dependências (incluindo Prisma)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copia tudo para a pasta app
COPY . .

# Gera o Prisma Client corretamente antes do build
RUN npx prisma generate

# Faz o build do Next.js
RUN npm run build

# Etapa de produção
FROM node:18-alpine AS production

WORKDIR /app
ENV NODE_ENV=production

# Instala curl para o healthcheck
RUN apk add --no-cache curl

# Copia apenas o necessário da etapa de builder
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=5 \
  CMD curl -f http://localhost:3002 || exit 1

EXPOSE 3002
CMD ["npm", "start", "--", "--port", "3002"]