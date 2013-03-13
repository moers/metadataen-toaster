Ember.TextField.reopen({
  attributeBindings: ['required']
})

window.App = Ember.Application.create();

App.Metadata = Ember.Object.extend({
  tags: [],
  resources: [],
  extras: {
    dates: [],
    contacts: []
  },
  tagsString: function(key, value) {
    // getter
    if (arguments.length === 1) {
      return this.get("tags").join(", ")
      // setter
    } else {
      var tags = value.replace(/\s+/g, '').split(",");
      this.set("tags", tags);
      
      return value
    }
  }.property("tags")
})

var metadata = App.Metadata.create();