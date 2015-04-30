$.Tabs = function (el) {
  this.$el = $(el);
  this.$links = $($el.find("tabs"));
  this.$contentTabs = $($links.find("#"+data["content-tabs"]));
  this.$tabPanes = $(this.$contentTabs.find("tab-pane"));
  this.$activeTab = $($contentTabs.find(".active-pane"));

};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
