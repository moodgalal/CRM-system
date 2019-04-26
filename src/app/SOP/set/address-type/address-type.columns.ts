import { ColumnTemplate } from '../../../Global/column-model';

export class AddressTypeColumns {
    public static AddressTypeColumns : Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'AddressTypeCode',
            FieldName: 'AddressTypeCode',
            FieldOrder: 1,
            FieldTypeID: 121,
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
            FieldDisplay: 'AddressTypeName',
            FieldName: 'AddressTypeName',
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
