# Changelog

## 2.6.0 (2020-10-26)
### Added
- Global Page Builder regions to header and footer

## 2.5.0 (2020-08-13)
### Fixed
- Issue caused by change in BC backend rendering special characters incorrectly
- Display bug in review panel title
- Issue with wishlist validation
- Issue with UPC not updating when product options are changed

### Changed
- Swatches on listing pages now use GraphQL, improving store performance

### Updated
- Bumped Lodash version to 4.17.16

## 2.4.2 (2020-06-02)
### Fixed
- Issue with Stripe v3 vaulted cards selector in CG Dark
- Issue with blog article title overflow on medium screens up

### Updated
- Bumped jQuery version to 3.5.1

## 2.4.1 (2020-05-05)
### Fixed
- Issue with body padding with fixed headers due to pagebuilder regions

## 2.4.0 (2020-04-20)
### Fixed
- Issue with blog post heading overlay

### Added
- Page Builder regions to homepage, content, category, product and article pages
- Page Builder regions to header and footer

## 2.3.3 (2020-04-11)
### Fixed
- CSRF authentication issue on newsletter popup

## 2.3.2 (2019-09-06)
### Changed
- Updated jQuery version

## 2.3.1 (2019-08-13)
### Fixed
- Display issue with the payment icons in simple footer mode

## 2.3.0 (2019-08-09)
### Fixed
- Fixed bug that stopped links in product description being clickable on mobile when animations were enabled
- Security fix to prevent cross server scripting

### Added
- Additional payment icons

### Changed
- Payment icons from font to SVG to reduce overheads
- Removed Instafeed due to the [Instagram API shutdown](https://www.instagram.com/developer/). Please use the Elfsight module built into the theme for displaying your Instagram feed

## 2.2.4 (2019-05-24)
### Fixed
- Compare button in header now respects store settings
- JS error with infinite scroll on category when there is only one page
- Added checks in mobile and account navigation for the Wishlist object

## 2.2.3 (2019-04-17)
### Fixed
- AMP logo sizing issue
- AMP product image sizing issues
- Error with cart appearing in the page content on AMP pages
- Overflow issue with the sticky panel on the cart page
- Fixed an issue with faceted search caused by a platform update

## 2.2.2 (2019-02-12)
### Fixed
- Additional display issue with quick view when page animations are enabled
- Adjusted Brands link text in the simple footer
- Adjusted padding on marketing banners
- Quick search box now respects color settings
- Instafeed dependency temporarily added into local vendor folder

### Changed
- Restored customization fields, temporarily
- Adjusted pricing display when tax labels show

## 2.2.1 (2018-12-21)
### Fixed
- Display issue with newsletter popup when sticky header is enabled
- Display issue with quick view when page animations are enabled

## 2.2.0 (2018-12-19)
### Fixed
- Labels on product page radio elements now inherit secondary font settings
- Color configurations in Dark variation
- Display issues with certain navigation configurations
- Display issues with Braintree PayPal and Apple Pay buttons
- Display issue with top banner margins on homepage

### Changed
- Phone number, when enabled, shows in the mobile footer
- Pattern zoom box no longer shows on mobile, based on store owner feedback

### Added
- Support for Elfsight Instagram Feed

### Updated
- F framework alignment to latest version

## 2.1.2 (2018-11-14)
### Fixed
- Display bug on checkout button when gradients are enabled

## 2.1.1 (2018-11-06)
### Changed
- Hide Instagram posts panel title until images successfully load

### Updated
- F framework alignment
- Support for enhanced ecommerce data tag analytics
- Support for future platform feature, saved payment methods in account

## 2.1.0 (2018-10-31)
### Fixed
- Fix display issue with storyboard slides on height equalize
- Fix display issue when featured categories don't have images assigned
- Stop dots appearing on vertical carousel in product page on large screens
- Stop quantity box appearing on product page when "login for pricing" is active
- Fix issue with special characters in facet labels breaking "show more" behaviour

### Added
- Add dropdown menus for content sub pages in the main navigation
- Add support for PayPal smart buttons

### Updated
- F framework alignment to latest version
- Clicking the "Shop Now" button on products in blog articles now opens the quick view popup

## 2.0.5 (2018-10-15)
### Fixed
- Fix issue with renaming "warranty" label through theme editor

### Changed
- "Hide UPC" theme editor option is now also applied to AMP product pages

## 2.0.4 (2018-10-03)
### Fixed
- Fix display issue with blog card width when summary is hidden
- Fix banner link color display issue

## 2.0.3 (2018-09-17)
### Fixed
- Fix display issue with wishlist button on the product page
- Fix custom fields display on compare page

### Updated
- F framework alignment to latest version

## 2.0.2 (2018-09-10)
### Fixed
- Fix bug in Firefox that stopped cart qty updating on the product page under certain conditions

## 2.0.1 (2018-09-07)
### Fixed
- Fix form display bugs

## 2.0.0 (2018-08-20)
### Added
- Initial commit for BigCommerce theme store
