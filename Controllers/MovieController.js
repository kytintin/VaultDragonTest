const Movie = require('../Models/movies');

exports.GetAllMovies = (req, res) => {
    Movie.find({}, (err, movie) => {
        if (err) {
            return next(err);
        }
        res.send(movie);
    })
}

exports.CreateMovies = (req, res) => {

    var date = new Date();
    var current = date.getHours();

    console.log('Date : ' + date + ', Hour : ' + current);

    var newMovie = new Movie({
        movieId: req.body.movieId,
        name: req.body.name,
        created_at: date,
    });

    console.log("Movie Id: " + req.body.movieId);
    
    Movie.find({
        'movieId': req.body.movieId
    }, (err, movie) => {
        if (err) {
            res.send(err);
            return;
        }
        if (!movie.length)
        {
            console.log("Empty");
            newMovie.save( err => {
                if (err) {
                    res.send("Error creating object");
                    return;
                } 
                res.send(newMovie);
            });
        } else {
            console.log('Not Empty');
            Movie.where({ movieId:req.body.movieId })
            .update({ $set: req.body }, (err, update) => {
                if(err) {
                    res.send(err);
                }
                res.send(update);
            });
        }
    })

}

exports.GetMoviesById = (req, res) => {
    console.log('ID: ' + req.params.id);
    Movie.findById(req.params.id, (err, movie) => {
        if (err) {
            return next(err);
        }
        res.send(movie);
    })
}

exports.GetMoviesByMovieId = (req, res) => {
    console.log("MovieID: " + req.params.movieId);
    var query = {
        movieId: req.params.movieId
    };

    Movie.find({
        'movieId': req.params.movieId
    }, (err, movie) => {
        if (err) {
            res.send(err);
            return;
        }
        res.send(movie);
    })
}