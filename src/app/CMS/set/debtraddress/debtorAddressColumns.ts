import { ColumnTemplate } from '../../../Global/column-model';

export class debtorAddressColumns {
    public static debtorAddressColumns: Array<ColumnTemplate> =
        [
            {
                FieldDisplay: 'UserName',
                FieldName: 'UserName',
                FieldOrder: 1,
                FieldTypeID: 104,
                FieldWidth: 100,
                IsActive: true,
                IsEmailable: false,
                IsFilterable: true,
                IsPrintable: true,
                IsSortable: true,
                Islockable: true,
                Islocked: false
            },
            {
                FieldDisplay: 'AddressCode',
                FieldName: 'AddressCode',
                FieldOrder: 10,
                FieldTypeID: 3,
                FieldWidth: 100,
                IsActive: true,
                IsEmailable: false,
                IsFilterable: true,
                IsPrintable: true,
                IsSortable: true,
                Islockable: true,
                Islocked: false
            }
        ];
}
