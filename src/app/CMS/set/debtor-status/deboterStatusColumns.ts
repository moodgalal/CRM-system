import { ColumnTemplate } from '../../../Global/column-model';

export class deboterStatusColumns {
    public static deboterStatusColumns: Array<ColumnTemplate> =
    [
         {
            FieldDisplay: 'DebtorStatusID',
            FieldName: 'DebtorStatusID',
            FieldOrder: 1,
            FieldTypeID: 103,
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
            FieldDisplay: 'DebtorStatusName',
            FieldName: 'DebtorStatusName',
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
