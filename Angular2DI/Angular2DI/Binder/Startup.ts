import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EmployeeModuleLibrary } from '../Binder/EmployeeModuleLibrary'
const platform = platformBrowserDynamic();
platform.bootstrapModule(EmployeeModuleLibrary);