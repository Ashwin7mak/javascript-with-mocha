const app = {};

app.getChange = function(amount, totalPaid) {
    let coins = [100, 50, 20, 10];
    let result = [];
    let remainder = totalPaid - amount;

    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];

        if (remainder / coin >= 1) {
            let num = Math.floor(remainder / coin);

            for (let j = 0; j < num; j++) {
                result.push(coin);
                remainder = remainder - coin;
            }
        }
    }
    return result;
}

module.exports = app;