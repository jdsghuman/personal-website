import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.headerLinks = $('.primary-nav a');
    this.contact = $('.contact_me');
    this.addSmoothScrolling();
  }
  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
    this.contact.smoothScroll();
  }
}

export default StickyHeader;
