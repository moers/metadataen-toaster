App.JsonView = Ember.View.extend({
  templateName: 'metadata-json',
  jsonString: '',
  generateJson: function() {
    this.set('jsonString', JSON.stringify(metadata, null, 4));
  },
  parseJson: function() {
    try {
      var newValues = JSON.parse(this.jsonString);
      window.metadata.setProperties(newValues);
    } catch(err) {
      console.error(err);
      window.metadata = null;
      window.metadata = App.Metadata.create()
    }
  },
  downloadJson: function() {
    this.generateJson();
    var text = this.get('jsonString');
    
    text = "data:application/json," + encodeURIComponent(text);
    
    window.location = text;
  }
});