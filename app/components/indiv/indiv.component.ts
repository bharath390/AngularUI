import { Component, OnInit, ViewChild } from '@angular/core';

import { Individual } from '../../models/Individual';
import { IndivService } from '../../services/indiv.service';

@Component({
  selector: 'app-indiv',
  templateUrl: './indiv.component.html',
  styleUrls: ['./indiv.component.css']
})
export class IndivComponent implements OnInit {

  indvs: Individual[];
  indv: Individual = {
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    address: {
      street: '',
      city: '',
      state: ''
    },
    hide: true
  }
  showExtended: boolean = true;
  isloaded: boolean = true;
  enableAdd: boolean = true;
  showUserForm: boolean = true;
  currentClasses = {

  };
  currentStyle = {

  };
  @ViewChild('indvForm') form: any;
  data : any;

  constructor(private dateService: IndivService) {

  }

  ngOnInit(): void {
    this.dateService.getIndivs().subscribe(data => {
      this.indvs = data;
    });
    this.setCurrentClasses();
    this.setCurrentStyle();
    // this.dateService.getDate().subscribe(data => {
    //   console.log(data);
    // })
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyle() {
    this.currentStyle = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }



  toggleHide(indiv: Individual) {
    indiv.hide = !indiv.hide;
  }

  onSubmit({ value, valid }: { value: Individual, valid: boolean }) {
    //{ value, valid }: { value: Individual, valid: boolean }

    //   this.indvs.unshift(this.indv);
    //   this.indv = {
    //     firstName : '',
    //     lastName : '',
    //     age : 0,
    //     gender : '',
    //     address : {
    //       street : '',
    //       city : '',
    //       state : ''
    //     },
    //     hide : true
    //   }
    if (!valid) {
      console.log('Form is not valid')
    } else {
      console.log(value);
      value.isActive = true;
      value.hide = true;
      this.dateService.addIndv(value);

      this.form.reset();
    }

  }

}
