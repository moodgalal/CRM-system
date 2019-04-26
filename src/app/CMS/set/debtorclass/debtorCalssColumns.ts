import { ColumnTemplate } from '../../../Global/column-model';

export class deboterClassColumns {
    public static deboterClassColumns: Array<ColumnTemplate> =
        [
            {
                FieldDisplay: 'CUSTCLAS',
                FieldName: 'CUSTCLAS',
                FieldOrder: 1,
                FieldTypeID: 101,
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
                FieldDisplay: 'CUSTCLASNAME',
                FieldName: 'CUSTCLASNAME',
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
                FieldDisplay: 'PrefixValue',
                FieldName: 'PrefixValue',
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
