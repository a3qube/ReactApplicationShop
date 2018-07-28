let allData = null;
async function getDatafromService() {
    const url = "https://api.shop.com/AffiliatePublisherNetwork/v1/products";
    var queryParams = '?' +  encodeURIComponent('publisherID')
    + '=' + encodeURIComponent('TEST')
    + '&' +  encodeURIComponent('locale')
    + '=' + encodeURIComponent('en_US')+ '&'
    +  encodeURIComponent('perPage') + '='
    + encodeURIComponent('15')+ '&'
    +  encodeURIComponent('apikey') + '='
    + encodeURIComponent('l7xxb1c218d3bba746a5b2cc2a87ef4c6653');
     const response = await fetch(url + queryParams);
     const data = await response.json();
     allData = data;
     return data;
}

function specificData(property) {
    return getDatafromService().then( data => data[property]);
}
export function getProducts() {
   return specificData('products');
}
export function getCategories() {
   return specificData('categories');
 }
 export async function getBrands() {
   return specificData('brands');
 }
 export async function getPriceRanges() {
   return specificData('priceRanges');
 }
 export async function getSellers() {
   return specificData('sellers');
 }
 export async function getTotalProducts() {
   return specificData('numberOfProducts');
 }

 export function getProductDetails(id){
    return allData.products.find(p => p.id === +id);
 }
export default getProducts;