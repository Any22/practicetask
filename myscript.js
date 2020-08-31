
 import CardManager from "./taskmanager.js"               
        let taskcontainer = document.querySelector("#taskcontainer"); 
        let cardDeck=new CardManager(taskcontainer);                    //create an instance of card manager to access the members
         
        //adding tasks
        let tname    = document.querySelector("#text1");                //accepting user input from form
        let tdes     = document.querySelector("#des");   
        let assignee = document.querySelector("#assignee");
        let dDate = document.querySelector("#dDate");
        let sTatus = document.querySelector("#sTatus");
         // validation
         let nmErrMsg = document.querySelector("#nmErrMsg"); 
         let nmErrMsg1 = document.querySelector("#nmErrMsg1");
         let nmErrMsg2 = document.querySelector("#nmErrMsg2");
         let nmErrMsg3 = document.querySelector("#nmErrMsg3");
 


        let addButton=document.querySelector("#addButton");
        addButton.onclick= function(){
            let validStatus ;
      
            if ( tname.value == "" || tname.value.length < 5)
               {   
                  
                  nmErrMsg.innerHTML="*Please ,fill this field with atleast 8 characters";
                  nmErrMsg.style.color="red";
                  tname.style.borderColor = "red";
                     tname.focus();
                  validStatus = false;
                  // break;
               } else 
               {
                 
                  validStatus = true;
                  
               }
         
            if (tdes.value == "" || tdes.value.length < 10)                               
               
               { 
                  nmErrMsg1.innerHTML="*Please ,fill this field with atleast 15 characters";
                  nmErrMsg1.style.color="red";
                  tdes.style.borderColor = "red"; 
                  tdes.focus(); 
                  validStatus= false; 
                  //  break;
               } else 
               {
                  
                  tdes.style.borderColor = "green";
                  nmErrMsg1.innerHTML="looks good";
                  nmErrMsg1.style.color="green";
                  validStatus = true;
               }
             
            if (assignee.value == "" || assignee.value.length < 5)                               
               
                 { 
                  nmErrMsg2.innerHTML="*Please ,fill this field with atleast 8 characsters";
                  nmErrMsg2.style.color="red";
                  assignee.style.borderColor = "red"; 
                  assignee.focus(); 
                  validStatus= false; 
                  //  break;
                 } 
                 else 
                 {
                        
                    assignee.style.borderColor = "green";
                    nmErrMsg2.innerHTML="looks good";
                    nmErrMsg2.style.color="green";
                    validStatus = true;
                 }
                 if (validStatus==true)
                 {
                    nmErrMsg.innerHTML="looks good";
                    nmErrMsg.style.color="green";
                    tname.style.borderColor = "green";
                    //code before the pause
                    cardDeck.addcard(tname.value,"test",tdes.value,assignee.value,dDate.value,sTatus.value);
                    cardDeck.displayListHtml(edifunc,delfunc);
                   setTimeout(function(){
                    $("#myModal").modal("hide");
                    resetFields();
                 }, 900);
                    
                   
                 }else 
                 {
                   alert("Please, fill the mandatory fields");
                 }
           
              
           }

        // cardDeck.addcard(tname.value,"test",tdes.value,assignee.value,dDate.value,sTatus.value);
        // cardDeck.displayListHtml(edifunc,delfunc);
        // $('#myModal').modal('hide');
        //      resetFields();
        // }
        
         
    function resetFields(){
        
        tname.value     = null;
        tdes.value      = null;
        assignee.value  = null;
        dDate.value     = null;
        sTatus.value    = null;
        nmErrMsg.innerHTML="";
        nmErrMsg1.innerHTML="";
        nmErrMsg2.innerHTML="";
        tname.style.borderColor = "lightgrey";
        tdes.style.borderColor = "lightgrey"; 
        assignee.style.borderColor = "lightgrey"; 
    }


        function edifunc(){
            // alert("i am in editfun");
            let taskElement = event.target.closest(".Edit");                       
            let edtIdArr = taskElement.id.split("_");                               //spliting the id by underscore. i.e . dbuton_id 
            let retreiveId = edtIdArr[1];
            alert(retreiveId);
            
            for (let i=0; i<cardDeck.cardArr.length ; i++){
                if (retreiveId == cardDeck.cardArr[i].id) {
                document.querySelector("#tId").value    =cardDeck.cardArr[i].id;
                document.querySelector("#ename").value    = cardDeck.cardArr[i].cname ; 
                document.querySelector("#edes").value      = cardDeck.cardArr[i].description;  
                document.querySelector("#eAssignee").value = cardDeck.cardArr[i].assignee;  
                document.querySelector("#edDate").value   = cardDeck.cardArr[i].dDate;  
                document.querySelector("#estAtus").value  = cardDeck.cardArr[i].st;  
                break;
                }    
            }
            $('#ediTModal').modal('show');
        }
        
        let upDateButton = document.querySelector("#upDateButton");
        
        upDateButton.onclick = function() {
         
         let tempId = document.querySelector("#tId").value; 
        
         let tempname = document.querySelector("#ename").value; //accepting user input from form
         let tempdesc = document.querySelector("#edes").value;   
         let tempassign = document.querySelector("#eAssignee").value; 
         let tempdueDate = document.querySelector("#edDate").value;
         let tempstatus = document.querySelector("#esTatus").value;
         
        
         cardDeck.updateTask(tempId, tempname,"test" ,tempdesc, tempassign, tempdueDate, tempstatus);
        //  remove edifunc
         cardDeck.displayListHtml(edifunc,delfunc);
        
         $('#ediTModal').modal('hide');
      }
    
    
       function delfunc(){
        //  alert("i am in delete function");
        let taskElement = event.target.closest(".delete");                      //see line 74.
        let delIdArr = taskElement.id.split("_");                               //spliting the id by underscore. i.e . dbuton_id 
        let retreiveId = delIdArr[1];
        alert(retreiveId);
        cardDeck.deletFunc(retreiveId);
        //remove defunc
        cardDeck.displayListHtml(edifunc,delfunc);
        }
    
    


    
    
        


       
        

