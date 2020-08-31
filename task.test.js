// const { default: Card } = require("./task")

import Card from "./task.js"

test ("Card constructor",() => {
    const task=new Card("1","groceries","newgroceries","Saba","27-08-2020","to do");
    expect (task.id).toBe("1");
    expect (task.cname).toBe("groceries");
    expect (task.description).toBe("newgroceries");
    expect (task.assignee).toBe("Saba");
    expect (task.dDate).toBe("27-08-2020");
    expect (task.st).toBe("to do");
})