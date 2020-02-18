const calculateEngravingPrice = function(message, pricePerWord) {
  let total = message.split(' ');
  console.log(total);
  console.log(`В строке ${total.length} слов`);
  let price = total.length * pricePerWord;
  console.log(`Общая стоимость гравировки: ${price}`);
};

// calculateEngravingPrice(
//   'Proin sociis natoque et magnis parturient montes mus',
//   10,
// );

  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// );

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// );
