FROM node:lts

WORKDIR /app

RUN npm install -g pnpm

ENV WEBSITE_CONTACT_FORMULAR_EMAIL_HOST="${WEBSITE_CONTACT_FORMULAR_EMAIL_HOST}"
ENV WEBSITE_CONTACT_FORMULAR_EMAIL_PORT="${WEBSITE_CONTACT_FORMULAR_EMAIL_PORT}"
ENV WEBSITE_CONTACT_FORMULAR_EMAIL_USER="${WEBSITE_CONTACT_FORMULAR_EMAIL_USER}"
ENV WEBSITE_CONTACT_FORMULAR_EMAIL_PASSWORD="${WEBSITE_CONTACT_FORMULAR_EMAIL_PASSWORD}"
ENV WEBSITE_CONTACT_FORMULAR_EMAIL_TOMAIL="${WEBSITE_CONTACT_FORMULAR_EMAIL_TOMAIL}"
ENV WEBSITE_CONTACT_FORMULAR_EMAIL_FROMMAIL="${WEBSITE_CONTACT_FORMULAR_EMAIL_FROMMAIL}"

COPY . .

RUN pnpm i --frozen-lockfile
RUN pnpx update-browserslist-db@latest

ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD [ "pnpm", "run", "ci:start" ]
