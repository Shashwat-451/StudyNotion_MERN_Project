const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

require("dotenv").config();

// exports.cloudinaryConnect = () => {
// 	try {
// 		cloudinary.config({
// 			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
// 			cloud_name: process.env.CLOUD_NAME,
// 			api_key: process.env.API_KEY,
// 			api_secret: process.env.API_SECRET,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// };


exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: "dqpezswz3",
			api_key: "566349751335648",
			api_secret: "PKpnC2_urqTiv6YwojNb0EjSQf0",
		});
	} catch (error) {
		console.log(error);
	}
};