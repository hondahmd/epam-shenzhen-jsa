'use strict';

const BlogPost = require('./02');
const Blog = require('./14 - blog');

let post1 = new BlogPost('a', 'a', 'a', 'a');
let post2 = new BlogPost('b', 'b', 'b', 'b');
let post3 = new BlogPost('c', 'c', 'c', 'c');
let blog = new Blog();

blog.add(post1);
blog.add(post2);
console.log(blog);
blog.delete(1);
console.log(blog);
blog.update(0, post3);
console.log(blog);
