FROM node:18-alpine
WORKDIR /app
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ADD . .
RUN apk update && apk add --no-cache curl nano wget bash
RUN npm install -g pnpm
ENTRYPOINT ["/entrypoint.sh"]
