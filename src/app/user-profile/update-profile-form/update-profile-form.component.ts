import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-update-profile-form',
  templateUrl: './update-profile-form.component.html',
  styleUrls: ['./update-profile-form.component.scss'],
})
export class UpdateProfileFormComponent {
  fetching = false;
  error: string;
  updateForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
  });
  @Output() cancel = new EventEmitter();
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.updateForm.patchValue({ firstName: this.userService.user.data.first_name });
  }
  onSubmit(): void {
    if (!this.updateForm.valid) {
      return;
    }
    this.fetching = true;
    const payload = { first_name: this.updateForm.value.firstName };
    this.userService
      .updateUserApi(payload)
      .then((res) => {
        this.error = '';
      })
      .catch((err: string) => {
        this.error = err;
      })
      .finally(() => (this.fetching = false));
  }
  onClickCancel(): void {
    this.cancel.emit();
  }
}
