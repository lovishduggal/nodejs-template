import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const { PORT, MONGODB_URI } = process.env;

const _config = {
    PORT,
    MONGODB_URI,
};

export const config = Object.freeze(_config);
