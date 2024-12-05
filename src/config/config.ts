import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const { PORT } = process.env;

const _config = {
    PORT,
};

export const config = Object.freeze(_config);
