import { Component } from "@angular/core";

@Component({
    selector: 'list-student',
    templateUrl: './studentlist.component.html',
    styleUrls: ['./studentlist.component.css']
})
export class StudentListComponent {
    StudentList: Array<string>;
}
