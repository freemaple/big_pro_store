import PageManager from './page-manager';
import relatedProduct from './f/blog-related-product';

export default class BlogPost extends PageManager {
    onReady() {
        if (this.context.relatedProduct) {
            relatedProduct(this.context.relatedProduct);
        }
    }
}
