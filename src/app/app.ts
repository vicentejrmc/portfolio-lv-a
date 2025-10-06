import { Component } from '@angular/core';
import Carousel from 'bootstrap/js/dist/carousel';

interface ItemHabilidade{
  icone: string;
  titulo: string;
  descricao?: string;
}

interface ItemPortifolio{
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})

export class App {
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

  public itensHabildades2: ItemHabilidade[] = [
     {
      icone: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
    },
    {
      icone: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
    },
    // {
    //   icone: 'https://skillicons.dev/icons?i=js&theme=dark',
    //   titulo: 'JavaScript',
    // },
    {
      icone: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
    },
    {
      icone: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
    },
    {
      icone: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
    },
    {
      icone: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
    },
    {
      icone: 'https://skillicons.dev/icons?i=net&theme=dark',
      titulo: '.NET',
    },
    {
      icone: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
    },
    {
      icone: 'https://skillicons.dev/icons?i=selenium&theme=dark',
      titulo: 'Selenium',
    },
    {
      icone: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
    },
    {
      icone: 'https://skillicons.dev/icons?i=sqlite&theme=dark',
      titulo: 'SQLite',
    },
    {
      icone: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
    },
    // {
    //   icone: 'https://skillicons.dev/icons?i=redis&theme=dark',
    //   titulo: 'Redis',
    // },
    {
      icone: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
    },
    {
      icone: 'https://skillicons.dev/icons?i=powershell&theme=dark',
      titulo: 'PowerShell',
    },
    {
      icone: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
    },
    {
      icone: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
    },
    {
      icone: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
    },
    {
      icone: 'https://skillicons.dev/icons?i=visualstudio&theme=dark',
      titulo: 'Visual Studio',
    },
    {
      icone: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
    },
  ];

  public itensPortfolio: ItemPortifolio[] = [
     {
      titulo: 'Controle de Medicamentos',
      urlImagem: 'controle-de-medicamentos.png',
      urlGif: 'https://i.imgur.com/fgekUo6.gif',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=net&theme=light',
          'https://skillicons.dev/icons?i=cs&theme=light'

      ],
      descricao: `O Sistema Controle de Medicamentos, tem como objetivo gerenciar o que seria a farmacia de uma possível posto de saúde.
      Tendo como suas funcionlidades, a gestão de estoque de medicamentos,o cadastro de pacientes, fornecedores, medicamentos. Entrada de medicamentos conforme solicitações,
      adição e exclusao de estoque, o controle de prescrições médicas e a saída de acordo as prescrições recebidas.`,
      urlRepositorio: 'https://github.com/vicentejrmc/controle-de-medicamentos'
    },

    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'gestao-de-equipamentos.png',
      urlGif: 'https://i.imgur.com/3od2Ro2.gif',
      stack: [
          'https://skillicons.dev/icons?i=html&theme=light',
          'https://skillicons.dev/icons?i=css&theme=light',
          'https://skillicons.dev/icons?i=net&theme=light',
          'https://skillicons.dev/icons?i=cs&theme=light'

      ],
      descricao: `O  Sistema Gestão de equipamentos, tem como objetivo o cadastro de equipamentos, onde o usuário pode cadastrar,
              visualisar equipamentos cadastrados, editar cadastro de equipamentos e excluir equipamentos cadastrados.
              O sistema também permite que se realize chamados de manutenção de equipamentos, permitindo que o usuário cadastre, visualize, edite e
              exclua chamadas de manutenção cadastradas.`,
      urlRepositorio: 'https://github.com/vicentejrmc/GestaoDeEquipamentos2025'
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
        'https://skillicons.dev/icons?i=bootstrap&theme=light'
    ],
    descricao: 'O Sistema Controle de bar tem como objetivo de auxiliar de forma simples o gerenciamento do atendimento ao cliente. Com uma Inteface amigável e intuitiva, o sistema é ideal para estabelecimentos de pequeno porte. Por meio dele é possível realizar o Controle de vendas gerenciando os pedidos, Cadastro de produtos, Garsons e Mesas.',
    urlRepositorio: 'https://github.com/vicentejrmc/Controle-de-bar2025'
}
  ];

  public itemPortfolioSelecionado?: ItemPortifolio;

  public agrupadosPortfolio: ItemPortifolio[][] = [];

ngOnInit() {
    for (let i = 0; i < this.itensPortfolio.length; i += 2) {
      this.agrupadosPortfolio.push(this.itensPortfolio.slice(i, i + 2));
    }
  }

ngAfterViewInit() {
    const carouselElement = document.querySelector('#carouselPortfolio');
    if (carouselElement) {
      new Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel',
        pause: false,
        wrap: true
      });
    }
  }
}


