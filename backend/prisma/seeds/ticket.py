from random import randint, random


venues = [(6, 14), (25, 20), (11, 17)]
status = ["FREE", "RESERVED", "SOLD"]
paid = [3, 4, 7, 9]


performances = [
  {
    "id": 1,
    "play": 1,
    "venue": 1,
    "price": 10,
  },
  {
    "id": 2,
    "play": 2,
    "venue": 1,
    "price": 12,
  },
  {
    "id": 3,
    "play": 3,
    "venue": 2,
    "price": 18,
  },
  {
    "id": 4,
    "play": 2,
    "venue": 2,
    "price": 10,
  },
  {
    "id": 5,
    "play": 3,
    "venue": 3,
    "price": 16,
  },
  {
    "id": 6,
    "play": 2,
    "venue": 2,
    "price": 18,
  },
  {
    "id": 7,
    "play": 1,
    "venue": 3,
    "price": 12,
  },
  {
    "id": 8,
    "play": 3,
    "venue": 2,
    "price": 14,
  },
  {
    "id": 9,
    "play": 1,
    "venue": 2,
    "price": 10,
  },
  {
    "id": 10,
    "play": 3,
    "venue": 1,
    "price": 18,
  },
]
print("import { StatusTicket } from '@prisma/client';\n")

print("export const tickets = [")

i = 1

p = performances[0]
rows, cols = venues[p["venue"] - 1]
for row in range(1, rows + 1):
    for col in range(1, cols + 1):
        print("  {")
        print(f"    id: {i},")
        print(f"    price: {p['price']},")
        print(f"    row: {row},")
        print(f"    seat: {col},")
        print(f"    performanceId: {p['id']},")
        stat = "SOLD"
        print(f"    orderId: 3,")
        print(f"    status: StatusTicket.{stat},")
        print("  },")
        i += 1

for p in performances[1:]:
    rows, cols = venues[p["venue"] - 1]
    for row in range(1, rows + 1):
        for col in range(1, cols + 1):
            print("  {")
            print(f"    id: {i},")
            print(f"    price: {p['price']},")
            print(f"    row: {row},")
            print(f"    seat: {col},")
            print(f"    performanceId: {p['id']},")
            stat = "FREE"
            if (random() > 0.7):
                order = randint(1,9)
                if order != 3:
                    stat = "SOLD" if order in paid else "RESERVED"
                    print(f"    orderId: {order},")
            print(f"    status: StatusTicket.{stat},")
            print("  },")
            i += 1

print("]")
