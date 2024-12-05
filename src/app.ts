import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

//* Routes
app.get('/', (req, res) => {
    res.json({ message: 'Namaste 👋, Welcome to NodeJS Template!' });
});

//* Global error handler
app.use(globalErrorHandler);

export default app;
