
import { Component, OnInit } from '@angular/core';
import { Menu } from '../Services/menu.model';
import { MenuService } from '../Services/menu.services';


@Component({
  selector: 'app-menu-list',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenus.component.css']
})
export class ListMenuComponent implements OnInit {


    constructor(private service: MenuService) {

     }
    ngOnInit() {
      this.service.refreshList();
  }
  populateForm(emp: Menu) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteMenu(id).subscribe(res => {
        this.service.refreshList();
       // this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }


}
