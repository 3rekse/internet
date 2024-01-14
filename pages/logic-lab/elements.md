---
level: 1
layout: intro
title: Boolean 

---

## Boolean elements

Whether creating equations in Boolean algebra or using them in your programs, you'll form both simple and complex logical expressions that use basic operations to combine the logical conditions.

## Notation

Boolean (logical) equations are expressed in a way similar to mathmatical equations. Variables in Boolean expressions though, have only two possible values, ``true`` or ``false``.

For an equation using a logical expression, the equivalant sides of the equal sign ,``=``, will be only ``true`` or ``false`` too.

---
level: 2
title: Boolean expressions

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
level: 2
title: Equation

---

## Equation

An equation to show logically equivalent expressions (where both sides have the same resulting value) can look like this:

``~(A + B)`` = ``~A · ~B``

---
level: 2
title: Logical operators

---

## Logical operators

All Boolean expressions result from a combination of conditions and operators.

These operators join individual conditons together and evaluate into a single ``true`` or ``false`` condition.

The following are the basic logical operators.

**=** (Identity)

**NOT** (Negation)

**OR** (Disjunction)

**AND** (Conjunction)

**XOR** (Exclusive OR)

Their use in both Boolean algebra and in code is shown along with their truth table.

---
layout: two-cols-header
level: 2
title: Identity

---

## [Identity](http://tinyurl.com/ysgf43zt)

Identity means that a result value is the same as the condition itself.

``Q = A``

::left::

```js
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

```js
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
layout: two-cols-header
level: 2
title: Not

---

## NOT (Negation)

The NOT operator is called negation or the inverse. It takes a single logical value and makes it have the opposite value, ``true`` goes to ``false`` and ``false`` goes to ``true``.

::left::

``Q = ~A``

```js
let A = false
let Q = !(A)
```

::right::

Truth table

A | ~A
-|-
F | T
T | F

---
level: 2
title: NOT Example

---

### Example - Blink pixels on not pressed

```js
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
level: 2
title: OR

---

## OR (Disjunction)

The OR operator results in ``true`` when one or more conditions are ``true``.

``Q = A + B``

```js
let A = false
let B = false
let Q = A || B
```

A | B | A + B
-|-|-
F | F | F
T | F | T
F | T | T
T | T | T

---
level: 2
title: Or example

---

## Example - Blink on any press

```js
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
level: 2
title: AND

---

## AND (Conjunction)

The AND operator requires that all conditions are ``true`` for the result to be ``true``.

``Q = A · B``

```js
let A = false
let B = false
let Q = A && B
```

A | B | A · B
-|-|-
F | F | F
T | F | F
F | T | F
T | T | T

---
level: 2
title: AND Example

---

## Example - Blink on double press only

```js
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
layout: two-cols-header
level: 2
title: XOR (Exclusive OR)

---

## XOR (Exclusive OR)

::left::

Exclusive OR (XOR) means that only one or the other condition is true. Both conditions can't be true at the same time. XOR is common in Boolean algebra but it has no operator in JavaScript. Its operation can be made from combining a few simple expressions.

``Q = A ⊕ B``

```js
let A = false
let B = false
let Q = (A || B) && !(A && B)
```

![menu](/internet/images/logic-lab/logic-gates/menu.png)

::right::

| A | B | A⊕B |
|---|---|-----|
| F | F |  F  |
| F | T |  T  |
| T | F |  T  |
| T | T |  F  |

---
level: 2
title: XOR Example

---

## Example - Blink on one press or the other

```js
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
