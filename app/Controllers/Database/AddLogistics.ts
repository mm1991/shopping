import Logistic from '../../Models/Logistic';

export async function addLogistics(oid: number) {
    const result = await Logistic.create({
        oid,
        status: 'wait'
    });
    return result;
}
