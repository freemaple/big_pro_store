import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.equalizer';

export default function () {
    const $src = $('.card-sizes');

    function showSizePreview() {
        const productId = $(this).attr('data-id');
        utils.api.product.getById(
            productId, { template: 'f/swatches/product-sizes' }, (err, resp) => {
                const sizeContent = $.parseHTML(resp);
                $(this).html(sizeContent);
                $(document).foundation('equalizer', 'reflow');
            });
    }

    $src.each(showSizePreview);
}
