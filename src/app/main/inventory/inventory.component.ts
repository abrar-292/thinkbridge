import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2'
import {BehaviorSubject} from "rxjs";

export interface PeriodicElement {
  id: number,
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'price', 'action'];
  data: PeriodicElement[] = [];
  dataSource: PeriodicElement[] = [];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.data = JSON.parse(<string>localStorage.getItem('data'));
    this.dataSource = [...this.data];

  }

  deleteItem(id: any) {
    Swal.fire({
      title: 'Are you sure want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Product has been deleted successful.',
          'success'
        )
        this.data.splice(id, 1)
        this.dataSource = [...this.data]
        localStorage.setItem('data', JSON.stringify(this.dataSource))
        this.cdr.detectChanges();
      }
    })
  }
}
