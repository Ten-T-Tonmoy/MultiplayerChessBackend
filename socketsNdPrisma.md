---

### 1️⃣ Two-table relationship (Many-to-Many without extra data)

**Use case:**
two entities (tables) related many-to-many, **but you don’t need to store additional info about their relationship** — just the link.

**Example:**

* `User` and `Role`
* `Student` and `Course` (just enrollment, no extra info)

**Implementation:**

* Prisma creates a **hidden join table** automatically
* Your models simply list the arrays without an explicit join model

```prisma
model User {
  id     String   @id @default(cuid())
  roles  Role[]
}

model Role {
  id    String   @id @default(cuid())
  users User[]
}
```

---

### 2️⃣ Three-table relationship (Many-to-Many with extra data)

**Use case:**
 two entities related many-to-many, **and you want to track extra information about each relationship instance**.

**Example:**

* `User` and `Achievement` where you want to store user progress, completion dates, etc.
* `Student` and `Course` where you want to store grades, attendance, enrollment date
* `Order` and `Product` where you want to store quantity, price per unit

**Implementation:**

* You create an explicit **join (junction) table** with extra fields
* This is a separate Prisma model with foreign keys to both sides plus extra columns

```prisma
model UserAchievement {
  id            String @id @default(cuid())
  userId        String
  achievementId String
  user          User        @relation(fields: [userId], references: [id])
  achievement   Achievement @relation(fields: [achievementId], references: [id])

  progress      Json?
  completed     Boolean
  completedAt   DateTime?
}
```

---

### TL;DR Summary:

| Relation Type                | Number of Tables Needed  | Extra Data on Relation? |
| ---------------------------- | ------------------------ | ----------------------- |
| Simple many-to-many          | 2                        | No                      |
| Many-to-many with extra data | 3 (including join table) | Yes                     |

---

### Bonus:

If you have a **one-to-many** or **one-to-one** relationship, only 2 tables needed anyway — no join table required.

---
]