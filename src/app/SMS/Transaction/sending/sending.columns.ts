import { ColumnTemplate } from '../../../Global/column-model';

export class SendingColumns {
    public static SendingColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'TRxID',
            FieldName: 'TRxID',
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
            FieldDisplay: 'MessageContant',
            FieldName: 'MessageContant',
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
            FieldDisplay: 'EntryDate',
            FieldName: 'EntryDate',
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
