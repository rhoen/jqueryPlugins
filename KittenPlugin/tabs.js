$.Carousel = function(el) {
  this.$el = $(el);
  this.$items = this.$el.find(".items");
  this.activeIndex = 0;
  this.$el.on("click", "a", this.addListeners.bind(this));
};

$.Carousel.prototype.addListeners = function (event) {
  var leftOrRight = $(event.currentTarget).attr("class")
  if (leftOrRight === "slide-left") {
    this.slide(1);
  }
  if (leftOrRight === "slide-right") {
    this.slide(-1)
  }
};


$.Carousel.prototype.slide = function(dir) {
  if (this.activeIndex + dir < 0) {
    return;
  } else if (this.activeIndex + dir >= this.$items.find("li").length) {
    return;
  }

  var newIndex = this.activeIndex + dir;
  var newChild = this.$items.children().eq(newIndex);
  var oldChild = this.$items.children().eq(this.activeIndex);

  oldChild.removeClass("active");
  newChild.addClass("active");

  this.activeIndex += dir;


};


$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
