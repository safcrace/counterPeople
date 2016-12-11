/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 Vue.component('example', require('./components/Example.vue'));

 const app = new Vue({
     el: '#app'
 });


import Chart from 'chart.js'

var ctx = document.getElementById("myChart").getContext("2d");
var inMes = document.getElementById("tiempo").innerHTML;
var inCantidad = document.getElementById("cantidad").innerHTML;
var arr1, arr2 = [];
arr1 = inMes.split(',');
arr2 = inCantidad.split(',');
alert("Hola: " + arr1 + " - " + arr2);

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Entradas",
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1,
            data:   arr,
        },
        {
            label: "Salidas",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
            data: [50, 25, 40, 51, 46, 35, 60],
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data
  });

  var ctxs = document.getElementById("myChartSemanal").getContext("2d");


  var data = {
      labels: ["Semana1", "Semana2", "Semana3", "Semana4"],
      datasets: [
          {
              label: "Entradas",
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1,
              data: [48, 34, 55, 62],
          },
          {
              label: "Salidas",
              backgroundColor: [
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1,
              data: [51, 43, 40, 47],
          }
      ]
  };

  var myBarChartSemanal = new Chart(ctxs, {
      type: 'bar',
      data: data
    });

  var ctxd = document.getElementById("myChartDiario").getContext("2d");


  var data = {
      labels: ["Lun", "Mar", "Mie", "Jue", "Vie"],
      datasets: [
          {
              label: "Entradas",
              backgroundColor: [
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(153, 102, 255, 0.2)'
              ],
              borderColor: [
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1,
              data: [25, 20, 36, 20, 18],
          },
          {
              label: "Salidas",
              backgroundColor: [
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [18, 25, 35, 17, 37],
          }
      ]
  };

  var myBarChartDiario = new Chart(ctxd, {
      type: 'bar',
      data: data
    });
