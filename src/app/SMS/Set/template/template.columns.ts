import { ColumnTemplate } from '../../../Global/column-model';

export class TemplateColumns {
    public static TemplateColumns: Array<ColumnTemplate> =
    [
        {
            FieldDisplay: 'TemplateID',
            FieldName: 'TemplateID',
            FieldOrder: 1,
            FieldTypeID: 132,
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
            FieldDisplay: 'TemplateName',
            FieldName: 'TemplateName',
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
            FieldDisplay: 'TemplateMessage',
            FieldName: 'TemplateMessage',
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
