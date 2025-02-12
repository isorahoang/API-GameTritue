const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dqaf8wpnp",
  api_key: "821181383175714",
  api_secret: "38sUq9fcL2VGprSWpmSamtqoP8M",
  secure: true,
});

module.exports = cloudinary;
