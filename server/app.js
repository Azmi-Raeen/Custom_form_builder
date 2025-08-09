const express = require('express');
const app = express();
const mongoose = require('mongoose');
const formRoutes = require('./routes/form.routes');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/forms', formRoutes);

// DB connection
mongoose.connect('mongodb://127.0.0.1:27017/formBuilderDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
