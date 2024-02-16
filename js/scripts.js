// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [50,7],[60,8],[70,8],[80,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15]
]);

// Set Options
const options = {
  hAxis: {title: 'Square Meters'},
  vAxis: {title: 'Price in Millions'},
  legend: 'none'
};

// Draw
const chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}
