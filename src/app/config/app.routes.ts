import { Routes } from '@angular/router';
import { AppLayoutComponent } from '../presentation/core/layout/app-layout/app-layout.component';
import { Component } from '@angular/core';
import { DataViewerComponent } from '../presentation/shared/data-viewer/data-viewer.component';
import { FormBaseComponent } from '../presentation/shared/form-base/form-base.component';

export const routes: Routes = [
    { 
        path: '', component: AppLayoutComponent,
        children: [
            {path: '', component: DataViewerComponent}
        ]

    }
];
