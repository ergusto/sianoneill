import 'typeface-bellefair';
import 'typeface-lora';
import 'typeface-josefin-slab';
import 'typeface-open-sans-condensed';
import 'typeface-open-sans';
import '../css/site.scss';
import 'font-awesome/scss/font-awesome.scss';

document.body.classList.add('open-sans');
if (!('ontouchstart' in document.documentElement)) {
	document.documentElement.classList.add('no-touch');
}