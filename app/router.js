import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import $ from 'jquery';
import { scrollToTimeout, setOffsetStickyHeader } from 'kursausschreibung/helpers/scroll';

let rootElement = $(config.APP.rootElement).get(0);

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);
    
    var subscriptionProcessId = 'subscriptionProcess';

    setInterval(function(){
      if (document.getElementById(subscriptionProcessId) !== null) {
        setOffsetStickyHeader(subscriptionProcessId);
      }
    },1000);
    
    if (this.currentPath === 'list.category.event.subscribe') {
      scrollToTimeout(subscriptionProcessId);
    } else {
      scrollToTimeout(rootElement.id);
    }
    //rootElement.scrollIntoView({behavior:'smooth'});    
  }
});

Router.map(function () {
  this.route('permalink', { path: '/uid/:event_id' });
  this.route('list', { path: '/:area_of_education' }, function () {
    this.route('category', { path: '/:category' }, function () {
      this.route('event', { path: '/:event_id' }, function () {
        this.route('subscribe');
        this.route('confirmation-error');
        this.route('confirmation');
      });
    });
  });
});

export default Router;
