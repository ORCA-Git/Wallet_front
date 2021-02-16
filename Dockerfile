FROM node:14.15.3 AS base
WORKDIR /base
COPY . .

#FROM base AS build
#ENV NODE_ENV=production
#WORKDIR /build
#COPY --from=base /base ./
#RUN npm run build
#RUN npm run generate
#
#FROM node:14.15.3 AS production
#ENV NODE_ENV=production
#WORKDIR /app
#COPY ./package*.json .
#ADD ./.nuxt  /app/.nuxt
#COPY ./node_modules node_modules
#COPY ./dist /app/dist
#COPY --from=build /build/package*.json ./
#COPY --from=build /build/.nuxt ./.nuxt
#COPY --from=build /build/dist ./dist
#RUN npm install nuxt


ENV HOST 0.0.0.0
EXPOSE 3000
CMD npm run start
