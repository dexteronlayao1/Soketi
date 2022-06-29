# Soketi

Soketi .env Config
- PUSHER_APP_KEY=app-key
- PUSHER_APP_ID=app-id
- PUSHER_APP_SECRET=app-secret
- PUSHER_HOST=localhost
- PUSHER_PORT=6001
- PUSHER_SCHEME=https
- SOKETI_SSL_CERT="path_to_certificate_crt"
- SOKETI_SSL_KEY="path_to_certificate_key"
- SOKETI_SSL_PASS=

- MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
- MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

- MIX_PUSHER_HOST="${PUSHER_HOST}"
- MIX_PUSHER_PORT="${PUSHER_PORT}"

run soketi start command and access https://localhost:6001