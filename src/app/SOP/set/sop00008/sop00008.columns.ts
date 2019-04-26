import { ColumnTemplate } from '../../../Global/column-model';

export class SOP00008Columns {
    public static SOP00008Columns : Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'SalePersonTypeID',
            FieldName: 'SalePersonTypeID',
            FieldOrder: 1,
            FieldTypeID: 120,
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
            FieldDisplay: 'SalePersonTypeName',
            FieldName: 'SalePersonTypeName',
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
