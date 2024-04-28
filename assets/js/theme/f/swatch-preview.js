import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.equalizer';

export default function () {
    const $src = $('.card-swatches');

    function showSwatchPreview() {
        const productId = $(this).attr('data-id');
        utils.api.product.getById(
            productId, { template: 'f/swatches/product-swatches' }, (err, resp) => {
                const swatchContent = $.parseHTML(resp);
                $(this).html(swatchContent);
                $(document).foundation('equalizer', 'reflow');
            });
    }

    $src.each(showSwatchPreview);
}
