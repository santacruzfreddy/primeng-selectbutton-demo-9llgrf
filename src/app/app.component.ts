import { Component } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  options: SelectItem[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = 'off';

  value2: string;

  value3: any;

  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  constructor(private primengConfig: PrimeNGConfig) {
    this.options = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];

    this.paymentOptions = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 },
    ];

    this.justifyOptions = [
      { icon: 'pi pi-align-left', value: 'left' },
      { icon: 'pi pi-align-right', value: 'Right' },
      { icon: 'pi pi-align-center', value: 'Center' },
      { icon: 'pi pi-align-justify', value: 'Justify' },
    ];
  }
}
