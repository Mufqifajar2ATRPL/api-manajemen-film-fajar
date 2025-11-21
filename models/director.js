const mongoose = require('mongoose');

const DirectorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama sutradara wajib diisi'],
    trim: true,
  },
  birthYear: {
    type: Number,
    required: [true, 'Tahun lahir wajib diisi'],
    min: [1800, 'Tahun lahir tidak valid'], 
  },
}, { 
  timestamps: true
});

module.exports = mongoose.model('Director', DirectorSchema);
