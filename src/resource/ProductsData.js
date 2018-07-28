
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
     return response.json();
    //  return data;
}

export async function getProducts() {
   return await getDatafromService().then(data => {
        return data['products'];
    });
}
export async function getCategories() {
    return await getDatafromService().then(data => {
         return data['categories'];
     });
 }
 export async function getBrands() {
    return await getDatafromService().then(data => {
         return data['brands'];
     });
 }
 export async function getPriceRanges() {
    return await getDatafromService().then(data => {
         return data['priceRanges'];
     });
 }
 export async function getSellers() {
    return await getDatafromService().then(data => {
         return data['sellers'];
     });
 }
 export async function getTotalProducts() {
    return await getDatafromService().then(data => {
         return data['numberOfProducts'];
     });
 }

export default getProducts;