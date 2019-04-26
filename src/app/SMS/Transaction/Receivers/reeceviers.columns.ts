import { ColumnTemplate } from '../../../Global/column-model';

export class ReceiverColumns {
    public static ReceiverColumns : Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'PhoneNumber',
            FieldName: 'PhoneNumber',
            FieldOrder: 1,
            FieldTypeID: 133,
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
            FieldDisplay: 'RecieverName',
            FieldName: 'RecieverName',
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
        ,
        {
            FieldDisplay: 'IsInActive',
            FieldName: 'IsInActive',
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
