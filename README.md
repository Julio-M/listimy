# Listimy

## Description
Listimy is a full-stack web application built on Ruby on Rails and ReactJS, utilizing the Google Maps API.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Heroku CLI
- Postgresql
- Google Maps API
- ReactJS

See Environment Setup below for instructions on installing these tools if you
don't already have them.

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
