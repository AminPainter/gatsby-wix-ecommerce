import { media } from '@wix/sdk';

import apiHandler from './api-handler';

export const isProductInCart = (cart, productId, variantId) =>
  cart?.lineItems.find(cartItem => {
    if (cartItem.catalogReference.options)
      return cartItem.catalogReference.options.variantId === variantId;

    return cartItem.catalogReference.catalogItemId === productId;
  });

export const getImageFromWixMedia = wixMedia => {
  const { url } = media.getImageUrl(wixMedia);
  return url;
};

export const handleProductShare = apiHandler(async slug => {
  await navigator.share({
    url: `${window.location.protocol}//${window.location.host}/products/${slug}`,
  });
});

export const compareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) if (obj1[key] !== obj2[key]) return false;

  return true;
};

export const getVariantIdBySelectedChoices = (allVariants, selectedChoices) => {
  const selectedVariant = allVariants.find(variant =>
    compareObjects(variant.choices, selectedChoices)
  );
  return selectedVariant?._id;
};
