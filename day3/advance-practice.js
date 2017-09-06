var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(input){

var total =  0;
 for(var i = 0;i < input.length;i++) {
   if(isNaN(input[i])){
    continue;
   }
   total += Number(input[i]);
 }
 return total;
}

function calculateSalesTax(salesData, taxRates) {
 var object = {};
 for (i in salesData){

   var myCompany = companySalesData[i].name;
   var mySum = sum(companySalesData[i].sales);
   var myTax = sum(companySalesData[i].sales) * salesTaxRates[companySalesData[i].province];
   var myProvince = companySalesData[i].province;

    if (object[myCompany]) {
      object[myCompany].totalSales += mySum;
      object[myCompany].totalTaxes += myTax;
    } else {
      object[myCompany] = {totalSales: mySum, totalTaxes: myTax};
    }
  }
    return object;
}




var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/