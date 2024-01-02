const mongoose = require("mongoose");
require("dotenv").config();

// const { MONGODB_URL } = process.env;
const { MONGODB_URL } = "mongodb+srv://shash45:shammy123@clusterprojectdatabase.4pcspni.mongodb.net/?retryWrites=true&w=majority";


exports.connect = () => {
	mongoose.connect(MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
