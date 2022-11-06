class student {
    constructor(name,age,marks) {
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPackageAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {

            console.log('inside egligibleForCurrentCompany',this)
            if(this.marks > minmarks && this.age > minPlacementAge) { 
                console.log(this.name + "is ready for placement")
            } else {
                console.log(this.name + "is not ready for placement")
            }
        }
    }
}

const mini = new student('mini' 25,75);
const rimi = new student('rimi',13,45);

mini.setPackageAge(18)(40);