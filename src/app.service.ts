import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  ola = {
    nome: 'Wanderson',
    sobre: 'Ribeiro',
    idade: 31,
  };

  locat = {
    end: 'Rua baia',
    num: 879,
    city: 'São Pulo',
  };
  getHello(): string {
    return JSON.stringify(this.ola);
  }
  getDocs(): string {
    return JSON.stringify(this.locat);
  }
}
