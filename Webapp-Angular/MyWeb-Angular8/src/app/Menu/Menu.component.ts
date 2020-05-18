import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuService } from '../Services/menu.services';

@Component({
  selector: 'app-menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private service: MenuService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ID : 0,
      Name: '',
      MenuLevel: '',
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.ID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postMenu(form.value).subscribe(res => {
      //this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putMenu(form.value).subscribe(res => {
      //this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
 }
}
