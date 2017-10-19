
var slideshow = {
  photoList : ["family","dog","beach","city","mountains","selfie"],
  currentPhotoIndex : 3,
  current : function() {
    console.log("Current photo is " + this.photoList[this.currentPhotoIndex]);
  },
  next : function() {
        this.currentPhotoIndex ++;
        console.log("The next photo in your album is " + this.photoList[this.currentPhotoIndex]);
      if (this.currentPhotoIndex === this.photoList.length-1) {
        this.pauseInterval()
        console.log("End of album!");

      }
  },
  previous : function() {
      this.currentPhotoIndex --;
      console.log("The previous photo in your album is " + this.photoList[this.currentPhotoIndex]);
      if (this.currentPhotoIndex === 0){
        console.log("Beginning of album!");
      }
  },
  playInterval : setInterval(function() {
     this.slideshow.next();
  }, 2000),
  pauseInterval : function(){
    clearInterval(this.slideshow.playInterval);
  }.bind(this)
};

this.slideshow.current();
this.slideshow.playInterval;
