---
layout: base.liquid
tags: post
ptitle: "Python #1"
title: "Python #1"
---

# Python walrus operator is so annoying

I get that it's not meant to be used for funny golfing reasons but please why won't it work when it seems like it should. I have spent many many hours breaking my head over this.

The [PEP](https://peps.python.org/pep-0572/) says that things like:
```py
a = b := c
```
are not allowed because uh uh uh _readability_.

IMO, consistency is way more important than **readability** because that feels so much more, well, consistent. ~~lol~~

### Here is what I propose

Simply make `:=` return the left hand side argument. Nothing else. Literally that simple.

I, ~~in my infinite generosity~~, provide an implementation below:
```py
def __walrus__(self, other):
    self.value = other
    return self.value
```