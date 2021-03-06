// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:
const Employee = require("./Employee")
class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return  this.github
    }

}

module.exports = Engineer

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')