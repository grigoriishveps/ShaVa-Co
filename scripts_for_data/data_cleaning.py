from glob import glob
from os.path import splitext, basename
from tqdm import tqdm
import re

issues_columns_rename_dict = {
    'ИД выдачи': 'issue_id',
    'ИД читателя': 'reader_id',
    'Дата выдачи': 'issue_date',
    'Инвентарный номер': 'inventory_id',
    'Дата сдачи (предполагаемая)': 'return_date',
}

pat = re.compile("[a-zA-Z\d:\- ]+")
if __name__ == '__main__':
    for csv_file in glob("datasets//Выдача_*.csv"):
        with open(csv_file, 'r') as old_file:
            new_name = "newCSV/" + splitext(basename(csv_file))[0] + "_new.csv"
            try:
                with open(new_name, 'x', encoding="utf-8") as new_file:
                    old_lines = old_file.readlines()
                    new_file.writelines("issue_id;reader_id;inventory_id;;issue_date;return_date;condition")
                    for line in tqdm(old_lines[1:]):
                        m_line = re.findall(pat, line)
                        result = ';'.join(m_line).strip(";") + "\n"
                        new_file.writelines(result)
            except FileExistsError:
                pass
