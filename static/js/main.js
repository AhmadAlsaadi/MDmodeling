var offset_data;
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
				ev.preventDefault();
    			var offset;
    			offset = offset_data.split(',');
    			var dm = document.getElementById(offset[2]);
    			if(offset[2]=='AGMD' || offset[2]=='DCMD' || offset[2]=='VMD'){
    			var nodeCopy=dm.cloneNode(true);
    			nodeCopy.id=dm.id+1
    			nodeCopy.style.left = (ev.clientX + parseInt(offset[0],10)) + 'px';
    			nodeCopy.style.top = (ev.clientY + parseInt(offset[1],10)) + 'px';
    			ev.target.appendChild(nodeCopy);
    			}else{
    				dm.style.left = (ev.clientX + parseInt(offset[0],10)) + 'px';
    				dm.style.top = (ev.clientY + parseInt(offset[1],10)) + 'px';
    			}
    			ev.preventDefault();
    			return false;
				}	