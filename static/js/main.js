var offset_data;
var counter;
function processInfo(data){
    processData=data;
}
function MTCoption(mtcValue){
				if(mtcValue=="Calculated"){
				document.getElementById("MTCvalue").style.visibility="hidden";
				document.getElementById('PoreSize').disabled=false;
				document.getElementById('Porosity').disabled=false;
				}else{
				document.getElementById("MTCvalue").style.visibility="visible";
				document.getElementById('PoreSize').disabled=true;
				document.getElementById('Porosity').disabled=true;
					}
				}			
function startDrag(ev) {
    			var style = window.getComputedStyle(ev.target, null);
    			offset_data = (parseInt(style.getPropertyValue("left"),10) - ev.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - ev.clientY+','+ev.target.id);
   				ev.dataTransfer.setData("text/plain",offset_data);
				}
function dragover(ev) {
				ev.preventDefault(); 
    			return false;
    			}
function dropped(ev) {
                var processSet = new Set(processData.processType);
			ev.preventDefault();
    			var offset;
    			offset = offset_data.split(',');
    			var dm = document.getElementById(offset[2]);
    			if(processSet.has(offset[2])){
                                    processData.processCounter[offset[2]]+=1;
    			var nodeCopy=dm.cloneNode(true);
    			nodeCopy.id=dm.id+'-'+ processData.processCounter[offset[2]]
                                    processData.processParameters[nodeCopy.id]=processData.processParameters[dm.id];
                                    console.log(processData);
                                    nodeCopy.value=dm.id+'-'+ processData.processCounter[offset[2]]
    			nodeCopy.style.left = (ev.clientX + parseInt(offset[0],10)) + 'px';
    			nodeCopy.style.top = (ev.clientY + parseInt(offset[1],10)) + 'px';
                                    nodeCopy.setAttribute("onclick","parameters(this.id)");
    			ev.target.appendChild(nodeCopy);
    			}else{
    				dm.style.left = (ev.clientX + parseInt(offset[0],10)) + 'px';
    				dm.style.top = (ev.clientY + parseInt(offset[1],10)) + 'px';
    			}
    			ev.preventDefault();
    			return false;
				}

function parameters(processId) {
                        var dialog = document.getElementById('parameters');
                        processId.onclick = dialog.show();
                        document.getElementById("defaultOpen").click( );
                        processId.onclick=function(){
                            dialog.show();   
                        }
                  
                        document.getElementById('exit').onclick = function() {
                        dialog.close();
                             };
                         };
function showTab(ev, parameter) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(parameter).style.display = "block";
    ev.currentTarget.className += " active";

}

