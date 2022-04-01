I had an interview, where I got posed this problem:

> Given a number of cars `N`, each with available car seats `S(k)`, and number of people `P(k)`, determine the minimum number of cars necessary to transport everyone, by (re)-arranging everyone through each `k`-th car

> For example: if there are 3 cars available, with seats given by `[1, 5, 1]` and persons initially assigned to each car as `[1, 4, 1]`, the minimum number of cars required will be ***2***, i.e. someone from the first (or third) car can go with the second car: `[0, 5, 1]` (or `[1, 5, 0]`)

> Another example: if there are 4 cars available, with seats given by `[3, 10, 2, 4]` and persons initially assigned to each car as `[1, 2, 5, 1]`, the minimum number of cars required will be ***1***, i.e. everyone will go with the second car: `[0, 9, 0, 0]`