import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit {
  posted = false;
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      user: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    this.posted = true;
  }
}
