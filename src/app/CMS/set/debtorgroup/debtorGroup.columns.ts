import { ColumnTemplate } from '../../../Global/column-model';

export class deboterGroupColumns {
    public static deboterGroupColumns: Array<ColumnTemplate> =
        [
            {
                FieldDisplay: 'GroupName',
                FieldName: 'GroupName',
                FieldOrder: 1,
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
                FieldDisplay: 'GroupID',
                FieldName: 'GroupID',
                FieldOrder: 10,
                FieldTypeID: 102,
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
