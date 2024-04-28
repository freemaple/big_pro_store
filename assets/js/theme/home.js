import PageManager from './page-manager';
import optionPreview from './f/option-preview';

export default class Home extends PageManager {
    onReady() {
        // Load swatches onto product grid if enabled
        window.onload = () => {
            if (this.context.enableSwatches || this.context.enableSizes) {
                // window.onload is not being picked up by Safari,
                // but it is stopping the page delay at least for now.
                optionPreview(this.context);
            }
        };
    }
}
