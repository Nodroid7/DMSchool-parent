import { InjectionToken } from '@angular/core';
import { IParentConfig } from './iparent.config';

export const PARENT_CONFIG = new InjectionToken('parent.config');
export const ParentConfig: IParentConfig = {

    /*local*/
    endPoints : {
        server: 'http://localhost:3000/',
        manager: 'http://localhost:4200/',
        parent: 'http://localhost:8000/'
    }
    /*****/

    /*server*/
        // server: 'http://localhost:3000/',
        // manager: 'http://localhost:4200/',
        // parent: 'http://localhost:8000/'
    /****/

};
