import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { HisotorialMensajes } from '../models';
import { HisotorialMensajesRepository } from '../repositories';
export declare class HistorailMensajesController {
    hisotorialMensajesRepository: HisotorialMensajesRepository;
    constructor(hisotorialMensajesRepository: HisotorialMensajesRepository);
    create(hisotorialMensajes: Omit<HisotorialMensajes, 'id'>): Promise<HisotorialMensajes>;
    count(where?: Where<HisotorialMensajes>): Promise<Count>;
    find(filter?: Filter<HisotorialMensajes>): Promise<HisotorialMensajes[]>;
    updateAll(hisotorialMensajes: HisotorialMensajes, where?: Where<HisotorialMensajes>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<HisotorialMensajes>): Promise<HisotorialMensajes>;
    updateById(id: string, hisotorialMensajes: HisotorialMensajes): Promise<void>;
    replaceById(id: string, hisotorialMensajes: HisotorialMensajes): Promise<void>;
    deleteById(id: string): Promise<void>;
}
