import Ember from 'ember';

export default Ember.Service.extend({
  events: [],

  log(obj) {
    let eventObject = {
      time: new Date()
    }
    this.get('events').pushObject(Ember.merge(eventObject, obj));
    this.saveLogs();
  },

  saveLogs() {
    if(this.get('events.length') >= 5) {
      let log = {
        app: 'emberlogger', // an app name for your backend
        events: Ember.copy(this.get('events')),
        locale: navigator.language,
        time: new Date(),
        userAgent: navigator.userAgent
      }
      console.log(log); // push logs to server
      this.get('events').clear();
    }
  }
});
