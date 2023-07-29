---
layout: base.liquid
tags: post
ptitle: "Python: Walrus operator "
title: "The walrus operator"
---
2/2/2023
# The walrus (python 3.8) operator is so annoying

I get that it's not meant to be used for funny golfing reasons but please why won't it work when it seems like it should. I have spent many many hours breaking my head over this.

The [PEP](https://peps.python.org/pep-0572/) says that things like:
```py
a = b := c
```
are not allowed because uh uh uh _readability_.

IMO, consistency is way more important than **readability** because that feels so much more, well, consistent. ~~lol~~


Like, I can't even do things like:

```py
lol = [(2, 3)] # Assume more elements here
for (x, pair := (a, b)) in enumerate(lol):
    pass
```

### Here is what I propose

Simply make `:=` return the left hand side argument. Nothing else. Literally that simple.

I, ~~in my infinite generosity~~, provide an implementation below:
```py
def __walrus__(self, other):
    self.value = other
    return self.value
```

I considered returning the right hand side argument, such that:
```py
import random
x = (y := random.random())
```
would give x and y different values. Will `x` be a pointer to the `random.random` function so that `x()` would be possible or `x` gets the function call result was the thing that led me to completely give up and just stick to returning LHS values.

But nothing I can do so I have to live with these annoyances.

(I'll add more examples when I can rememeber them)
