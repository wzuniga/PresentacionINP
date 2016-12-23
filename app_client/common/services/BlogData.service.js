(function() {

  angular
    .module('BlogApp')
    .service('BlogrData', BlogData);

  BlogData.$inject = ['$http'];
  function BlogData ($http) {
    var agregarBlog = function (Blog) {
      return $http.get('/api/blogs/' + blog);
    };

    var leerData = function (idBlog) {
      return $http.get('/api/blogs/' + idBlog);
    };

    var actualizarData = function (idBlog, blog) {
      return $http.post('/api/blogs/' + idBlog + ' /' + blog);
    };

    var borrarData = function (idBlog) {
      return $http.post('/api/blogs/' + idBlog);
    };

  }

})();