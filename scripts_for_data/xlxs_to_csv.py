from functools import partial

import pandas as pd

issues_columns_rename_dict = {
    'ИД выдачи': 'issue_id',
    'ИД читателя': 'reader_id',
    'Дата выдачи': 'issue_date',
    'Инвентарный номер': 'inventory_id',
    'Штрих-код': 'barcode',
    'Дата сдачи (предполагаемая)': 'return_date',
    'Состояние': 'condition'
}

examples_columns_rename_dict = {
    'Идентификатор экземпляра': 'example_id',
    'ИД Каталожной записи': 'record_id',
    'Инвентарный номер': 'inventory_id',
    'Штрих-код': 'barcode',
    'Раздел знаний': 'knowledge_id',
    'Идентификатор сиглы': 'sigly_id',
}

readers_rename_dict = {
    'ID читателя': 'reader_id',
    'Дата рождения': 'birth_date'
}


def prepare_df_from_excel(path: str, rename_dict: dict) -> pd.DataFrame:
    df = pd.ExcelFile(path)
    sheets = {}
    for sheet in df.sheet_names:
        sheets[sheet] = df.parse(sheet)

    columns_to_use = list(rename_dict.values())
    return pd.concat([
        df.rename(columns=rename_dict)[columns_to_use]
        for df in sheets.values()
    ])


prepare_issues_df = partial(prepare_df_from_excel, rename_dict=issues_columns_rename_dict)
prepare_examples_df = partial(prepare_df_from_excel, rename_dict=examples_columns_rename_dict)
prepare_readers_df = partial(prepare_df_from_excel, rename_dict=readers_rename_dict)

if __name__ == '__main__':
    # issues_1 = prepare_issues_df('datasets/Выдача_1.xlsx')
    issues_2 = prepare_issues_df('datasets/Выдача_2.xlsx')
    # issues_full = pd.concat([issues_1, issues_2])
    issues_2.to_csv('datasets/issue2.csv', index=False)

    examples_1 = prepare_examples_df('datasets/Экземпляры.xlsx')
    examples_2 = prepare_examples_df('datasets/Экземпляры_2.xlsx')
    examples_full = pd.concat([examples_1, examples_2])
    examples_full.to_csv('datasets/examples.csv', index=False)

    readers = prepare_readers_df('datasets/Читатели.xlsx')
    readers.to_csv('datasets/readers.csv', index=False)
