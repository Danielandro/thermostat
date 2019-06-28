$(document).ready(function() {
  // grab weather data
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY&units=metric', function(data) {
    $("#current-temperature").text(data.main.temp);
  })

  // create thermostat
  var thermostat = new Thermostat();

  // temp on page === default temp
  $('#current-thermostat-temp').text(thermostat.temperature);

  // increase temp button
  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  // decrease temp button
  $('#temp-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  // reset temp button
  $('#reset-temp').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  // power saving mode ON button
  $('#psm-on').on('click', function(){
    thermostat.switchPowerSavingModeOn();
    $('#psm-status').text('On');
  });

  // power saving mode OFF button
  $('#psm-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#psm-status').text('Off');
  });

  // update thermostat temp on page + change color based on energy usage
  function updateTemperature() {
    $('#current-thermostat-temp').text(thermostat.temperature);
    $('#current-thermostat-temp').attr('class', thermostat.energyUsage());
  };
});
