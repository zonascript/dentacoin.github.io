
    // Fixed amount of ever existing Dentacoins
          var xhr = new XMLHttpRequest();
          xhr.open("GET", "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr.send();

    // Dentacoins of owner
          var xhr2 = new XMLHttpRequest();
          xhr2.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0xd560Be7E053f6bDB113C2814Faa339e29f4a385f&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr2.send();

    // Dentacoins of contract
          var xhr3 = new XMLHttpRequest();
          xhr3.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr3.send();

    // Dentacoins of ICO account
          var xhr4 = new XMLHttpRequest();
          xhr4.open("GET", "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6&address=0x0ef583f8D4FA7d26eb746e70Ac88b14C3cc77482&tag=latest&apikey=NBI9SGSW6P1NZQGYT8BD8DDN5UQ7AIM4E9", false);
          xhr4.send();


          var totalAmount = parseInt(JSON.parse(xhr.responseText).result);
          var ownerAmount = parseInt(JSON.parse(xhr2.responseText).result);
          var contractAmount = parseInt(JSON.parse(xhr3.responseText).result);
          var icoAmount = parseInt(JSON.parse(xhr4.responseText).result);

          var presale = contractAmount;
          var ico = icoAmount;
          var distByValue = ownerAmount;
          var lockedAmount = 0;
          var team = totalAmount - (presale + ico + distByValue);






  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Distribution By Value', lockedAmount],
      ['Distribution By Value', distByValue],
      ['Foundation', team],
      ['Presale', presale],
      ['ICO', ico]
    ]);

    // Set chart options
    var options = {
                  //'title':'DCN DISTRIBUTION',
                    'legend':'none',
                    'pieSliceText': 'label',
                   'width':500,
                   'height':500,
                   'is3D': false,
                   'pieHole': 0.2,
                   'slices': {  3: {offset: 0.3}},
                   'pieStartAngle': 100,
                   'colors': ['#126585', '#8D2F47', '#3366CC','#FF9900'],
                   'backgroundColor': '#F9F9F9'
                 };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
