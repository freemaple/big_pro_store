import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';
import imageHover from './f/image-hover';
import optionPreview from './f/option-preview';
import InfiniteScroll from 'infinite-scroll';

export default class Category extends CatalogPage {
    onReady() {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        // Load swatches onto product grid if enabled
        if (this.context.enableSwatches || this.context.enableSizes) {
            optionPreview(this.context);
        }

        // Start Infinite Scroll if enabled
        if (this.context.enableInfiniteScrolling && this.context.productCount < this.context.productTotal) {
            this.initInfiniteScroll();
        }
    }

    initInfiniteScroll(rebuild) {
        const infiniteScroll = new InfiniteScroll('.page-content', {
            path: '.pagination-link--next',
            append: '.productCategoryCompare',
            hideNav: '.pagination',
            scrollThreshold: 750,
            onInit: () => {
                $('.productCount').hide();
            },
        });

        infiniteScroll.on('append', () => {
            // Load swatches onto filtered product grid if enabled
            if (this.context.enableSwatches || this.context.enableSizes) {
                optionPreview(this.context);
            }

            if (this.context.enableImageHoverSwitcher) {
                imageHover();
            }
        });

        if (rebuild) {
            infiniteScroll.destroy();
        }
    }

    initFacetedScroll() {
        const $pagination = $('.pagination-link--next');

        this.initInfiniteScroll('rebuild');

        if ($pagination.length) {
            this.initInfiniteScroll();
        }
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            // Start Infinite Scroll if enabled
            if (this.context.enableInfiniteScrolling && this.context.productCount < this.context.productTotal) {
                this.initFacetedScroll();
            }

            $('html, body').animate({
                scrollTop: 0,
            }, 100);

            // Load swatches onto filtered product grid if enabled
            if (this.context.enableSwatches || this.context.enableSizes) {
                optionPreview(this.context);
            }

            if (this.context.enableImageHoverSwitcher) {
                imageHover();
            }
        });
    }
}
