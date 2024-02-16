const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connectDb');
const errorMiddleware = require('./middlewares/error');

const taskRoutes = require('./routes/TaskRoutes');

const port = 5000 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use(taskRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

