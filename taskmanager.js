import Card from "./task.js"
export default class CardManager{
    constructor(master) {
    this.cardArr= JSON.parse(localStorage.getItem("mytasks")) || [];
    this.currentId = parseInt(localStorage.getItem('currentID'))|| 1;
    localStorage.setItem('currentID',this.currentId);
    this.master =master;
    }
        addcard(cname,description,assignee,dDate,st){
                const nCard=new Card(`nCard${this.currentId++}`,cname,description,assignee,dDate,st); //creates an instance of class card
                localStorage.setItem('currentID',this.currentId);
                let mynewtasks = JSON.parse(localStorage.getItem("mytasks")) || [];
                mynewtasks.push(nCard);
                localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
                this.cardArr.push(nCard);                                                               //pushing an items in form of cards in card array
                
        }
        
        updateTask(id,cname,description,assignee,dDate,st) {                                        //Function to update TASK
            let mynewtasks=JSON.parse(localStorage.getItem("mytasks"));
                for (let i=0; i<mynewtasks.length;i++) {
                    if(mynewtasks[i].id === id) {
                        mynewtasks[i].cname = cname;
                        mynewtasks[i].description = description;
                        mynewtasks[i].assignee = assignee; 
                        mynewtasks[i].dDate = dDate;
                        mynewtasks[i].st = st; 
                        localStorage.setItem("mytasks",JSON.stringify(mynewtasks));
                
                        this.cardArr[i].id == id;
                   
                        this.cardArr[i].cname = cname;
                        this.cardArr[i].description = description;
                        this.cardArr[i].assignee = assignee; 
                        this.cardArr[i].dDate = dDate;
                        this.cardArr[i].st = st;
                       
                        }
                }
            }
           
        deletFunc(id)
        {
            this.cardArr=this.cardArr.filter(m => m.id !== id);                       // filtering all tasks other than selected id which is passed throught function
            let mynewtasks=JSON.parse(localStorage.getItem("mytasks"));               // retrieving/reading tasks from localstorage 
            mynewtasks=mynewtasks.filter(m => m.id !== id);                           // filtering all tasks and saving it in mynewtasks
            localStorage.setItem("mytasks",JSON.stringify(mynewtasks));               //adds the remaining task cards to local storage and giving it name mytasks
        }    
                      
                             
        // displayListHtml(edifunc,delfunc){
              
        //         // alert("I am in display");
        //         this.master.innerHTML ="";
        //             for (let i=0 ; i< this.cardArr.length ; i++){
        //                 const nCard = new Card (this.cardArr[i].id,
        //                     this.cardArr[i].cname,
        //                     this.cardArr[i].description,
        //                     this.cardArr[i].assignee,
        //                     this.cardArr[i].dDate,
        //                     this.cardArr[i].st
        //                 );
        //             let taskElement = nCard.toElement(edifunc,delfunc);
        //             this.master.append(taskElement);
        //             }
        //     }  
        displayTask(){
            this.master.innerHTML ="";                                      //refreshing page content 
            let mynewtasks= JSON.parse(localStorage.getItem ("mytasks"));   
            this.cardArr= mynewtasks; 
            
            for (let i=0 ; i< mynewtasks.length ; i++){
                const nCard = new Card (mynewtasks[i].id,
                    mynewtasks[i].cname,
                    mynewtasks[i].description,
                    mynewtasks[i].assignee,
                    mynewtasks[i].dDate,
                    mynewtasks[i].st
                );
            let taskElement = nCard.toElement();
            this.master.append(taskElement);
        
                }
                
            } 
            
             


        }
                     