const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreInstanceSchema = new Schema(
  {
    name: { type: String, required: true, minLength:3, maxLength:100 },
  }
);

// Virtual for bookinstance's URL
GenreInstanceSchema
  .virtual('url')

//Export model
module.exports = mongoose.model('GenreInstance', GenreInstanceSchema);
