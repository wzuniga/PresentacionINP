var mongoose = require('mongoose');
var Loc = mongoose.model('Blog');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

//Realizamos el CRUD

module.exports.blogsCreate = function(req, res) {
  
  Loc.create({
    name: req.body.name,
    author: req.body.author,
    message: req.body.body,
    references: req.body.reference,
    date: req.body.date
  }, function(err, blog) {
    if (err) {
      sendJSONresponse(res, 400, err);
    } else {
      sendJSONresponse(res, 201, blog);
    }
  });
};

module.exports.blogsReadOne = function(req, res) {
  if (req.params && req.params.blogid) {
    Loc
      .findById(req.params.blogid)
      .exec(function(err, blog) {
        if (!blog) {
          sendJSONresponse(res, 404, {
            "message": "blogid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 404, err);
          return;
        }
        sendJSONresponse(res, 200, blog);
      });
  } else {
    sendJSONresponse(res, 404, {
      "message": "No blogid in request"
    });
  }
};

module.exports.blogsUpdateOne = function(req, res) {
  if (!req.params.blogid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, blogid is required"
    });
    return;
  }
  Loc
    .findById(req.params.blogid)
    .exec(
      function(err, blog) {
        if (!blog) {
          sendJSONresponse(res, 404, {
            "message": "blogid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        blog.nombre = req.body.nombre;
        blog.autor = req.body.autor;
        blog.cuerpo = req.body.cuerpo;
        blog.fecha = req.body.fecha;
        blog.save(function(err, blog) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, blog);
          }
        });
      }
  );
};

module.exports.blogsDeleteOne = function(req, res) {
  var blogid = req.params.blogid;
  if (blogid) {
    Loc
      .findByIdAndRemove(blogid)
      .exec(
        function(err, blog) {
          if (err) {
            sendJSONresponse(res, 404, err);
            return;
          }
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No blogid"
    });
  }
};
