---
layout: intro
title: Logic Gates
level: 1
---
## [Logic Gates](http://tinyurl.com/yw3qa4rb)

![OR gate symbol](/internet/images/logic-lab/logic-gates/full-adder.png)

In the real world digital devices aren't the abstract logical expressions of Boolean algebra, but they are implementations of these expressions in hardware. The logical expressions are translated into device structures called _logic gates_. A logic gate is both a symbolic representation of a logical operation and, when used in digital electronics, it can is an actual circuit in hardware. A single logic gate is usually made of several transistors an shares space with many others in an integrated circuit.

---
title: Gate symbols
level: 2
---
## Gate symbols

Each of the basic operators we learned about in the [expressions](/internet/logic-lab/expressions) section have a gate symbol. The symbol takes the place of the operator and the variables are the inputs to the gate. The resulting value from the expression equation is the output of the gate. The output of a gate can be a final result or it can be connected as an input to yet another gate.

Logic gates are symbols that can directly replace an expression in Boolean arithmetic. Each one has a different shape to show its particular function. The inputs (Boolean variables) enter at the left of the symbol and the output leaves from the right. When combined together, several gates can make a complex logical evaluation system that has many inputs and outputs. Digital computers are designed by connecting thousands, or millions, of these gates to together.

---
title: NOT gate
level: 2
---
## NOT gate

The NOT gate is a forward arrow with a small circle at the output. The circle part of the symbol is what says that the output is negating the input.

![NOT gate symbol](/internet/images/logic-lab/logic-gates/not-gate.png)

---
title: OR gate
level: 2
---
## OR gate

The OR gate has a curved input side and a sharp pointed output.

![OR gate symbol](/internet/images/logic-lab/logic-gates/or-gate.png)

---
title: AND gate
level: 2
---
## AND gate

The AND gate has a flat input side and round output side.

![AND gate symbol](/internet/images/logic-lab/logic-gates/and-gate.png)

---
title:  Exclusive OR (XOR) gate
level: 2
---
##  Exclusive OR (XOR) gate

The exclusive or gate symbol is just like the OR gate but it has an additonal curved line crossing the inputs.

![XOR gate symbol](/internet/images/logic-lab/logic-gates/xor-gate.png)

---
title: Combined logic
level: 2
---
## Combined logic

When you connect multiple gates together you have a combined logic system or _combinatorial logic_. To design a combined logic system we can use a truth tables to match logical outputs for out various input conditions. Boolean expressions are written from the conditions in the table. Then, we can directly convert the expression into a diagram of logic gates.

You might remember that back in [Boolean elements](/internet/logic-lab/elements#xor) we saw that there was no operator to use in code for XOR. It was was made up using a combination of AND, OR, and NOT operators:

---
title: Combined logic (cont)
level: 2
---
## Combined logic (cont)

```
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

Let's map the input and output conditions in a truth table for a combined logic system for XOR. We'll find all the conditions that cause a ``true`` result and create a Boolean expression for them.

---
layout: two-cols-header
title: Combined logic
level: 2
---

## Combined logic

::left::



A | B | A ⊕ B
-|-|-
F | F | F
F| T | T
T| F | T
T | T | F

In code this expression is formed with these logic blocks:

```
let A = false
let B = false
let Q = (!A && B) || (A && !B)
```
::right::

There are two conditions where the result column has ``true`` values. 

The first conditon is when ``A`` is ``false`` and ``B`` is ``true`` which is expressed as ``~A · B``. 

The second conditon is when ``A`` is ``true`` and ``B`` is ``false`` which is expressed as ``A · ~B``. 

Our XOR expression is ``true`` when one of these conditions are ``true`` which is written like:

``A ⊕ B`` = ``(~A · B) + (A · ~B)``

---
title: Combined logic
level: 2
---
## Combined logic

Coverting the equation to logic gates makes the following diagram. Notice how each gate "connects" the variables together just like the logic blocks in the code above.

![Combinatorial XOR first version](/internet/images/logic-lab/logic-gates/combinatorial1-xor.png)

---
title: Combined logic
level: 2
---
## Combined logic

However, if we take the other two unused conditions from the truth table that make the XOR operation ``false``, can make the negative equation for XOR, called a NXOR:

``~(A ⊕ B)`` = ``(~A · ~B) + (A · B)``

To get back to ``A ⊕ B`` we have to negate this negative equation. Then, with the help of [De Morgan's Thereom](/internet/logic-lab/expressions#de-morgan-s-thereom), we get a different equation for XOR but it's still logically equivalent to the original one.

``A ⊕ B`` = ``(A + B) · ~(A · B)``

When this equation is converted to logic gates, there's one fewer gate than in the first diagram.
---
title: Combined logic
level: 2
---
## [Combined logic](http://tinyurl.com/ytfazyv9)



![Combinatorial XOR second version](/internet/images/logic-lab/logic-gates/combinatorial2-xor.png)

This diagram has less complexity than the first one. Reduction in the number of gates to accomplish the same logical result is one of the primary goals for digital logic design. For electronic devices, this allows more gates to use the limited amount of space on an integrated circuit.
