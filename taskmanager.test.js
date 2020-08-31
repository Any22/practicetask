    import CardManager from "./taskmanager.js"
    import path from "path";
    import fs from "fs";
     
    
    const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
    beforeEach(()=>{                                                                    // sets up the DOM
    document.documentElement.innerHTML = html.toString();
});
    

    // Testing add function here
    test("object exists",() => {
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard ("shopping","test","gotocoles","Saba","03-09-2020","to do");
        expect (testTm.cardArr.length).toBe(1);  
    });

    //Testing display 
    test("HTML element is added to page ",() => {
        let taskcontainer = document.querySelector("#taskcontainer");
        const testTm= new CardManager(taskcontainer);
        testTm.addcard ("shopping","test","gotocoles","Saba","03-09-2020","to do");
        testTm.displayListHtml();
        // console.log(taskcontainer.innerHTML);
        expect(taskcontainer.children.length).toBe(1);
    
});


    test("adding values correctly",() => {
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard ("shopping","test","gotocoles","Saba","03-09-2020","to do");
        expect (testTm.cardArr[0].cname).toBe("shopping");
        expect (testTm.cardArr[0].description).toBe("gotocoles");
        
        
    });

    //Testing update function here
    test("card id should matches the task to update", () => {
        let id;
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.updateTask ("nCard1","carwash","test","gotocarwash","Saee","04-09-2020","to do");
        expect(testTm.cardArr.id).toEqual(id);
    });

    test("checking for updated values", () => {
    
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard("nCard1","Grocery","test","gotoWoolies","Saba","02-09-2020","to do later");
        testTm.updateTask ("nCard1","carwash","test","gotocarwash","Saeed","02-09-2020","to do");
        expect (testTm.cardArr[0].id).toBe("nCard1");
        expect (testTm.cardArr[0].cname).toBe("carwash");
        expect (testTm.cardArr[0].description).toBe("gotocarwash");
        expect (testTm.cardArr[0].assignee).toBe("Saeed");
        expect (testTm.cardArr[0].st).toBe("to do");
    });


    //Testing deletefunction here
    test("card id should matches the task to delete", () => {
        let id;
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.deletFunc ("nCard1");
        expect(testTm.cardArr.id).toEqual(id);                          //checking here exact or deep equality 
        });


    test("after deletion the array lenght should be reduced by one", () => {
        const testTm= new CardManager();
        testTm.cardArr=[];
        testTm.addcard("nCard1","Grocery","test","gotoWoolies","Saba","02-09-2020","to do later");
        testTm.addcard("nCard2","CarWash","test","gotoShell","Saeed","02-09-2020","to do");
        testTm.deletFunc ("nCard1");
        expect(testTm.cardArr.length).toBe(1);
    });
