import { ColumnTemplate } from '../../../Global/column-model';

export class AccountColumns {
    public static AccountColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'SMSAccountCode',
            FieldName: 'SMSAccountCode',
            FieldOrder: 1,
            FieldTypeID: 130,
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
            FieldDisplay: 'SMSAccountName',
            FieldName: 'SMSAccountName',
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
        },
        {
            FieldDisplay: 'AccountPrice',
            FieldName: 'AccountPrice',
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
