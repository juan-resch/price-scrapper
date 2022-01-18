-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pricing" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idProduct" INTEGER NOT NULL,
    "updateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" REAL NOT NULL DEFAULT 0,
    CONSTRAINT "Pricing_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pricing" ("id", "idProduct", "updateAt") SELECT "id", "idProduct", "updateAt" FROM "Pricing";
DROP TABLE "Pricing";
ALTER TABLE "new_Pricing" RENAME TO "Pricing";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
