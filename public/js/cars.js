"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var index = 3;

function formatCars(carsJSON) {
  var html = '<div class="row">'
  $.each(carsJSON, function(i, car) {
    html += '<div class="col-md-4 car"><h2>' + car.Make + '</h2><p><strong>Model:</strong> ' + car.Model + '</p><p><strong>Year:</strong> ' + car.Year + '</p></div>'
  });
  return html + '</div>';
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON));
}

function fetchJSON() {
  var url = baseUrl + index + '/3';
  index += 1
    $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data);
        }
      });
}
