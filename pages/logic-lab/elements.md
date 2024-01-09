---
layout: intro
title: Boolean 
level: 1
---
# Boolean elements

Whether creating equations in Boolean algebra or using them in your programs, you'll form both simple and complex logical expressions that use basic operations to combine the logical conditions.

## Notation

Boolean (logical) equations are expressed in a way similar to mathmatical equations. Variables in Boolean expressions though, have only two possible values, ``true`` or ``false``. 

For an equation using a logical expression, the equivalant sides of the equal sign ,``=``, will be only ``true`` or ``false`` too.

---
title: Boolean expressions
level: 2
---
## Boolean expressions

The following list shows the basic notation elements for Boolean expressions.

* ``~A``: the inverse (**NOT**) of ``A``, when ``A`` is ``true``, ``~A`` is ``false``
* ``A + B``: the value of ``A`` **OR** ``B``
* ``A · B``: the value of ``A`` **AND** ``B``
* ``A ⊕ B``: the value of the exclusive OR (**XOR**) of ``A`` with ``B``
* ``Q``: equivalent result (OUTPUT) value of a logical expression

A resulting value, ``Q``, from a logical expression in is shown like:

``Q`` = ``A + B``

---
title: Equation
level: 2
---

# Equation

An equation to show logically equivalent expressions (where both sides have the same resulting value) can look like this:

``~(A + B)`` = ``~A · ~B``

---
title: Logical operators
level: 1
---
# Logical operators

All Boolean expressions result from a combination of conditions and operators. 

These operators join individual conditons together and evaluate into a single ``true`` or ``false`` condition. 

The following are the basic logical operators. 

__=__ (Identity)

__NOT__ (Negation)

__OR__ (Disjunction)

__AND__ (Conjunction)

__XOR__ (Exclusive OR)

Their use in both Boolean algebra and in code is shown along with their truth table.

---
layout: two-cols-header
title: Identity
level: 2
---
## Identity

Identity means that a result value is the same as the condition itself.

``Q = A``

::left::

```
let A = false
let Q = A
```

## Truth table

A | Q
-|-
F | F
T | T

::right::

## Example - Blink  on press

```
let A = false
forever(function () {
    A = input.buttonA.isPressed()
    if (A) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```
[Identity](https://makecode.com/_P1hcUA7L8FaY)
---
title: Not
level: 2
---
## NOT (Negation)

The NOT operator is called negation or the inverse. It takes a single logical value and makes it have the opposite value, ``true`` goes to ``false`` and ``false`` goes to ``true``.

``Q = ~A``

```
let A = false
let Q = !(A)
```
---
title: NOT Example 
level: 2
---
### Example - Blink pixels on not pressed

```
let A = false
forever(function () {
    A = input.buttonA.isPressed()
    if (!(A)) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```
[Negation](https://makecode.com/_PsFaCH9J0Wvw)
---
title: Not True table
level: 2
---
#### Truth table

A | ~A
-|-
F | T
T | F

---
title: OR
level: 2
---
## OR (Disjunction)

The OR operator results in ``true`` when one or more conditions are ``true``.

``Q = A + B``

```
let A = false
let B = false
let Q = A || B
```
---
title: Or example
level: 2
---
#### Example - Blink on any press

```
let A = false
let B = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    A = !(A)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    B = !(B)
})
forever(function () {
    if (A || false) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})

```
[Or da completare](https://makecode.com/_D1z8v47LyTm1)
---
title: OR Truth table
level: 2
---
## OR Truth table

A | B | A + B
-|-|-
F | F | F
T | F | T
F | T | T
T | T | T

---
title: AND 
level: 2
---
### AND (Conjunction)

The AND operator requires that all conditions are ``true`` for the result to be ``true``.

``Q = A · B``

```
let A = false
let B = false
let Q = A && B
```
---
title: AND Example 
level: 2
---
#### Example - Blink on double press only

```
let A = false
let B = false
input.buttonA.onEvent(ButtonEvent.Click, function () {
    A = !(A)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    B = !(B)
})
forever(function () {
    if (A && false) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})

```
---
title: AND Truth table
level: 2
---
#### Truth table

A | B | A · B
-|-|-
F | F | F
T | F | F
F | T | F
T | T | T

---
title: XOR 
level: 2
---
### XOR (Exclusive OR) #xor

Exclusive OR (XOR) means that only one or the other condition is true. Both conditions can't be true at the same time. XOR is common in Boolean algebra but it has no operator in JavaScript. Its operation can be made from combining a few simple expressions.

``Q = A ⊕ B``

```
let A = false
let B = false
let Q = (A || B) && !(A && B)
```
---
title: XOR Example
level: 2
---
#### Example - Blink on one press or the other

```
let A = false
let B = false
forever(function () {
    A = input.buttonA.isPressed()
    B = input.buttonB.isPressed()
    if (?????) {
        light.setAll(0xff0000)
    } else {
        light.clear()
    }
    pause(500)
})
```
---
title: XOR Truth table
level: 2
---
#### XOR Truth table


| A⊕B | A | B |
|---|---|-----|
| F | F |  F  |
| T | F |  T  |
| T | T |  F  |
| F | T |  T  |
