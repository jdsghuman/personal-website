import MobileMenu from './modules/MobileMenu';
import OnScroll from './modules/OnScroll';
import Email from './modules/Email';
import Copyright from './modules/Copyright';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
var elm = document.querySelectorAll('.portfolio-item');

var mobileMenu = new MobileMenu();
var email = new Email();
var copyright = new Copyright();
new OnScroll($('.portfolio-item'), '85%');
var stickyHeader = new StickyHeader();
var modal = new Modal();
