console.log("let's build some charts!")


// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'bar', 'timeline']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawDonationChart);
      google.charts.setOnLoadCallback(drawStudyBar);

      google.charts.setOnLoadCallback(drawChart1);      
      google.charts.setOnLoadCallback(drawChart2);

function drawDonationChart() {
  var data = google.visualization.arrayToDataTable([
          ['Category', 'Expenditure'],
          ['Administrative costs',     4],
          ['Fundraising',      16],
          ['Youth Programs',  36],
          ['Adult Programs', 44]
        ]);

        var options = {
          title: 'My Daily Activities',
          pieHole: 0.2,
          slices: [
            {color: '#8AD1C2'},
            {color: '#9F8AD1'},
            {color: '#D18A99'},
            {color: '#BCD18A'}
          ],
          fontSize: 24,
          height: 800,
          width: 800,
          legend: 'top'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donation-chart'));

        chart.draw(data, options);
      }   

function showTimelineChart(){
  drawStudyTimeline()
}

function drawStudyTimeline(){
  var container = document.getElementById('study-timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Phase of Study' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'General Ed', new Date(2018, 8, 1), new Date(2019, 5, 1) ],
          [ 'Choose Major', new Date(2019, 5, 1),  new Date(2019, 7, 1) ],
          [ 'Adams',      new Date(2019, 8, 1),  new Date(2020, 4, 1) ],
          [ 'Jefferson',  new Date(2020, 5, 1),  new Date(2022, 4, 1) ]]);

        chart.draw(dataTable);
      }

function drawStudyBar() {
  
}


      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart1() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
          ['Toppings', 'Slices'],
          ['Mushrooms', 2],
          ['Onions', 4],
          ['Olives', 1],
          ['Corn', 1]
        ]);

        // Set chart options
        var options ={ chart: {
            title: 'Kinds of pizza I ate last night',
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.charts.Bar(document.getElementById('chart_div1'));
        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart2() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 2],
          ['Onions', 4],
          ['Olives', 1],
          ['Corn', 1]
        ]);

        // Set chart options
        var options = {'title':'What kinds of pizza I ate last night',
                       'width':400,
                       'height':300,
                       'legend':'left',
                       'is3D':true
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
        chart.draw(data, options);
      }