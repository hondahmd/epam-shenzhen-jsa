'use strict';

class Blog {
    constructor() {
        this.posts = [];
    }

    add(post) {
        this.posts.push(post);
    }

    delete(index) {
        this.posts.splice(index, 1);
    }

    update(index, post) {
        this.posts.splice(index, 1, post);
    }
}

module.exports = Blog;