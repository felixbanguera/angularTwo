import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let courses = [
            { id: 1, name: 'Angular 2', duration: 15, teacherId: 1 },
            { id: 2, name: 'Rails ', duration: 20, teacherId: 2 },
            { id: 3, name: 'TDD', duration: 30, teacherId: 3 }
        ];

        let teachers = [
            { id: 1, name: 'Bruce', last_name: "Banner" },
            { id: 2, name: 'Clark ', last_name: "Kent"  },
            { id: 3, name: 'Jhon', last_name: "Smith"  }
        ];

        return { courses, teachers };
    }
} 