# Covent Garden
This is Flair's second premium theme for BigCommerce, packed with features to help optimize for conversion. The instructions below are split into key Theme Editor sections, documenting how to set up extra features the theme correctly.


## Theme Styles
There are four pre-configured styles out of the box -

1. Contemporary
2. Calm
3. Dark
4. Bold


## General Settings

### Global Container Width
You can easily control the maximum container width for the entire site with this field. Set up the value with a number only, correlating to the maximum width in pixels, i.e. `1800` would render in the CSS as `1800px`.

### Editorial Mode
We have developed a module that can link products to blog posts and list them in an article, and link related blog posts to product pages. To enable this feature, check the option in Theme Editor.

#### Linking Products to Articles

To set up linked products in a blog post, you can do so by adding a tag on the blog post edit screen in your BigCommerce control panel, that starts `RP:` followed by the ID of a product you want to link.

For instance, `RP:90` will link the product with the ID of 90 to the post on the frontend.

Include further products by delimiting the ID's with colons, i.e. `RP:77:78:90`. This will pull product ID's 77, 78 and 90 into the post when rendered on the frontend.

**These special tags will not appear in the blog post tags section on the frontend.**

To find the ID of a product in your BigCommerce control panel, search for a product you want to link and edit it. In your browser's address bar you will see the following: `https://www.yourstore.com/manage/products/XXX/edit`, where `XXX` will equal the product ID.

#### Adding Extra Content to the Related Product

You can pull related content into the product listings that have appeared in your blog post by setting up a custom field on the product edit screen in your store control panel. In the custom fields tab, create a new custom field with the label `Blog Post Description`  **(the label is case sensitive)**, and assign the value field content that you would like to display on the listing. Note that there is a 256 character limit on custom field values. This may include HTML.

#### Linking Articles to Products

To include a related blog article on a product page, in your control panel set up a custom field on the product with the label `Related Content`. **Note that the label is case sensitive.** In the value, paste the URL of the related blog post. Note that you must be using the blog on your BC site, not an external blog. Note that you are limited to 256 characters.

You can either enter the full URL, i.e. `https://www.yourstore.com/blog/article-title/` or the absolute [path](https://www.mattcutts.com/blog/seo-glossary-url-definitions/), i.e. `/blog/article-title/` **(note the leading `/`)**.

**Both the "Related Content" and "Blog Post Description" fields will not show up in the "extra details" section of the product page.**

### Animate on Scroll support
We have included the [AOS](http://michalsnik.github.io/aos/) library in our theme. Activating this feature with large product listings and lots of pages may cause some performance issues on older devices, but this works well if you have small catalogs.

### Conversion Optimization Mode

Enabling this feature will force certain settings to show or hide, irrelevant of how you have configured them in the theme editor or control panel. For instance, this will force social sharing icons to disappear from the product page, as this feature sends visitors away from your site, rather than keeping them engaged with the product page.

This is an entirely optional setting, and more features will be introduced as we develop our theme in the future.


## Colors

### Gradients
We have included a special color feature 'Enable Gradient Elements'. These settings override other color options on certain elements including the main navigation bar, banners, buttons and panel backgrounds.


## Module: Newsletter Popup
We have included a simple newsletter popup module that can be configured to prompt store visitors to join the mailing list. Activate it with the checkbox in the module's Theme Editor panel. Once a visitor submits an email address, the module will set a cookie to prevent itself from appearing again for 999 days.

Delete the `nlHide` cookie to get the popup to appear again, or style the opacity/display for the `.newsletterPopup-overlay` class in your inspector.

### Header Image
You can set up an image to display on the popup by following these steps:

1. Create an image 640px wide and 250px high. **Note the name and extension that your save it as.**
2. Access your store's WebDAV folder and create a folder called `img` in the `content` folder.
3. Upload your banner image into the new `img` folder.
4. In Theme Editor, enter the filename of the image into the Header Image field, exactly as you saved it, i.e. `newsletter.jpg`. **Do not include the path to the image.**

For more information on the WebDAV system in BigCommerce, refer to [this BigCommerce support article](https://support.bigcommerce.com/articles/Public/File-Access-WebDAV)

### Popup Delay
Change this setting to determine how long a visitor must stay on a page before the popup appears.

### Setting a Dismiss Cookie
Change the field 'If dismissed, show again after...' to set how many days a visitor must wait before seeing the box again after dismissing it with the close buttons.

### Customization
There are some customization fields available for the newsletter related to styling. We have also provided fields to easily override the language strings used in the popup.


## Payment Icons
We have included a number of additional payment method and payment provider icons to promote trust in the store.

### Supported Cards
- AMEX
- Diners
- Discover
- JCB
- Mastercard
- Mastercard SecureCode
- Visa
- Verified by Visa

### Credit Providers
- Klarna

### Digital Wallets
- Amazon Pay
- Apple Pay
- PayPal
- Visa Payments

### Payment Processors
- Powered by Braintree
- Powered by Sage Pay
- Powered by Skrill
- Powered by Square
- Powered by Stripe


## Header

### Simple Header
Selecting this option will activate a fixed layout simple header that places the logo, main navigation and utility links on one line. This is not recommended for stores with large category structures (unless activating the 'enclosed navigation' option), a vast amount of pages displayed in the header, or lots of utility links.

Use the simple header for simple ecommerce sites.

If you have activated 'Show Phone Number in Header', to save space the phone number displays in the page footer when 'Simple Header' is activated.

The simple header respects other options such as colors and sticky navigation.

We would recommend activating the 'Replace Utility Links With Icons' feature if you are going to use the simple header.

### Customizable Cart Icons
You can change the icon used in the utility navigation between a bag, cart and basket icon.

### Replace the Utility Menu with Icons
This option replaces the standard text labels in the top utility menu, i.e. "Search", "My Account" etc. with SVG icons.

### Sticky Navigation
Enabling this feature allows the main navigation bar to stick to the top of the viewport on large screens and above. This simplifies the layout of the utility navigation, only displaying search, cart and compare when available.

While the sticky navigation is configured to work with unlimited categories, for the best appearance limit your main navigation items to 8 or less.

#### Hide Logo on Sticky Navigation
Checking this will hide the logo when the sticky navigation activates on scroll. Scrolling back to the top of the page will make the logo reappear.

### Navigation

#### Hide 'View Parent' Links
By default with the style of dropdown navigation we use, lists appear when the top level item is clicked. In this case, we present a 'View Parent' link to allow visitors to access the top level category. This option prevents the 'View Parent' link appearing.

#### Show Brands in Navigation
This adds an additional 'Brands' link to the navigation. This is just a top level link that redirects to the main Brands page.

#### Enclosed Navigation
Check this option to hide all top level categories inside a 'Shop Online' link. Clicking the link will make a navigation list appear. Combine this with the 'Expanded Dropdown Menu' navigation design for best results if you have a large category structure.

You can rename the link that appears in the menu with the text box in this section. **Note that the text field has a 64 character limit**


## Module: Global Header Banner
Enable a sitewide global banner to appear below the main navigation by checking this option. For the banner to display, at least one of the 'Message Text' fields must be populated. **Note the message and URL fields are limited to 64 chartacters.**

### Message Links
The 'Message Link URLs' should only contain the absolute [path](https://www.mattcutts.com/blog/seo-glossary-url-definitions/) to the related content, not the protocol and hostname. For example, if you want to link to `https://www.yourstore.com/our-delivery-options/` simply enter `/our-delivery-options/` in the field.

### Message Icons
You can optionally display an icon to the left of each message in the global banner. We have included a selection of relevant icons from [Font Awesome](https://fontawesome.com/icons?d=gallery&s=solid&m=free). Please let us know if you need any additional icons including from the free version of Font Awesome and we will consider them for future releases of the theme.


## Footer

### Simple Footer
Much like the 'Simple Header' option, this presents an alternative footer design for smaller or simple stores. It will condense the navigation to just pages, and present the brands as a single link.

Other display options are respected such as payment methods, the newsletter and social icons.

The simple footer has additional color options for the newsletter strip.


## Home Page

### Carousel Mode
We offer an additional mode to the standard, scrolling carousel, which we call 'Storyboard'. The following links will help explain why we recommend using this mode:

- [Yoast](https://yoast.com/opinion-on-sliders/)
- [ConversionXL](https://conversionxl.com/blog/dont-use-automatic-image-sliders-or-carousels/)
- [Neilsen Norman Group](https://www.nngroup.com/articles/auto-forwarding/)

Storyboard mode distributes your hero images and messages throughout the home page, breaking up content and giving more visibility to each individual item. The content will automatically adapt to the number of slides that have been set up in the carousel system. Set up the slides exactly how you would the classic mode carousel.

#### Carousel Width
Choose to contain the content within the main page container or match the viewport width.

#### Carousel Content Alignment
Align the content of the main hero image, or all classic slider content to the left, right or center of the container.

### Alternative Product List Titles
This is an alternative display mode for featured, new and top selling product lists on the home page. The title appears to the left of the product lists styled on a card.

### Showing Blog Articles on the Homepage
Check this option to enable a panel on the homepage which will display latest articles in your blog. It will pull in thumbnail images from each post if they exist. The number of posts displayed is dependent on the Number of Blog Posts setting for the home page. The Columns setting assigns the number of columns on the desktop view in the frontend.


## Module: Featured Categories on the Homepage
We have included a custom panel that will pull in specific categories that you want to feature. This is flexible enough for the store owner to determine which categories they want to feature without having to base it off an existing category structure. Check the box to enable this feature.

### Setup
Once activated, the panel will search for a category you have designated as the top level featured category. You can do this in your control panel by creating a new category, or choosing an existing one. Under the chosen category, add new sub categories - these will appear as featured categories on the home page.

You can assign existing products to appear under these featured categories in addition to their current category assignments.

Set the name of this category in the 'Featured Category Name' field. **Note that this field has a 64 character limit and is case sensitive.**

The panel will locate the specified top level category, and providing it contains subcategories, will list those as the "Featured Categories" on the homepage. We recommend setting up a category image in the control panel for each featured category that is pulled through into the grid.

#### Hide Category Names in the Grid
If you have uploaded images to your featured categories that already include text, check this option to prevent the text label for each category appearing.

#### Hide Featured Category Panel Title
This will prevent the "Featured Categories" title from appearing above the grid, if you want the theme to show a grid of images directly below the main hero image.

#### Hide Featured Categories in the Main Navigation
Activating this option will hide the specified top level "featured" category from the main navigation.


## Module: Instagram Feed
We have included [Instafeed.js](http://instafeedjs.com/) in this theme.

Instafeed has been configured to pull in a users feed of images from their own Instagram account. This will require a valid access token with an access scope of `basic`. Generate an access token with the [blackCICIDA app](https://apps.blackcicada.com/instagram-access-token-generator/). Follow the instructions in this app to get the token, and set the 'Intsgram Access Token' field to the value of the generated string.

**Please note that videos and image collections do not currently display in the panel**

### Limit Number of Posts
Limit the number of posts pulled into the module by setting the field.


## Product Listing Grids

### Enable Image Hover Switcher
We have included a module in our theme that switches the product thumbnail image on the category grid with a second alternative image on hover.

This will always pull in the second image from the product image object. To ensure that our module works correctly, the main second image in sequence should not be set to display as the thumbnail in the store control panel.

### Show Add to Wishlist on Product Grid
This will display an Add to Wishlist button on the category product listing grid when a visitor hovers over a product.

### Show Stock on Product Grid
Enabling this feature will show a stock level on each product in the category grid.

**Both the original thumbnail and the second hover image should be the same dimensions/aspect ratio.**

### Show Color Swatches on Grids
We have included a module to display color swatches on any product with a color swatch option in the category grid listing.

**Options must be configured to use the swatch type for these to display.**

### Size Options on Product Grid
We have included a module to display product sizes on the category grid listing. Set the value of 'Size Label Identifier' to match the label used in store for the option set you want to display, i.e. `Size`.

**This reflects all size options available for the product including those out of stock**


## Category Pages

### Infinite Scroll on Category Page
Set the checkbox to enable [Infinite Scroll](https://infinite-scroll.com/) on the category page.

**There may be some performance issues on older devices if this is used alongside page animations**

### Product Count on Category Listing
This shows the total number of products in a category, along with a count of how many are currently displaying. If the total is 100 or less, a link will appear with the option to "Show All". If there are more than 100 products in a category, the link will give the option to "Show 100 Products".

**This is automatically hidden if infinite scroll is enabled and there is more than one category page.**

### Hide Category Image
We would recommend making sure this option is turned on, as category images are best used for displaying categories in a grid. Once clicked through to the main page, you can present content via the category description.

### Show Sub Categories as a Grid on Category Pages
Enabling this mode will replace the list of sub categories in the left column of the category page with a grid in the main content column. This is best used when sub categories have images assigned to them. You can specify how many columns will be shown in the desktop viewport.


## Product Tags and Labels

### On Sale Badges
Enable this and any discounted product, i.e. with a sale price will display a sale tag.

**Note that due to the way BigCommerce currently generates product prices, sale tags will appear on any discounted product, including ones in customer groups with discounts applied.**

### Sale Percentage Savings
With sale tags enabled, you can also choose to show the percentage saved inside the sale tag. These tags will only display if Sales Badges are activated.

### Custom Labels on Product Grid
Store owners can attach a custom label to products listed in the category grid by setting up a custom field on a product with the label `Promotion Label`.

Our theme also works for stores using our legacy theme which used the field label `GridTag`.

### Show Selling Fast Tags on Product Grid
If activated, this will show a "Selling Fast!" label on the product grid if inventory levels are equal to or less than the set warning level.


## Product Page

### Color Swatch Shape
We have bundled two styles for color swatches in our theme; square and round. To display round swatches, check the 'Circular Swatches' option in this section. These styles will apply sitewide, on the category, quick view and product pages.

### Show Selected Swatch Option in Labels on the Product Page
By request we have included a feature that shows the name of a selected color swatch or "rectangle" option next to the label.

### Product Description Position
Check the option to move the product description, extra details and warranty box out of the right hand column on the product, into a new, full page width container below the image and add to cart panels.

### Rename Warranty Box Title
As the warranty box in the BigCommerce control panel can contain HTML, you may want to use this as an additional panel, unrelated to warranty details. You can rename the heading from 'Warranty Details' to something more appropriate using this field.

**Note that this string is limited to 64 characters.**


## Shopping Cart

### Show Payment Method Icons in the Cart
This will show payment methods in the mini cart and cart page, below the checkout buttons.

### Add to Cart Mode
Control the behavior of the add to cart functionality on the product page. You may redirect straight to the cart page, show a popup or reveal a dropdown mini cart from the header.
