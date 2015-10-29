import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('firstroute');
  this.route('secondroute');
  this.route('thirdroute');
});

export default Router;
