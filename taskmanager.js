import Card from "./task.js"
export default class CardManager{
    constructor(master) {
    this.cardArr=[];
    this.currentId = 1;
    this.master =master;
    }
        addcard(cname,pic,description,assignee,dDate,st){
                let nCard=new Card(`nCard${this.currentId++}`,cname,pic,description,assignee,dDate,st); //creates an instance of class card
                this.cardArr.push(nCard);                                                               //pushing an items in form of cards in card array
            }

        updateTask(id,cname,pic,description,assignee,dDate,st) {                                        //Function to update TASK
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
                    break;
                    }
                    }
                }
        deletFunc(id)
        {
                for (let i=0 ; i<this.cardArr.length; i++)
                    {
                        if (this.cardArr[i].id == id ){
                        this.cardArr.splice(i,1);                               //An array (Array) containing the deleted elements.
                        break;
                        }
                    }
        
        }                     
        displayListHtml(edifunc,delfunc){
              
                // alert("I am in display");
                
                // alert(this.cardArr.nCard);
                this.master.innerHTML ="";
                let cardhtml;
                this.cardArr.forEach((nCard) => {
                    // alert(this.cardArr[0].description);
                let taskElement = nCard.toElement(edifunc,delfunc);
                this.master.append(taskElement);
            
                  });
                }
                
}                         