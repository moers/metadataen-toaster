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
    tags.pushObject("Neuer Tag");
    this.data.set('tags', tags);
  },
  
  addRessource: function() {
    var resources = metadata.get("resources").pushObject({});
  },
  
  addContact: function() {
    var contacts = metadata.get("extras.contacts").pushObject({});
  },
  
  addDate: function() {
    var dates = metadata.get("extras.dates").pushObject({});
  }
  
});

App.TagView = Ember.CollectionView.extend({
  contentBinding: metadata.get('tags'),
  itemViewClass: Ember.View.extend({
    templateName: 'tags',

    addTag: function() {
      var tags = this.data.get('tags');
      tags.push("Neuer Tag");
      this.data.set('tags', tags);
    }
  }),
  contentChanged: function() {
    console.log(this.content);
  }.observes('content')
});

App.formView = App.FormView.create();
App.formView.appendTo("#form");