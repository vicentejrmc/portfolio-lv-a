import { Component } from '@angular/core';
import { ItemPortifolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  public itensPortfolio: ItemPortifolio[] = [
    {
      titulo: 'Controle de Medicamentos',
      urlImagem: 'controle-de-medicamentos.png',
      urlGif: 'https://i.imgur.com/fgekUo6.gif',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
      ],
      descricao: `O Sistema Controle de Medicamentos, tem como objetivo gerenciar o que seria a farmacia de uma possível posto de saúde.
      Tendo como suas funcionlidades, a gestão de estoque de medicamentos,o cadastro de pacientes, fornecedores, medicamentos. Entrada de medicamentos conforme solicitações,
      adição e exclusao de estoque, o controle de prescrições médicas e a saída de acordo as prescrições recebidas.`,
      urlRepositorio: 'https://github.com/vicentejrmc/controle-de-medicamentos',
    },

    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'gestao-de-equipamentos.png',
      urlGif: 'https://i.imgur.com/3od2Ro2.gif',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
      ],
      descricao: `O  Sistema Gestão de equipamentos, tem como objetivo o cadastro de equipamentos, onde o usuário pode cadastrar,
              visualisar equipamentos cadastrados, editar cadastro de equipamentos e excluir equipamentos cadastrados.
              O sistema também permite que se realize chamados de manutenção de equipamentos, permitindo que o usuário cadastre, visualize, edite e
              exclua chamadas de manutenção cadastradas.`,
      urlRepositorio: 'https://github.com/vicentejrmc/GestaoDeEquipamentos2025',
    },

    {
      titulo: 'Controle de Bar',
      urlImagem: 'Controle-de-bar.png',
      urlGif: 'https://i.imgur.com/baheGyf.gif',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=bootstrap&theme=light',
      ],
      descricao:
        'O Sistema Controle de bar tem como objetivo de auxiliar de forma simples o gerenciamento do atendimento ao cliente. Com uma Inteface amigável e intuitiva, o sistema é ideal para estabelecimentos de pequeno porte. Por meio dele é possível realizar o Controle de vendas gerenciando os pedidos, Cadastro de produtos, Garsons e Mesas.',
      urlRepositorio: 'https://github.com/vicentejrmc/Controle-de-bar2025',
    },
  ];

  public itemPortfolioSelecionado?: ItemPortifolio;
}
