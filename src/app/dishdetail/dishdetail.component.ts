import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

//import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  
    dish: Dish;
    dishIds: number[];
    prev: number;
    next: number;
    dishfeedbackForm: FormGroup;
    comment: Comment;

    formErrors = {
      'author': '',
      'comment': '',
    };
  
    validationMessages = {
      'author': {
        'required': 'Author Name is required.',
        'minlength': 'Author Name must be at least 2 characters long.',
      },
      'comment': {
        'required': 'Comment is required.',
      },  
    };
  
  
    //selectedDish: Dish;
     
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location,
      private fb: FormBuilder) {
        this.createForm();
       }
  
    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(
        switchMap((params: Params) => this.dishservice.getDish(+params['id'])))
        .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });   
     }

     setPrevNext(dishId: number) {
      let index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
    }
    
    goBack(): void {
      this.location.back();
    }

    createForm() {
      this.dishfeedbackForm = this.fb.group({
        author: ['', [Validators.required, Validators.minLength(2)]],
        rating: 5,
        comment: ['', [Validators.required] ],
      });
  
      this.dishfeedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
  
      this.onValueChanged(); //resets the validation
    }
  
    onValueChanged(data?: any) {
      if (!this.dishfeedbackForm) {return;}
         const form = this.dishfeedbackForm;
  
      for (const field in this.formErrors) {
        this.formErrors[field] = ''; // resets the error messages
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }   
      }

      if(this.dishfeedbackForm.valid) {
        this.comment = this.dishfeedbackForm.value;
      }
    };
  
    onSubmit() {
      this.comment = this.dishfeedbackForm.value;
      //console.log(this.comment);
      this.comment.date = Date();
      this.dish.comments.push(this.comment);
      this.dishfeedbackForm.reset({
        author: '',
        rating: 5,
        comment: '',
      });
    }
    
}
