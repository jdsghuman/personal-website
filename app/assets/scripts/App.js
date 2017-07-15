import MobileMenu from './modules/MobileMenu';
import OnScroll from './modules/OnScroll';
import Email from './modules/Email';
import Copyright from './modules/Copyright';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var email = new Email();
var copyright = new Copyright();

var elm = document.querySelectorAll('.portfolio-item');

new OnScroll($('.portfolio-item'), '85%');
