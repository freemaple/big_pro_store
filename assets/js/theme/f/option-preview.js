import $ from 'jquery';
import graphql from './graph-ql';

export default function (context) {
    const productList = document.querySelectorAll('[data-id]');
    const productIdList = [];
    const swatchSize = context.themeSettings.grid_swatch_option_size.split('x', 1)[0];
    const sizeName = context.themeSettings.size_label;
    let swatchQuery = '';

    productList.forEach((product) => {
        productIdList.push(parseInt(product.dataset.id, 10));
    });

    if (context.themeSettings.show_swatches_on_grid) {
        swatchQuery += `... on SwatchOptionValue {
            hexColors
            imageUrl(width:${swatchSize})
        }`;
    }

    const query = `query SeveralProductsByID {
          site {
            products(first: 50, entityIds: [${productIdList}]) {
              edges {
                node {
                  entityId
                  productOptions {
                    edges {
                      node {
                        ... on MultipleChoiceOption {
                            displayStyle
                            displayName
                            values {
                              edges {
                                node {
                                  label
                                  ${swatchQuery}
                                }
                              }
                            }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`;

    function makeQuery() {
        graphql(context.authorization, query, (result) => {
            result.then((json) => {
                const products = json.data.site.products.edges;
                products.forEach(product => {
                    const productId = product.node.entityId;
                    const productOptions = product.node.productOptions.edges;

                    if (productOptions.length > 0) {
                        let variantHTML = '';
                        productOptions.forEach(option => {
                            // Render the swatches if enabled
                            if (option.node.displayStyle === 'Swatch' && context.themeSettings.show_swatches_on_grid) {
                                variantHTML += '<div>';
                                let swatchContent = '';
                                option.node.values.edges.map(variant => {
                                    if (variant.node.imageUrl !== null) {
                                        swatchContent += `<div class="form-option form-option-swatch"><span class='form-option-variant form-option-variant--pattern' title="${variant.node.label}" style="background-image: url('${variant.node.imageUrl})'"></span></div>`;
                                    } else if (variant.node.hexColors.length === 1) {
                                        swatchContent += `<div class="form-option form-option-swatch"><span class='form-option-variant form-option-variant--color' title="${variant.node.label}" style="background-color:${variant.node.hexColors}"></span></div>`;
                                    } else {
                                        swatchContent += '<div class="form-option form-option-swatch"><div class="form-option--multi">';
                                        variant.node.hexColors.forEach(color => {
                                            let swatchClass = '';
                                            if (variant.node.hexColors.length === 2) {
                                                swatchClass += 'color--duotone';
                                            } else {
                                                swatchClass += 'color--tritone';
                                            }
                                            swatchContent += `<span class='form-option-variant form-option-variant--color ${swatchClass}' title="${variant.node.label}" style="background-color:${color}"></span>`;
                                        });

                                        swatchContent += '</div></div>';
                                    }
                                    return swatchContent;
                                });
                                variantHTML += `${swatchContent}</div>`;
                            }

                            // Enable sizes if enabled
                            if (option.node.displayName === sizeName && context.themeSettings.show_sizes_on_grid) {
                                variantHTML += '<div>';
                                option.node.values.edges.forEach(variant => {
                                    variantHTML += `<div class="form-option"><span class='form-option-variant'>${variant.node.label}</span></div>`;
                                });
                                variantHTML += '</div>';
                            }
                        });

                        // add the swatch to the card, delete the data-id attribute so that it is not called again on infinite scroll
                        $(`[data-id="${productId}"]`).html(variantHTML).removeAttr('data-id');
                    }
                });
            });
        });
    }
    makeQuery();

    // Make call again if 100 products in array
    if (productIdList.length > 50) {
        productIdList.splice(0, 50);
        makeQuery();
    }
}
