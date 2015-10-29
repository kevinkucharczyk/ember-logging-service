import Ember from 'ember';

export default Ember.Route.reopen({
  afterModel(resolvedModel, transition) {
    this._super(resolvedModel, transition);

    if(this.routeName === transition.targetName) {
      this.get('logger').log({
        type: 'transition',
        target: transition.targetName,
        queryParams: transition.queryParams
      });
    }
  }
});
