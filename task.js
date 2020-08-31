export default class Card {
    constructor(id,cname,pic,description,assignee,dDate,st)
    {
    this.id = id ;
    this.cname  = cname ;
    this.pic  = pic   ;
    this.description=description;
    this.assignee = assignee;
    this.dDate=dDate;
    this.st=st;
   
    }
    htmlString() {
        let html="";
                html = `<div id ="cList_${this.id}" class="card">
                        <h1>${this.cname}</h1>
                        <img src="sample.jpg" alt="Denim Jeans" style="width:100%">
                        <p>${this.description}</p>
                        <p>${this.assignee}</p>
                        <p>${this.dDate}</p>
                        <p>${this.st}</p>
                        <p>${this.id}</p>
                        <p><button class="delete btn btn-primary" id="dbutton_${this.id}"> Delete</button></p>
                        <p><button class="Edit btn btn-primary" id="ebutton_${this.id}"> Edit</button></p>
                        </div>`;  
                      return html;
     }
     toElement(edifunc,delfunc) {
        let htmlElement = this.htmlString(); //assigning function to var
        let element = document.createRange().createContextualFragment(htmlElement);
        element.querySelector("button.Edit").addEventListener("click", edifunc);
        element.querySelector("button.delete").addEventListener("click", delfunc);
        return element;
    }

}
