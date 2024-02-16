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
  ['Date', 'Follower Count'],
  [1,176],[2,178],[3,182],[4,184],[5,192],
  [6,192],[7,193],[8,194],
  [9,194],[10,195],[11,197]
]);

// Set Options
const options = {
  hAxis: {title: 'Date'},
  vAxis: {title: 'Follower Count'},
  legend: 'none'
};

// Draw
const chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}
