'use strict';

class BlogPost {
    constructor(authorName, title, text, publicationDate) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

module.exports = BlogPost;

let authorName = "John Doe";
let title = "Lorem Ipsum";
let text = "Lorem ipsum dolor sit amet.";
let publicationDate = "2000.05.04.";

let John = new BlogPost(authorName, title, text, publicationDate);

authorName = "Tim Urban";
title = "Wait but why";
text = "A popular long-form, stick-figure-illustrated blog about almost everything.";
publicationDate = "2010.10.10.";

let Tim = new BlogPost(authorName, title, text, publicationDate);

authorName = "William Turton";
title = "One Engineer Is Trying to Get IBM to Reckon With Trump";
text = "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.";
publicationDate = "2017.03.28."

let Willian = new BlogPost(authorName, title, text, publicationDate);