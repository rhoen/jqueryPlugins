$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $("#"+this.$el.data("content-tabs"));
  this.$tabPanes = $(this.$contentTabs.find("tab-pane"));
  this.$activeTab = $(this.$contentTabs.find(".active-pane"));
  this.$el.on("click","a", this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function(event) {
  event.preventDefault();
  this.$activeTab.removeClass("active-pane");
  var $activeLink = $(event.currentTarget);
  $activeLink.addClass("active");
  var tabName = $activeLink.attr('href');
  this.$activeTab = $(this.$contentTabs.find(tabName));
  this.$activeTab.addClass("active-pane");
};







$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
