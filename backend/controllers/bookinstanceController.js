const BookInstance = require('../models/bookinstance');

// Display list of all BookInstances.
exports.bookinstanceList = (req, res) => {

BookInstance.find()
    .populate('book')
    .exec((err, listBookinstances) => {
        if (err) { return next(err); }

        res.status(200).send({ bookinstanceList: listBookinstances });
    });
};

// Display detail page for a specific BookInstance.
exports.bookinstanceDetail = (req, res, next) => {

  let id = req.params.id;

  return Promise.all([

      BookInstance.find({ _id: id })
        .populate('book')
        .exec()
  ]).then((results) => {
      let instance = results[0];

      if (!instance){
        return res.status(404).send('Instance not found');
      }

      return res.status(200).send({
        instance
      });

    }).catch((err) => {
      return next(err);
  })

};


// Display BookInstance create form on POST.
exports.bookinstanceCreatePost = (req, res, next) => {

    let data = req.body;

    let bookInstance = new BookInstance(data);

    bookInstance.save((err, savedInstance) => {
      if (err) {
        next(err);
      }

      return res.status(200).send('Instance saved');
    })
};


// Display BookInstance delete form on DELETE.
exports.bookinstanceDeleteDelete = (req, res, next) => {

  let id = req.params.id;

  return Promise.all([

      BookInstance.findOne({ _id: id }),
    ]).then((instance) => {

      if (!instance){
        return res.status(404).send('Instance not found');
      }

      return BookInstance.findByIdAndRemove(id).then(() => {
        return res.status(200).send('Instance deleted');
      }).catch((err) => {
        return next(err);
      });
    });

  };


// Display BookInstance update form on GET.
exports.bookinstanceUpdatePut = (req, res, next) => {
    let id = req.params.id;

    let data = req.body;

    data._id = id;

    let instance = new BookInstance(data);

    BookInstance.findByIdAndUpdate(id, instance, { new: true })
    .then((updatedInstance) => {

      if (!updatedInstance) {
        return res.status(404).send('Instance not found');
      }
        return res.status(200).send(updatedInstance);
    })
    .catch((err) => {
      return next(err);
    });
};
