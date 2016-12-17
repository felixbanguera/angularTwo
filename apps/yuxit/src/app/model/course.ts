export class Course {
    constructor(public id: number, 
                public name: string = "Course name", 
                public starting_date: string, 
                public duration: number,
                public teacher: string){

    }
}
