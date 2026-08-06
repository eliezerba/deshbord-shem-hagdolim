# deshbord-shem hagdolim

Dashboard דו-לשוני (עברית/English) למחקר "שם הגדולים".

## מה בפנים

- לשוניות תוכן:
  - Overview
  - Reports + Methods
  - Raw Data
  - Query Lab
  - Network Playground
  - Geography
  - Source Linker
  - Validation
- כל המידע נטען מתוך תיקיית `data/` המקומית של הדשבורד.
- שני מצבי גרף:
  - `Lite` (ברירת מחדל, מהיר)
  - `Full` (כל הקשתות מתוך GEXF)
- כולל קישוריות בין:
  - דוחות
  - נתונים גולמיים
  - גרף קשרים
  - מפה גיאוגרפית
  - טקסט מקור

## הרצה מקומית

מומלץ להריץ עם שרת סטטי (ולא פתיחה ישירה של הקובץ) בגלל טעינת קבצים דרך `fetch`.

דוגמה ב-PowerShell מתוך התיקייה:

```powershell
python -m http.server 8000
```

ואז לפתוח בדפדפן:

http://localhost:8000

## העלאה ל-GitHub Pages

1. יוצרים ריפו חדש.
2. מעלים את כל תוכן התיקייה `deshbord-shem hagdolim` לשורש הריפו.
3. בהגדרות הריפו: Pages -> Source -> Deploy from branch -> `main` / root.
4. ממתינים לדיפלוי ופותחים את ה-URL של Pages.

## הערות נפח

- הדשבורד נטען כליבה קלה. מצב `Lite` טוען `graph_lite.json` לשימוש מהיר; מצב `Full` טוען את `hagdolim_kg.gexf` המלא.
- כל הנתונים נשמרים מקומית כדי לאפשר פריסה סטטית מלאה.
