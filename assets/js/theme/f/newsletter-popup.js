import $ from 'jquery';
import Cookies from 'js-cookie';

export default function (delay, reappear, pagetype) {
    const nlHide = Cookies.get('nlHide');

    function showNewsletter() {
        if (!nlHide) {
            $('.newsletterPopup-overlay').show().css('opacity', '1');
        }
    }

    if (pagetype !== 'default') {
        setTimeout(showNewsletter, delay);
    }

    function closePopup(e) {
        e.preventDefault();
        Cookies.set('nlHide', '1', { expires: reappear });
        $('.newsletterPopup-overlay').css('opacity', '0').hide();
    }

    function submitForm(e) {
        e.preventDefault();
        Cookies.set('nlHide', '1', { expires: 999 });
        this.submit();
    }

    $('.newsletterPopup-dismiss').on('click', closePopup);

    $('.newsletterPopup form').on('submit', submitForm);
}
