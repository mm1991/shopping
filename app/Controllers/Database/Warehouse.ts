import Warehouse from '../../Models/Warehouse';

export async function addWare(oid: number) {
    const result = await Warehouse.create({
        oid,
        status: 'wait'
    });
    return result;
}