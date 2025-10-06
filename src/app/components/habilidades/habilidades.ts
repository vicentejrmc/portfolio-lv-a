import { Component } from '@angular/core';
import { ItemHabilidade } from '../../models/item-habilidade';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  [x: string]: any;
  public itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Desenvolvimento Web',
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-building-up',
      titulo: 'Implantação',
      descricao: `Implantação e manutenção de sistemas em servidores VPS e em nuvem.`,
    },
  ];
}
