import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice';
import { Invoice } from '../../model/Invoice';
import { CompanyView } from "../company-view/company-view";
import { CustomerView } from "../customer-view/customer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CustomerView, InvoiceDetail],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: Invoice) => {
        this.invoice = data;
        this.cdr.detectChanges();
        console.log(' Datos recibidos del backend:', data);
      },
      (error) => {
        console.error(' Error al obtener datos del backend:', error);
        console.error(' Asegúrate de que el backend esté en puerto 3000');
      }
    );
  }
}
