import { Injectable } from '@angular/core'
import { Despesa } from '../../model/despesa'
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class DespesaProvider {
  private despesas: Despesa[] = new Array();
  constructor(private localStorageService: LocalStorageService) {
    console.log('Hello DespesaProvider Provider');
  }

  getAll(): Despesa[] {
    this.getDb();
    return this.despesas;
  }

  private getDb(): void {
     this.despesas = [];
     if (this.localStorageService.get("despesas") != null)
     {
         this.despesas = <Despesa[]> JSON.parse(<string>this.localStorageService.get("despesas"));
     }
   }


   save(despesa: Despesa): void {
      this.getDb();
      this.despesas.push(despesa);
      this.localStorageService.set("despesas", JSON.stringify(this.despesas));
    }
}
