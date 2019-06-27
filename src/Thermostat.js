'use strict';

var Thermostat = function() {
  this.MINIMUM_TEMPERATURE = 10;
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return;
  };
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()) {
    return;
  };
  this.temperature--;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn()) {
    return this.temperature === this.MAX_TEMP_PSM_ON;
  };
    return this.temperature == this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
 if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
   return 'low_usage';
 } else if (this.temperature < this.MAX_TEMP_PSM_ON) {
   return 'medium_usage';
 } else {
   return 'high_usage';
 }
};
