$.Carousel = function(el) {
  this.$el = $(el);
  this.$items = this.$el.find("items");
  this.activeIndex = 0;
}

$.Carousel.prototype.slide(dir) {
  if (this.activeIndex + dir < 0) {
    return;
  } else if (this.activeIndex + dir > this.$items.find("li").length) {
    return;
  }

  var newIndex = this.activeIndex + dir;
  var newChild = this.$items.children().eq(newIndex);
  var oldChild = this.$items.children().eq(this.activeIndex);

  oldChild.removeClass("active");
  newChild.addClass("active");


};
