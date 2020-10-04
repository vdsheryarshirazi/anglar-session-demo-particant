import { Pipe, PipeTransform } from '@angular/core';
import { encrypt, decrypt } from './functions';

@Pipe({
  name: 'ceasarCipher',
})
export class CeasarCipherPipe implements PipeTransform {
  transform(inputTxt: string, encode: string): string {
    const shift = 1;
    return encode === 'true'
      ? encrypt(inputTxt, shift)
      : decrypt(inputTxt, shift);
  }
}
