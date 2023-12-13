FROM node:20.10.0-alpine3.18

RUN apk update && \
    apk add --no-cache \
        build-base \
        autoconf \
        automake \
        git \
        curl \
        zlib-dev \
        xsel

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /front
CMD ["/entrypoint.sh"]