import express from 'express';
import cors from 'cors';
import locationRoutes from './routes/locationRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/locations', locationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});