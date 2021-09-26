import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  editData: any = {};

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
    })
    let localData = JSON.parse(<string>localStorage.getItem('data'));
    this.route.paramMap.subscribe(id => {
      this.editData = localData.find((r: any) => r.id == id.get('id'))
    })
  }

  get f() {
    return this.addForm.controls;
  }


  ngOnInit() {
    if (this.editData) {
      this.f.name.setValue(this.editData.name);
      this.f.description.setValue(this.editData.description);
      this.f.price.setValue(this.editData.price);
    }
  }

  onSubmit() {
    let localData = JSON.parse(<string>localStorage.getItem('data'));
    const id = localData.length + 1;
    this.submitted = true;
    if (this.addForm.valid) {
      if (this.editData) {
        localData.map((re: any) => {
          if (re.id === this.editData.id) {
            re.name = this.f.name.value
            re.description = this.f.description.value;
            re.price = this.f.price.value;
          }
        })
      } else {
        localData.push({
          id: this.editData ? this.editData.id : id,
          name: this.f.name.value,
          description: this.f.description.value,
          price: this.f.price.value,
        });
      }
      localStorage.setItem('data', JSON.stringify(localData));
      this.router.navigate(['/'])
    }
  }

  getErrorMessage() {
    if (this.f.price.hasError('required')) {
      return 'Please enter price.';
    }
    return this.f.price.hasError('min') ? 'Enter minimum amount of 1.' : '';
  }
}
