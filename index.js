// import readline module
const readline = require('readline');

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = '';

// question user to enter name
console.log('\nWelcome to Glocommerce');
console.log('\nCategories : ');
console.log('\n1. Clothing.');
console.log('2. Fruits.');
const category = [
  ['ankara skirt', 'gucci jogger'],
  ['mango', 'apple'],
];

const price = [
  ['1000', '2000'],
  ['4000', '1000'],
];

const shippingFee = 200;

rl.question(
  '\nPlease choose your shopping category (enter 1 or 2) :',
  function (userinput) {
    let userInput = !isNaN(userinput) ? userinput - 1 : null;
    if (userInput == null) {
      console.log('\nIncorrect input please try again');
      rl.close();
      return;
    }

    let selectedCategory = [];
    if (userInput == '0') {
      console.log('\nCongratulation you chose Clothing category ');
    } else if (userInput == '1') {
      console.log('\nCongratulation you chose Fruits category ');
    }

    selectedCategory = category[userInput];
    for (let i = 0; i < selectedCategory.length; i++) {
      const element = selectedCategory[i];
      console.log(`${i + 1}. ${element} for $${price[userInput][i]} each`);
    }
    rl.question(
      '\nChoose from the sub category (enter 1 or 2) : ',
      function (subcat) {
        let subCat = !isNaN(subcat) ? subcat - 1 : null;
        if (subCat == null) {
          console.log('\nIncorrect input please try again');
          rl.close();
          return;
        }
        if (subCat == '0') {
          console.log(
            `\nCongratulation you chose ${category[userInput][subCat]} `
          );
        } else if (subCat == '1') {
          console.log(
            `\nCongratulation you chose ${category[userInput][subCat]} `
          );
        }

        rl.question(
          `\nEnter Quantity Of ${category[userInput][subCat]} You want to purchase: `,
          function (quantity) {
            if (isNaN(quantity)) {
              console.log('\nIncorrect input please try again');
              rl.close();
              return;
            }
            console.log(
              `\n Congratulations you have requested ${quantity} pieces of ${category[userInput][subCat]}`
            );

            console.log(' Product Details');
            console.log(`\ Product Name : ${category[userInput][subCat]} `);
            console.log(`\ Product Quantity : ${quantity}`);
            const total = price[userInput][subCat] * quantity;
            console.log(`\ Total Cost : $${total}`);

            rl.question(
              `\nClick Enter to pay now or Ctrl C to cancel the transaction: `,
              function (pay) {
                console.log(
                  `\n Congratulations your payment of $${total} for ${quantity} ${category[userInput][subCat]} was successful`
                );
                rl.close();

              }
            );
          }
        );
      }
    );

  }
);
