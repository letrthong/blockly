// Calculate Power from Current and Voltage
Blockly.Blocks['power_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("power equals to");
    this.appendValueInput("current")
        .setCheck("Number")
        .appendField("current");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("by");
    this.appendValueInput("voltage")
        .setCheck("Number")
        .appendField("voltage");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(300);
 this.setTooltip("Calculate Power");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['power_type'] = function(block) {
  var value_current = Blockly.JavaScript.valueToCode(block, 'current', Blockly.JavaScript.ORDER_ATOMIC);
  var value_voltage = Blockly.JavaScript.valueToCode(block, 'voltage', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '';
  
  if (value_current && value_voltage) {
    code = `${value_current} * ${value_voltage}`;
  }
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};


// From Farenheit to Celsius conversion
Blockly.Blocks['f_to_c'] = {
  init: function() {
    this.appendValueInput("temperature")
        .setCheck("Number")
        .appendField("Farenheit");
    this.appendDummyInput()
        .appendField("to Celcius");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(360);
 this.setTooltip("Farenheit to Celsius Converter");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['f_to_c'] = function(block) {
  let value_temperature = Blockly.JavaScript.valueToCode(block, 'temperature', Blockly.JavaScript.ORDER_ATOMIC);
  let code = '';
  
  if (value_temperature) {
    code = `(${value_temperature} - 32) * (5/9)`;
  }
 
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 

