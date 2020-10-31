const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');

const app = express();

//DataBase
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connected'));

//cors
if (process.env.NODE_ENV == 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

//routs middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`The beast is running on port ${port}`);
});
