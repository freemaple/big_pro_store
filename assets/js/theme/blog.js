import PageManager from './page-manager';
import relatedProduct from './f/blog-related-product';
import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.equalizer';

export default class Blog extends PageManager {
    onReady() {
        if (this.context.relatedProduct) {
            relatedProduct(this.context.relatedProduct);
        }

        $(document).foundation({
            equalizer: {
                equalize_on_stack: true,
            },
        });

        $(document).foundation('equalizer', 'reflow');
    }
}
