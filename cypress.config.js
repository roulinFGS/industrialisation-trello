import { defineConfig } from "cypress"; 
import 'dotenv/config';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://trello.com',
    experimentalOriginDependencies: true,
    video: true
  },
  env: {
    name: process.env.NAME,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
    board_url: process.env.BOARD_URL
  },
});
