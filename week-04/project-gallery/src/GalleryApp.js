import React from 'react';

import galleryStyle from './GalleryApp.module.css';
import ImageList from './ImageList';

class GalleryApp extends React.Component {
    constructor() {
        super();
        this.state = {
            imageList: ImageList,
            viewerImgIndex: 0
        };
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.clickOnThumbnail = this.clickOnThumbnail.bind(this);
    }

    slide(edge, step) {
        if (this.state.viewerImgIndex === edge) {
            this.setState({
                imageList: this.state.imageList,
                viewerImgIndex: this.state.imageList.length - 1 - edge
            })
        } else {
            this.setState({
                imageList: this.state.imageList,
                viewerImgIndex: this.state.viewerImgIndex + step
            })
        }
    }

    slideLeft() {
        this.slide(0, -1);
    }

    slideRight() {
        this.slide(this.state.imageList.length - 1, 1);
    }

    clickOnThumbnail(event) {
        if (event.target.id.indexOf('tbImg') === -1 || Number(event.target.id.split(' ')[1]) > this.state.imageList.length - 1) {return;}
        this.setState({
            imageList: this.state.imageList,
            viewerImgIndex: Number(event.target.id.split(' ')[1])
        })
    }

    render() {
        return (
            <>
                <div className="gallery-container" id="gallery">
                    <div className="viewer-container">
                        <div className="slide-button-container" onClick={this.slideLeft}>
                            <img src="./arrow.svg" />
                        </div>
                        <div className="viewer-image-container">
                            <img className="viewer-image" src={this.state.imageList[this.state.viewerImgIndex].getViewerImgLink()} />
                            <div className="description-container">
                                <h2 className={galleryStyle.descriptionTitle}>{this.state.imageList[this.state.viewerImgIndex].getWorkName()}</h2>
                                <p className={galleryStyle.description}>{this.state.imageList[this.state.viewerImgIndex].getDescription()}</p>
                            </div>
                        </div>
                        <div class="slide-button-container" onClick={this.slideRight}>
                            <img src='arrow.svg' className={galleryStyle.rightSlideBar}/>
                        </div>
                    </div>
                    <div className="thumbnail-bar-container" onClick={this.clickOnThumbnail}>
                        {this.state.imageList.map((image, index) => 
                            <div className={index === this.state.viewerImgIndex ? galleryStyle.selectedThumbnail : "thumbnail-img-container"}>
                                <img src={image.getTbImgLink()} key={"tbImg" + index} id={"tbImg " + index} alt={image.getWorkName()}
                                className={galleryStyle.unselectedThumbnailImg} />
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }

}

export default GalleryApp;
