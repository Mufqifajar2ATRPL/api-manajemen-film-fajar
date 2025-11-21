// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// let movies = [
//   { id: 1, title: 'Parasite', director: 'Bong Joon-ho', year: 2019 },
//   { id: 2, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
//   { id: 3, title: 'Spirited Away', director: 'Hayao Miyazaki', year: 2001 }
// ];


// // u id
// app.put('/movies/:id', (req, res) => {
//   const movieId = parseInt(req.params.id);
//   const movieIndex = movies.findIndex(m => m.id === movieId);

//   if (movieIndex === -1) {
//     return res.status(404).json({ message: 'Film tidak ditemukan' });
//   }

//   const { title, director, year } = req.body;

//   if (!title || !director || !year) {
//     return res.status(400).json({ message: 'Semua field (title, director, year) harus diisi' });
//   }

//   const updatedMovie = { id: movieId, title, director, year };

//   movies[movieIndex] = updatedMovie;

//   res.status(200).json(updatedMovie);
// });

// // Endpoint DELETE: Menghapus film berdasarkan ID
// app.delete('/movies/:id', (req, res) => {
//   const movieId = parseInt(req.params.id);
//   const movieIndex = movies.findIndex(m => m.id === movieId);

//   if (movieIndex === -1) {
//     return res.status(404).json({ message: 'Film tidak ditemukan' });
//   }

//   movies.splice(movieIndex, 1);

//   res.status(204).send();
// });

// // Endpoint GET: Mengambil semua film
// app.get('/movies', (req, res) => {
//   res.json(movies);
// });

// // Endpoint GET: Mengambil satu film berdasarkan ID
// app.get('/movies/:id', (req, res) => {
//   const movieId = parseInt(req.params.id);
//   const movie = movies.find(m => m.id === movieId);

//   if (!movie) {
//     return res.status(404).json({ message: 'Film tidak ditemukan' });
//   }

//   res.json(movie);
// });

// // Endpoint POST: Menambahkan film baru
// app.post('/movies', (req, res) => {
//   const { title, director, year } = req.body;

//   if (!title || !director || !year) {
//     return res.status(400).json({ message: 'Semua field (title, director, year) harus diisi' });
//   }

//   const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

//   const newMovie = { id: newId, title, director, year };

//   movies.push(newMovie);

//   res.status(201).json(newMovie);
// });

// // DIRECTORS ASSIGNMENTSS

// let directors = [
//   { id: 1, name: 'Bong Joon-ho', birthYear: 1969 },
//   { id: 2, name: 'Christopher Nolan', birthYear: 1970 },
//   { id: 3, name: 'Hayao Miyazaki', birthYear: 1941 }
// ];

// app.get('/directors', (req, res) => {
//   res.json(directors);
// });

// // Get u. direktor berdasar id
// app.get('/directors/:id', (req, res) => {
//   const directorId = parseInt(req.params.id);
//   const director = directors.find(d => d.id === directorId);

//   if (!director) {
//     return res.status(404).json({ message: 'Sutradara tidak ditemukan' });
//   }

//   res.json(director);
// });

// // POST u. nambahkan sutradara baru
// app.post('/directors', (req, res) => {
//   const { name, birthYear } = req.body;

//   if (!name || !birthYear) {
//     return res.status(400).json({ message: 'Nama dan tahun lahir harus diisi' });
//   }

//   const newId = directors.length > 0 ? directors[directors.length - 1].id + 1 : 1;
//   const newDirector = { id: newId, name, birthYear };

//   directors.push(newDirector);

//   res.status(201).json(newDirector);
// });

// // PUT u. memperbarui data sutrdara berdasarkan id
// app.put('/directors/:id', (req, res) => {
//   const directorId = parseInt(req.params.id);
//   const directorIndex = directors.findIndex(d => d.id === directorId);

//   if (directorIndex === -1) {
//     return res.status(404).json({ message: 'Sutradara tidak ditemukan' });
//   }

//   const { name, birthYear } = req.body;
//   if (!name || !birthYear) {
//     return res.status(400).json({ message: 'Nama dan tahun lahir harus diisi' });
//   }

//   const updatedDirector = { id: directorId, name, birthYear };
//   directors[directorIndex] = updatedDirector;

//   res.status(200).json(updatedDirector);
// });

// // DELETE u. menghapus data sutrdara berdasarkan id
// app.delete('/directors/:id', (req, res) => {
//   const directorId = parseInt(req.params.id);
//   const directorIndex = directors.findIndex(d => d.id === directorId);

//   if (directorIndex === -1) {
//     return res.status(404).json({ message: 'Sutradara tidak ditemukan' });
//   }

//   directors.splice(directorIndex, 1);

//   res.status(204).send();
// });

// // Batas selesai tugas directors

// app.get('/', (req, res) => {
//   res.send('Server API Manajemen Film berjalan!');
// });

// // Menjalankan server
// app.listen(PORT, () => {
//   console.log(`Server aktif di http://localhost:${PORT}`);
// });