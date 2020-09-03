let workspacePlayground = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
    });
    
function myUpdateFunction(event) {
  
  let code = Blockly.JavaScript.workspaceToCode(workspacePlayground);
  document.getElementById('code').innerHTML = code
  
}

workspacePlayground.addChangeListener(myUpdateFunction);

// save blocks
function saveWorkspace() {
  
  let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  let domToPretty = Blockly.Xml.domToPrettyText(xml);
  window.localStorage.setItem("myProgram", domToPretty);
  
}

// restore blocks
function restoreWorkspace() {
  
  let program = window.localStorage.getItem("myProgram");
  Blockly.mainWorkspace.clear();
  
  let textToDom = Blockly.Xml.textToDom(program);
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, textToDom);
  
}

// delete blocks
function deleteWorkspace() {
  
  window.localStorage.clear();
  
}

// Variables
const variables = ['voltage', 'current', 'temperature']

variables.forEach((item) => {
  Blockly.getMainWorkspace().createVariable(item);  
});

console.log(Blockly.JavaScript)