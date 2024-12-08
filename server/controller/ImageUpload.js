const cloudinary = require('cloudinary').v2; // Use .v2 for the latest features

// Configuration
cloudinary.config({
  cloud_name: 'dgpys0nhi',
  api_key: '711524292381622',
  api_secret: 'HiYb49ZeI99x-u1WSYn2iFuuYM4',
});

// Upload an image
const ImageUpload = async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const file = req.files.image.path; // Assuming you use a library like `express-fileupload`

    // Uploading the image
    const result = await cloudinary.uploader.upload(file, {
      folder: 'profile_pictures', // Optional: Organize files in folders on Cloudinary
    });

    res.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Image upload failed', error: error.message });
  }
};

module.exports = { ImageUpload };
