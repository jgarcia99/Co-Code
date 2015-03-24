angular.module('coCode')
    .factory('Post', function($firebaseObject, $firebaseArray) {
        var base = new Firebase('https://co-code.firebaseio.com/');
        var posts = new Firebase(base.child('posts')).firebaseArray();

        var Post = {
            all: posts,
            create: function(post) {
                return posts.$add(post);
            },
            get: function(postId) {
                return new Firebase(ref.child('posts').child(postId)).$firebaseObject();
            },

            delete: function(post) {
                return posts.$remove(post);
            }
        };

        return Post;

    });
