#!/usr/bin/env ash

npm ci
npm run dev -- --host 0.0.0.0

# sh -c "(while :; do date; sleep 1; done) >&2"
