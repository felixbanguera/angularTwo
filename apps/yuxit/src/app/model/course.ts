export class Course {
    constructor(public id: number, 
                public name: string = "Course name", 
                public starting_date: any, 
                public duration: number,
                public teacher: string){

    }
}
