import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderBrandComponent,
  HeaderComponent,
  HeaderDividerComponent,
  HeaderNavComponent,
  HeaderTextComponent,
  NavItemComponent,
  NavLinkDirective,
  SidebarModule,
  FormModule,
} from '@coreui/angular';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [RouterLink,
    ContainerComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    HeaderBrandComponent,
    HeaderComponent,
    HeaderDividerComponent,
    HeaderNavComponent,
    HeaderTextComponent,
    NavItemComponent,
    NavLinkDirective,
  SidebarModule, FormModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponents {
  visible = true;
  

   sidebarVisible = true;
  sidebarCollapsed = false;


searchText = '';
searchOptions = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js'];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleCollapse() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  navItems = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cil-speedometer'
    },
    {
      name: 'Productos',
      url: '/productos'
    },
    {
      name: 'Usuarios',
      children: [
        { name: 'Lista', url: '/usuarios/lista' },
        { name: 'Crear', url: '/usuarios/crear' }
      ]
    }
  ];
}
