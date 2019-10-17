'use strict';

class ImageInfo {
    constructor(viewerImgLink, workName, description) {
        this.viewerImgLink = viewerImgLink;
        this.thumbnailImgLink = '';
        this.workName = workName;
        this.description = description;
    }

    getViewerImgLink() {
        return this.viewerImgLink;
    }

    getTbImgLink() {
        this.thumbnailImgLink = this.generateTbImgLink();
        return this.thumbnailImgLink;
    }

    getWorkName() {
        return this.workName;
    }

    getDescription() {
        return this.description;
    }

    generateTbImgLink() {
        let subEles = this.viewerImgLink.split('&');
        let result = '';
        for (let i = 0; i < subEles.length; i++) {
            if (subEles[i].indexOf('h=') !== -1) {
                subEles[i] = 'h=70';
            } else if (subEles[i].indexOf('w=') !== -1) {
                subEles[i] = 'w=70';
            }
            result += subEles[i] + '&';
        }
        return result;
    }
}

module.exports = ImageInfo;
