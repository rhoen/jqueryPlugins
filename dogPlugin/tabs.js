$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $("#"+this.$el.data("content-tabs"));
  this.$tabPanes = $(this.$contentTabs.find("tab-pane"));
  this.$activeTab = $(this.$contentTabs.find(".active-pane"));
  this.$activeLink = $(this.$el.find(".active-link"));
  this.$el.on("click","a", this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function(event) {
  event.preventDefault();
  this.$activeTab.removeClass("active-pane");
  this.$activeLink.removeClass("active-link");

  this.$activeLink = $(event.currentTarget);
  this.$activeLink.addClass("active-link");

  var tabName = this.$activeLink.attr('href');
  this.$activeTab = $(this.$contentTabs.find(tabName));
  this.$activeTab.addClass("active-pane");
};







$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
