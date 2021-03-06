
    // Dentacoin contract address
    var DCNaddress = "0x2Debb13BCF5526e0cF5E3A4E5049100E3F7c2AE5"
    const contractAdr = "0x818Bddc18e0A5abAD2A58E95705e5CbBB3620048";
    // set web3 object
    var web3 = typeof window.web3 !== 'undefined' ? window.web3 : new Web3();

    // setup metamask provider
    if(typeof window.web3.currentProvider !== 'undefined')
        web3.setProvider(window.web3.currentProvider);
    else
        //web3.setProvider(new web3.providers.HttpProvider('http://159.203.28.215:8545'));
        web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));


    // hide all messages
    $("#newTokenResponse").hide();
    $("#transferTokenResponse").hide();
    $("#buyTokenResponse").hide();
    $("#sellTokenResponse").hide();
    //$("#checkBalanceResponse").hide();


    // setup token ABIs
    var tokenABI =[ { "constant": true, "inputs": [], "name": "sellPriceEth", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "buyDentacoinsAgainstEther", "outputs": [ { "name": "amount", "type": "uint256" } ], "payable": true, "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "Dentacoin" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newGasReserveInWei", "type": "uint256" } ], "name": "setGasReserve", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256", "value": "8000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newDCNAmount", "type": "uint256" } ], "name": "setDCNForGas", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "directTradeAllowed", "outputs": [ { "name": "", "type": "bool", "value": true } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "minBalanceForAccounts", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newBuyPriceEth", "type": "uint256" }, { "name": "newSellPriceEth", "type": "uint256" } ], "name": "setEtherPrices", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "buyPriceEth", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "amountOfEth", "type": "uint256" }, { "name": "dcn", "type": "uint256" } ], "name": "refundToOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newGasAmountInWei", "type": "uint256" } ], "name": "setGasForDCN", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "amount", "type": "uint256" } ], "name": "sellDentacoinsAgainstEther", "outputs": [ { "name": "revenue", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "haltDirectTrade", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x8196cd5fe0eec770de925be7a6d0fc79d06ef891" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "٨" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "success", "type": "bool" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "DentacoinAddress", "outputs": [ { "name": "", "type": "address", "value": "0x2debb13bcf5526e0cf5e3a4e5049100e3f7c2ae5" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "DCNForGas", "outputs": [ { "name": "", "type": "uint256", "value": "10" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "gasForDCN", "outputs": [ { "name": "", "type": "uint256", "value": "5000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "minimumBalanceInWei", "type": "uint256" } ], "name": "setMinBalance", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "remaining", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "unhaltDirectTrade", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "gasReserve", "outputs": [ { "name": "", "type": "uint256", "value": "1000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "Approval", "type": "event" } ];

    // setup contract ABIs
    const abi =
    [ { "constant": true, "inputs": [], "name": "count", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "bytes32" } ], "name": "hashedInviteSecret", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "secretCount", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "hashedInSecret", "outputs": [ { "name": "", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_arrayOfHashedSecrets", "type": "bytes8[]" } ], "name": "addSubmitSecrets", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_dentist", "type": "address" } ], "name": "setDentistOnWhitelist", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_content", "type": "bytes32" }, { "name": "_submitSecret", "type": "string" } ], "name": "submitReview", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "refundToOwner", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_dentist", "type": "address" } ], "name": "removeDentistFromWhitelist", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getContractBalance", "outputs": [ { "name": "balance", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getReviewCount", "outputs": [ { "name": "reviewCount", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "dcnAmount", "outputs": [ { "name": "", "type": "uint256", "value": "20" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "hashedSubmitSecrets", "outputs": [ { "name": "", "type": "bytes8", "value": "0x" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "dcnAmountTrusted", "outputs": [ { "name": "", "type": "uint256", "value": "100" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "getHashedSecrets", "outputs": [ { "name": "hashedSecrets", "type": "bytes8[]", "value": [] } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_secret", "type": "string" } ], "name": "setInviteSecret", "outputs": [ { "name": "result", "type": "bytes32" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x8196cd5fe0eec770de925be7a6d0fc79d06ef891" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "dentistWhitelist", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "tokenAddress", "outputs": [ { "name": "", "type": "address", "value": "0x2debb13bcf5526e0cf5e3a4e5049100e3f7c2ae5" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "reviewID", "outputs": [ { "name": "timeStamp", "type": "uint256", "value": "0" }, { "name": "writtenByAddress", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "content", "type": "bytes32", "value": "0x0000000000000000000000000000000000000000000000000000000000000000" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "untrustedAddress", "outputs": [ { "name": "", "type": "address", "value": "0x" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_dcnAmount", "type": "uint256" }, { "name": "_dcnAmountTrusted", "type": "uint256" } ], "name": "setDCNAmounts", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "trustedAddress", "outputs": [ { "name": "", "type": "address", "value": "0x" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [], "name": "transferRewards", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" } ], "name": "SubmitEvent", "type": "event" } ];



    // the selected account instance
//    var selectedAccount;

    // setup Token contract factory
    var Token = web3.eth.contract(tokenABI);


    // setup token instance
    var token = Token.at(DCNaddress);


    // setup review contract
    const Contract = web3.eth.contract(abi);
    // setup contract instance
    const contract = Contract.at(contractAdr);


    // setup transaction object
    var transactionObject = {
        from: web3.eth.accounts[0],
        gas: 200000
    };

    // auto get accounts
/*    web3.eth.getAccounts(function(error, accounts){
        console.log(accounts);

        selectedAccount = accounts[0];
        transactionObject.from = selectedAccount;
    });
*/



    var account = web3.eth.accounts[0];
    var accountInterval = setInterval(function() {

      //auto refresh account
      if (web3.eth.accounts[0] !== account) {
        account = web3.eth.accounts[0];
        transactionObject.from = account;
      }

      //auto refresh balance
      token.balanceOf(account, function(error, balance){
          return $("#checkBalanceResponse_body").html(String(balance.toString(10)) + " ٨");
      });

      // auto buy price refresh
      token.buyPriceEth(function(error, buypr){
          var res = "1 ETH = " + (1000000000000000000/buypr) + " DCN"
          return $("#_buyAmount").attr('placeholder', res)
      });
      // auto sell price refresh
      token.sellPriceEth(function(error, sellpr){
          var res = (1000000000000000000/sellpr) + " DCN = 1 ETH"
          return $("#_sellAmount").attr('placeholder', res)
      });
      // auto refresh address
      $("#myAddress").html(account);

    }, 1000);











//Rewards for reviews
$("#_transfer").click(function(dcn_address, user_id, review_content, submit_secret, invite_secret) {

      var dcn_address = "0x635c8CF5b944415b964B0451580857FE017F42dE";
      var user_id = 123;
      var review_content = "0x123";
      var submit_secret = "VjlFbAp2LGnibD95";
      var invite_secret = "";


        console.log("dcn_address "+dcn_address);
        console.log("user_id "+user_id);
        console.log("review_content "+review_content);
        console.log("submit_secret "+submit_secret);
        console.log("invite_secret "+invite_secret);


        var transactionObject = {
            from: account,
            gas: 200000
        };

        // submit function
        contract.submitReview(dcn_address, /*user_id,*/ review_content, submit_secret, /*invite_secret,*/ transactionObject, function(error, confirmed){
          if(error) {
              console.log(error);
              return error;
          }

          console.log(confirmed);
          return confirmed;

        });

      });
