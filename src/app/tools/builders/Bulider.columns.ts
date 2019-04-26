import { ColumnTemplate } from '../../Global/column-model';

export class BuliderColumns {
    public static BuliderColumns: Array<ColumnTemplate> =
        [
            {
            FieldDisplay: 'TrxTypeName',
            FieldName: 'TrxTypeName',
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
                FieldDisplay: 'TableSource',
                FieldName: 'TableSource',
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
                FieldDisplay: 'WhereStandardCondition',
                FieldName: 'WhereStandardCondition',
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
