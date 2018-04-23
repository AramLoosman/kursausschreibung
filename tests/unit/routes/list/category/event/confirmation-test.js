import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list/category/event/confirmation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list/category/event/confirmation');
    assert.ok(route);
  });
});
