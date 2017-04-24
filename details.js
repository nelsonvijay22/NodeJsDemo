var storage = require('node-persist');
storage.initSync();
storage.setItemSync('accounts',[{
usernme:'Asreet',
balance:100

},
{
usernme:'Admin',
balance:120

}
]);

var accounts = storage.getItemSync('accounts');
//push on a new accounts
accounts.push({

    usernme:'Jen',
    balance:75
});

//save using setItemSync
storage.setItemSync('accounts',accounts);
console.log(accounts);
