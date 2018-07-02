const Genre = require('../models/genre');
const Book = require('../models/book');

// Display list of all Genre.
exports.genreList = (req, res, next) => {

Genre.find()
    .sort([['name', 'ascending']])
    .exec((err, listGenres) => {
        if (err) { return next(err); }
        res.status(200).send({ genresList: listGenres });
    });
};

// Display detail page for a specific Genre.
exports.genreDetail = (req, res, next) => {

  let id = req.params.id;

  return Promise.all([

      Genre.findOne({ _id: id }),

      Book.find({ genre: id })

      ]).then((results) => {
        let genres = results[0];
        let books = results[1];

        if (!genres){
          return res.status(404).send('Genre not found');
        }

      return res.status(200).send({
        genres,
        genresBooks: books
      });

  }).catch((err) => {
    return next(err);
  })

};


// Handle Genre create on POST.
exports.genreCreatePost = (req, res, next) => {

    let data = req.body;

    let genre = new Genre(data);

    genre.save((err, savedGenre) => {
      if (err) {
        next(err);
      }

      return res.status(200).send(savedGenre);
    })
};

// Display Genre delete form on GET.
exports.genreDeleteDelete = (req, res, next) => {

  let id = req.params.id;

  return Promise.all([

      Genre.findOne({ _id: id }),

      Book.find({ genre: id })
    ]).then((results) => {
      let genre = results[0];
      let books = results[1];

      if (!genre){
        return res.status(404).send('Genre not found');
      }

      if (books.length > 0) {
        return res.status(400).send('Genre has books');
      }

      return Genre.findByIdAndRemove(id).then(() => {
        return res.status(200).send(id);
      }).catch((err) => {
        return next(err);
      });
    });

  };


// Display Genre update form on GET.
exports.genreUpdatePut = (req, res, next) => {
    let id = req.params.id;

    let data = req.body;

    data._id = id;

    let genre = new Genre(data);

    Genre.findByIdAndUpdate(id, genre, { new: true })
    .then((updatedGenre) => {

      if (!updatedGenre) {
        return res.status(404).send('Genre not found');
      }
        return res.status(200).send(updatedGenre);
    })
    .catch((err) => {
      return next(err);
    });
};
