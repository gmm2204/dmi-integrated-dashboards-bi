import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'COVID-19 Mortality',
    url: '/sarscov/about',
    icon: 'fa fa-virus-covid',
    class: 'view-drawer--link'
  },
  {
    name: 'AFI',
    url: '/afi/about',
    icon: 'fa fa-temperature-full',
    class: 'view-drawer--link'
  },
  {
    name: 'SARI/ILI',
    url: '/sari_ili/about',
    icon: 'fa fa-lungs-virus',
    class: 'view-drawer--link'
  }
];
