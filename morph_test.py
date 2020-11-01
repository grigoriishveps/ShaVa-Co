# Поиск похожих лексем
# import pymorphy2
# morph = pymorphy2.MorphAnalyzer()
#
# word = morph.parse('Достоевский')[0]
#
# lexemes = word.lexeme
#
# answer = [word.word for word in lexemes]
#
# test = list(set(answer))
#
# print(test)

# print(answer[word])


# Выбросить служебные части речи
# import pymorphy2  # $ pip install pymorphy2
#
# def pos(word, morth=pymorphy2.MorphAnalyzer()):
#     "Return a likely part of speech for the *word*."""
#     return morth.parse(word)[0].tag.POS
#
# words = "Однако я так и не смог закончить".split()
# functors_pos = {'INTJ', 'PRCL', 'CONJ', 'PREP'}  # function words
# answer = [word for word in words if pos(word) not in functors_pos]
# # -> я смог закончить
# print(answer)


def tanimoto(s1, s2):
    a, b, c = len(s1), len(s2), 0.0

    for sym in s1:
        if sym in s2:
            c += 1

    return c / (a + b - c)

print(tanimoto('джаз', 'эстрадноджазовый'))