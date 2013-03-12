

window.App = Ember.Application.create();

App.Metadata = Ember.Object.extend({
  tags: []
})

var metadata = App.Metadata.create();

App.FormView = Ember.View.extend({
  templateName: 'metadata-form',
  data: metadata,
  groupsContent: ["wirtschaft_arbeit", "transport_verkehr", "umwelt_klima", "geo", "gesundheit", "verbraucher", "infrastruktur_bauen_wohnen", "bildung_wissenschaft", "verwaltung", "gesetze_justiz", "bevoelkerung", "politik_wahlen", "soziales", "kultur_freizeit_sport_tourismus"],
  typeContent: ["datensatz", "dokument", "app"],
  roleContent: ["veroeffentlichende_stelle", "ansprechpartner", "vertrieb", "autor"],
  date: {
    roleContent: ["erstellt", "veroeffentlicht", "aktualisiert"]
  },
  licenseIdContent: ["apache", "app_commercial", "app_freeware", "app_opensource", "bsd-license", "cc-by", "cc-by-sa", "cc-nc", "cc-zero", "dl-de-by-1.0", "dl-de-by-nc-1.0", "geolizenz-closed", "geolizenz-i-a", "gfdl", "gpl-3.0", "mozilla", "odc-by", "odc-odbl", "odc-pddl", "official-work", "other-closed", "other-open"],
  sectorContent: ["oeffentlich", "privat", "andere"],
  
  addTag: function() {
    var tags = this.data.get('tags');
    tags.push("Neuer Tag");
    this.data.set('tags', tags);
  }
});
App.formView = App.FormView.create();
App.formView.appendTo("#form");

App.JsonView = Ember.View.extend({
  templateName: 'metadata-json',
  jsonString: '',
  generateJson: function() {
    this.set('jsonString', JSON.stringify(metadata, null, 4));
  },
  parseJson: function() {
    var newValues = JSON.parse(this.jsonString);
    window.metadata.setProperties(newValues);
  }
});
App.jsonView = App.JsonView.create();
App.jsonView.appendTo('#json');

console.log(metadata);