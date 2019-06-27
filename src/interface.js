$(document).ready(function() {
  $.get(<API KEY>, function(data) {
    $("#current-temperature").text(data.main.temp);
  })
  var thermostat = new Thermostat();
  $('#current-thermostat-temp').text(thermostat.temperature);
  $('#temp-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function(){
    thermostat.down();
    updateTemperature();
    });

  $('#reset-temp').on('click', function(){
      thermostat.resetTemperature();
      updateTemperature();
    });

  $('#psm-on').on('click', function(){
      thermostat.switchPowerSavingModeOn();
    $('#psm-status').text('On');
      });

  $('#psm-off').on('click', function(){
    thermostat.switchPowerSavingModeOff();
    $('#psm-status').text('Off');
      });

    function updateTemperature() {
    $('#current-thermostat-temp').text(thermostat.temperature);
    $('#current-thermostat-temp').attr('class', thermostat.energyUsage());
    }
  });
