import Card from "./task.js"
export default class CardManager{
    constructor(master) {
    this.cardArr=[];
    this.currentId = 1;
    this.master =master;
    }
        addcard(cname,description,assignee,dDate,st){
                let nCard=new Card(`nCard${this.currentId++}`,cname,description,assignee,dDate,st); //creates an instance of class card
                this.cardArr.push(nCard);                                                               //pushing an items in form of cards in card array
                this.sendLocalStorage(nCard);
        }
        sendLocalStorage(nCard){
                localStorage.setItem('currentId',this.currentId);
                let mynewtasks = JSON.parse(localStorage.getItem('mytasks')) || [];
                mynewtasks.push(nCard);
                localStorage.setItem('mytasks',JSON.stringify(mynewtasks));
            }

        updateTask(id,cname,description,assignee,dDate,st) {                                        //Function to update TASK
                // alert("I am in update function");
                // alert(id);
                for (let i=0; i<this.cardArr.length;i++) {
                    
                    if(this.cardArr[i].id == id) {
                    // alert(" im in update condition");
                    this.cardArr[i].cname = cname;
                    this.cardArr[i].description = description;
                    this.cardArr[i].assignee = assignee; 
                    this.cardArr[i].dDate = dDate;
                    this.cardArr[i].st = st;
                    this.sendUpdateLstorage (id,cname,description,assignee,dDate,st);
                    }
                }
            }
            sendUpdateLstorage (id,cname,description,assignee,dDate,st)
            {
                    let mynewtasks= JSON.parse(localStorage.getItem("mytasks"));
                    for (let i=0; i<mynewtasks.length;i++) {
                        if(mynewtasks[i].id == id) {
                        mynewtasks[i].cname = cname;
                        mynewtasks[i].description = description;
                        mynewtasks[i].assignee = assignee; 
                        mynewtasks[i].dDate = dDate;
                        mynewtasks[i].st = st;
                        localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
                
                    }
                }
            }
        deletFunc(id)
        {
                for (let i=0 ; i<this.cardArr.length; i++)
                    {
                        if (this.cardArr[i].id == id ){
                        this.cardArr.splice(i,1);                               //An array (Array) containing the deleted elements.
                        this.delLocalstorage(id);
                    }
                }
            }           delLocalstorage(id){
                                                        
                        let mynewtasks= JSON.parse(localStorage.getItem("mytasks"));
                        for (let i=0 ; i<mynewtasks.length; i++)
                        {
                        if (mynewtasks[i].id == id ){
                        mynewtasks.splice(i,1); 
                        localStorage.setItem('mytasks',JSON.stringify(mynewtasks));      
                        }
                        
                    }
                 }
                             
        displayListHtml(edifunc,delfunc){
              
                // alert("I am in display");
                this.master.innerHTML ="";
                    for (let i=0 ; i< this.cardArr.length ; i++){
                        const nCard = new Card (this.cardArr[i].id,
                            this.cardArr[i].cname,
                            this.cardArr[i].description,
                            this.cardArr[i].assignee,
                            this.cardArr[i].dDate,
                            this.cardArr[i].st
                        );
                    let taskElement = nCard.toElement(edifunc,delfunc);
                    this.master.append(taskElement);
                    }
            }  
            
            displayFromstorage(edifunc,delfunc)
            {       this.master.diplayHTML ="";
                   let mynewtasks= JSON.parse(localStorage.getItem("mytasks")) ;
                  
                  if (mynewtasks){
                   for (let i=0 ; i< mynewtasks.length ; i++){
                       const nCard = new Card (mynewtasks[i].id,
                           mynewtasks[i].cname,
                           mynewtasks[i].description,
                           mynewtasks[i].assignee,
                           mynewtasks[i].dDate,
                           mynewtasks[i].st
                       );
                       let taskElement = nCard.toElement(edifunc,delfunc);
                       this.master.append(taskElement);
                     }
                   }
               }
             


        }
                     